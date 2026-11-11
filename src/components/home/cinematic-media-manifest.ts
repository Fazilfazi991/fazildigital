export type CinematicMediaVariant = {
  video: string;
  poster: string;
  width: number;
  height: number;
  durationSeconds: number;
};

/**
 * Asset handoff contract for the Google Flow producer.
 * Keep ready=false and both variants null until approved, real exports and posters exist.
 * The component never requests placeholder URLs.
 */
export const cinematicMediaManifest: {
  ready: boolean;
  desktop: CinematicMediaVariant | null;
  mobile: CinematicMediaVariant | null;
} = {
  ready: false,
  desktop: null,
  mobile: null,
};
