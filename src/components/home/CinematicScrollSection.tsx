"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cinematicMediaManifest } from "./cinematic-media-manifest";
import "./cinematic-scroll.css";

export type CinematicProgress = {
  progress: number;
  chapter: 0 | 1 | 2 | 3;
};

type CinematicScrollSectionProps = {
  renderOverlay: (state: CinematicProgress) => ReactNode;
};

type NetworkInformation = EventTarget & {
  saveData?: boolean;
  effectiveType?: string;
};

const initialProgress: CinematicProgress = { progress: 0, chapter: 0 };
const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

function chapterAt(progress: number): CinematicProgress["chapter"] {
  return Math.min(3, Math.floor(progress * 4)) as CinematicProgress["chapter"];
}

function prefersStaticExperience() {
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  const dataSaver = connection?.saveData === true;
  const slowNetwork = connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches || dataSaver || slowNetwork;
}

export function CinematicScrollSection({ renderOverlay }: CinematicScrollSectionProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const scrollStateRef = useRef<CinematicProgress>(initialProgress);
  const lastPresentedProgressRef = useRef(0);
  const frameReadyRef = useRef(false);
  const [scrollState, setScrollState] = useState<CinematicProgress>(initialProgress);
  const [mediaAllowed, setMediaAllowed] = useState(false);
  const [mediaInRange, setMediaInRange] = useState(false);
  const [isMobileSource, setIsMobileSource] = useState(false);
  const [frameReady, setFrameReady] = useState(false);
  const [mediaFailed, setMediaFailed] = useState(false);

  const manifestReady = cinematicMediaManifest.ready && Boolean(cinematicMediaManifest.desktop && cinematicMediaManifest.mobile);

  useEffect(() => {
    if (!manifestReady) return;

    const mediaPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    const updateMediaPermission = () => {
      const canDrawCanvas = document.createElement("canvas").getContext("2d") !== null;
      setMediaAllowed(!prefersStaticExperience() && canDrawCanvas);
    };

    updateMediaPermission();
    mediaPreference.addEventListener("change", updateMediaPermission);
    connection?.addEventListener("change", updateMediaPermission);

    return () => {
      mediaPreference.removeEventListener("change", updateMediaPermission);
      connection?.removeEventListener("change", updateMediaPermission);
    };
  }, [manifestReady]);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 760px)");
    const updateSourceSize = () => setIsMobileSource(mobileQuery.matches);
    updateSourceSize();
    mobileQuery.addEventListener("change", updateSourceSize);
    return () => mobileQuery.removeEventListener("change", updateSourceSize);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    const story = stage?.closest<HTMLElement>("#cinematic-intro");
    if (!stage || !story) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    let context: CanvasRenderingContext2D | null = null;
    try {
      context = canvas?.getContext("2d", { alpha: false, desynchronized: true }) ?? null;
    } catch { context = null; }
    let isVisible = false;

    const sizeCanvas = () => {
      if (!canvas) return;
      const bounds = stage.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.round(bounds.width * ratio));
      const height = Math.max(1, Math.round(bounds.height * ratio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        if (frameReadyRef.current && video?.readyState && video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) drawFrame();
      }
    };

    const drawFrame = () => {
      if (!canvas || !context || !video || video.videoWidth < 1 || video.videoHeight < 1) return;
      sizeCanvasIfNeeded();
      const scale = Math.max(canvas.width / video.videoWidth, canvas.height / video.videoHeight);
      const sourceWidth = canvas.width / scale;
      const sourceHeight = canvas.height / scale;
      const sourceX = (video.videoWidth - sourceWidth) / 2;
      const sourceY = (video.videoHeight - sourceHeight) / 2;
      try {
        context.drawImage(video, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, canvas.width, canvas.height);
        if (!frameReadyRef.current) {
          frameReadyRef.current = true;
          setFrameReady(true);
        }
      } catch {
        // The owner portrait remains visible if a browser cannot draw a decoded frame.
      }
    };

    const sizeCanvasIfNeeded = () => {
      if (!canvas) return;
      const bounds = stage.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.round(bounds.width * ratio));
      const height = Math.max(1, Math.round(bounds.height * ratio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const seekToProgress = (progress: number) => {
      if (!video || !mediaAllowed || !Number.isFinite(video.duration) || video.duration <= 0 || video.seeking) return;
      if (video.readyState < HTMLMediaElement.HAVE_METADATA) return;
      const endGuard = Math.min(0.06, video.duration * 0.01);
      const targetTime = clamp(progress) * Math.max(0, video.duration - endGuard);
      if (Math.abs(video.currentTime - targetTime) < 0.08) {
        if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) drawFrame();
        return;
      }
      try {
        if (typeof video.fastSeek === "function") video.fastSeek(targetTime);
        else video.currentTime = targetTime;
      } catch {
        setMediaFailed(true);
      }
    };

    const update = () => {
      rafRef.current = null;
      if (!isVisible) return;
      const bounds = story.getBoundingClientRect();
      const scrollDistance = Math.max(1, story.offsetHeight - window.innerHeight);
      const progress = clamp(-bounds.top / scrollDistance);
      const nextChapter = chapterAt(progress);
      if (nextChapter !== scrollStateRef.current.chapter || Math.abs(progress - lastPresentedProgressRef.current) >= 0.025) {
        lastPresentedProgressRef.current = progress;
        scrollStateRef.current = { progress, chapter: nextChapter };
        setScrollState(scrollStateRef.current);
      }

      seekToProgress(progress);
    };

    const scheduleUpdate = () => {
      if (rafRef.current === null && isVisible) rafRef.current = window.requestAnimationFrame(update);
    };

    const intersection = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      setMediaInRange(entry.isIntersecting);
      if (isVisible) {
        sizeCanvas();
        scheduleUpdate();
      }
    }, { rootMargin: "180px 0px" });
    if (intersection) intersection.observe(story);
    else {
      isVisible = true;
      setMediaFailed(true);
      scheduleUpdate();
    }

    const resizeObserver = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(() => {
      sizeCanvas();
      scheduleUpdate();
    });
    resizeObserver?.observe(stage);

    const handleSeeked = () => {
      drawFrame();
      scheduleUpdate();
    };
    const handleVideoError = () => {
      setMediaFailed(true);
      setFrameReady(false);
      frameReadyRef.current = false;
    };
    video?.addEventListener("loadedmetadata", scheduleUpdate);
    video?.addEventListener("loadeddata", drawFrame);
    video?.addEventListener("seeked", handleSeeked);
    video?.addEventListener("error", handleVideoError);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    scheduleUpdate();

    return () => {
      intersection?.disconnect();
      resizeObserver?.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      video?.removeEventListener("loadedmetadata", scheduleUpdate);
      video?.removeEventListener("loadeddata", drawFrame);
      video?.removeEventListener("seeked", handleSeeked);
      video?.removeEventListener("error", handleVideoError);
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      video?.pause();
      video?.removeAttribute("src");
      video?.load();
      if (canvas) {
        canvas.width = 0;
        canvas.height = 0;
      }
      frameReadyRef.current = false;
    };
  }, [mediaAllowed, mediaInRange, mediaFailed]);

  const activeVariant = mediaAllowed
    ? isMobileSource ? cinematicMediaManifest.mobile : cinematicMediaManifest.desktop
    : null;

  return (
    <div className="fd-cinematic-media-shell">
      {mediaAllowed && mediaInRange && activeVariant && !mediaFailed && (
        <video
          ref={videoRef}
          className="fd-cinematic-source"
          src={activeVariant.video}
          poster={activeVariant.poster}
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        />
      )}
      <div ref={stageRef} className="fd-cinematic-stage" data-cinematic-ready={frameReady && !mediaFailed}>
        <Image
          className="fd-cinematic-fallback"
          src="/images/about/mohammad-fazil.webp"
          alt="Mohammad Fazil seated in a café"
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
          preload
          priority={false}
        />
        <canvas ref={canvasRef} className="fd-cinematic-canvas" aria-hidden="true" />
        <div className="fd-cinematic-overlay">{renderOverlay(scrollState)}</div>
      </div>
    </div>
  );
}
