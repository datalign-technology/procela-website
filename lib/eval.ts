// Single source of truth for the downloadable evaluation build. When a new
// eval release ships, update these four constants (and the email copy in
// app/api/demo/route.ts picks up the URL automatically).
export const EVAL_VERSION = "0.1.1";
export const EVAL_FILE_NAME = `procela-eval-${EVAL_VERSION}.zip`;
export const EVAL_TAG = `eval-v${EVAL_VERSION}`;
export const EVAL_ZIP_URL = `https://github.com/datalign-technology/procela/releases/download/${EVAL_TAG}/${EVAL_FILE_NAME}`;
export const EVAL_RELEASE_URL = `https://github.com/datalign-technology/procela/releases/tag/${EVAL_TAG}`;
// Approximate on-disk size of the bundle, for setting expectations on the page.
export const EVAL_SIZE = "~150 KB";
