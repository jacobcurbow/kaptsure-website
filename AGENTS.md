# Project instructions


## Two-Mac primary workflow

Use `~/Documents/Codex Projects/Primary/Kaptsure` on either Mac and branch `codex/reconcile-working-copies-20261019`. Confirm the computer, repository origin, active branch and `git status` before work. Preserve original checkouts, backups, tags and stashes.

Before work, run `git fetch origin`. With a clean working tree on the review branch, run `git merge --ff-only origin/codex/reconcile-working-copies-20261019`. Use `pull.ff=only` and `push.default=simple`; track `origin/codex/reconcile-working-copies-20261019`, never a default branch. If dirty, preserve unfinished work first on a uniquely named WIP branch or private backup. If histories diverge, retain both histories and reconcile deliberately; never reset, force-push, overwrite files, or auto-merge a default branch. A failed fast-forward is a stop-and-review condition.

Before switching computers, inspect the diff and untracked files, stage only intended source/test/documentation/configuration changes (never secrets, environment files or private exports), run appropriate checks, and commit completed work. Fetch again and push the review branch normally; verify `git ls-remote origin refs/heads/codex/reconcile-working-copies-20261019` equals local HEAD. Do not start on the other Mac until the push succeeds and it fetches and fast-forwards to that commit. Preserve unfinished work in a named WIP branch or private backup and record its location; a local commit alone does not transfer work. Publishing another branch requires checking its deployment triggers first.

`vercel.json` disables automatic Git deployments only for `codex/reconcile-working-copies-20261019` through `git.deploymentEnabled`. Keep that exact exclusion in this branch; do not replace it with a global disable, wildcard, or ignored-build setting. Other branches and production behavior must remain unchanged. Manual deployments, production releases, default-branch merges, deployment-setting changes, migrations and feature activation require their own explicit authorization.

Optional proposals remain pending: Gardiner phone CTA/customer SMS consent; Pulse password recovery, cloud backup, Maverick and Meta comparison; Kaptsure Privacy/Terms policy content. Presence on the review branch or passing tests is not approval to release or activate them.
