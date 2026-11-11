"use client";

import { useId, useRef, type MouseEvent, type ReactNode } from "react";
import { ReviewForm } from "@/components/home/HomeInteractions";
import styles from "./project-enquiry-dialog.module.css";

type ProjectEnquiryDialogProps = {
  children: ReactNode;
  className: string;
};

export function ProjectEnquiryDialog({ children, className }: ProjectEnquiryDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const id = useId();
  const titleId = `project-enquiry-title-${id}`;

  function openDialog() {
    if (!dialogRef.current?.open) dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) closeDialog();
  }

  return <>
    <button ref={triggerRef} type="button" className={className} aria-haspopup="dialog" aria-controls={`project-enquiry-${id}`} onClick={openDialog}>{children}</button>
    <dialog ref={dialogRef} id={`project-enquiry-${id}`} className={styles.dialog} aria-labelledby={titleId} onClick={handleBackdropClick} onClose={() => triggerRef.current?.focus()}>
      <div className={styles.panel}>
        <button type="button" className={styles.close} aria-label="Close project enquiry" onClick={closeDialog}><svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m4 4 12 12M16 4 4 16" /></svg></button>
        <p className={styles.eyebrow}>A direct conversation with Mohammad</p>
        <h2 id={titleId} className={styles.title}>Tell me about your project.</h2>
        <p className={styles.intro}>Share a little context and prepare a message. You can review it before opening WhatsApp; nothing is sent by this form.</p>
        <ReviewForm context="project" />
      </div>
    </dialog>
  </>;
}
