# Agent instructions

## Before changing code
- Read `_docs/process.md`, `_docs/spec.md`, and relevant role instructions in `_docs/team/`.
- Work from a GitHub issue with explicit acceptance criteria; keep changes narrowly scoped.
- Ask rather than silently expanding product scope when requirements conflict.

## Engineering rules
- Keep the MVP dependency-free unless an approved issue requires a dependency.
- Use semantic HTML, accessible labels, keyboard-operable controls, and responsive CSS.
- Escape user-controlled strings before rendering HTML. Validate inputs and handle browser storage errors.
- Do not add tracking, remote requests, secrets, or collect personal data.
- Add or update tests for behavior changes. Never claim a test passed unless it was run and its result observed.

## Definition of done
- Acceptance criteria are satisfied and documented.
- Relevant automated checks pass; manual checks are recorded when automation is unavailable.
- Documentation reflects actual behavior and limitations.
- Changes are reviewed, committed, and linked to the issue. Close an issue only after verification.
