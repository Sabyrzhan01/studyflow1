# StudyFlow

A lightweight student task planner built with plain HTML, CSS and JavaScript. Add study tasks, set due dates and priorities, filter open/completed work, and track completion. Tasks persist in browser `localStorage`; no account, backend, or API key is required.

## Run locally

Open `index.html` in a modern browser, or run `python3 -m http.server 8000` from this directory and visit http://localhost:8000.

## Quality checks

Run `node --test tests/app.test.cjs` for basic source-level regression checks. Manually verify add, toggle, filter, delete, reload persistence, and a narrow mobile viewport.

## Project workflow

Read [`AGENTS.md`](AGENTS.md), [`_docs/process.md`](_docs/process.md), [`_docs/spec.md`](_docs/spec.md), and [`_docs/team/`]( _docs/team/ ). See [`chat-brainstorm.md`](chat-brainstorm.md) for the actual project-planning discussion summary and [`_docs/issue-plan.md`](_docs/issue-plan.md) for issue drafts. Issue drafts are not a claim that GitHub issues were created or closed.

## Scope and limitations

This is a local-first MVP. Data is stored only in the current browser profile and is not synchronized between devices. Dates are user-entered; there are no notifications, login, or cloud backup.
