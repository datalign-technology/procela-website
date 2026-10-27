// Single source of truth for the downloadable evaluation build. The eval lives
// in the PUBLIC procela-eval repo — the private source repo isn't visible to
// prospects — so the download is that repo's "Download ZIP" archive, which
// ships the compose file and pulls public images (no GitHub account or
// `docker login` needed). When a new eval build is published, update
// EVAL_VERSION; the page copy, the quick-start, and the emails follow.
export const EVAL_VERSION = "0.1.2";
export const EVAL_REPO_URL = "https://github.com/datalign-technology/procela-eval";
// The repo's source archive — GitHub serves it as an attachment named
// procela-eval-main.zip, so a same-tab click downloads without navigating away.
export const EVAL_ZIP_URL = `${EVAL_REPO_URL}/archive/refs/heads/main.zip`;
export const EVAL_CLONE_URL = EVAL_REPO_URL;
export const EVAL_FILE_NAME = "procela-eval-main.zip";
// The one command that brings the stack up from the unzipped/cloned folder.
export const EVAL_COMPOSE_CMD = "docker compose -f docker-compose.eval.yml up";
