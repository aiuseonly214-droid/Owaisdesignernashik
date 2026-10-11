/** Owais brand logo served from public/. */
export const DEFAULT_LOGO_URL = "/owais-logo.png";

/** Background-removed signature (transparent PNG) served from public/. */
export const DEFAULT_SIGNATURE_URL = "/owais-signature.png";

/**
 * Print palette for the A4 documents.
 * Blue + white identity with a teal accent as the third brand colour.
 */
export const DOC = {
  primary: "#123A70",
  primaryText: "#FFFFFF",
  accent: "#0E8F8C",
  tint: "#EEF4FB",
  tintAlt: "#F7FAFD",
  border: "#CBD9EA",
  text: "#12233A",
  muted: "#5A6B80",
} as const;
