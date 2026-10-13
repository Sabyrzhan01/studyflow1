# Chat brainstorm — StudyFlow

> Submission note: This is a concise project-planning record, not a verbatim export of a complete chat transcript. Preserve or append the actual conversation if the instructor explicitly requires verbatim history.

## User's assignment
The assignment asks for an app idea developed with the AI-native workflow in the referenced article/video, a `chat-brainstorm.txt` or `.md` file, required role/process documentation, detailed GitHub Issues, and a public GitHub link. The user stated that the deadline was 13 minutes away and requested the simplest possible scope.

## Brainstorm decisions

**Assistant proposal:** Build StudyFlow, a small student study planner. A student can create tasks with due dates and priorities, mark them done, filter them, delete them, and see completion stats.

**Why this idea:** It solves a familiar student problem, can be demonstrated quickly, and has distinct features that decompose into testable issues. A local-first app avoids spending deadline time on accounts, databases, API keys, or deployment infrastructure.

**Scope decision:** Use plain HTML, CSS, and JavaScript. Keep the MVP dependency-free and usable by opening `index.html`. Store tasks in browser localStorage. No login, cloud sync, AI integration, notifications, or collaboration in the first version.

**Quality decisions:** Escape user-provided task titles, validate required fields, keep controls keyboard-accessible, test persistence and filtering, and document local-storage limitations. Never claim a test passed without running it.

## Initial issue decomposition
1. Establish product specification and AI-native workflow documentation.
2. Build responsive dashboard.
3. Implement task creation and validation.
4. Implement completion, filters, deletion, and progress.
5. Add persistence and safe rendering.
6. Verify the MVP and document release.

The detailed issue drafts, acceptance criteria, dependencies, and test plans are in `_docs/issue-plan.md`.

## Process to follow
Discover -> specify -> create real GitHub issues -> implement one issue at a time -> run tests -> verify acceptance criteria -> commit/push -> close only verified issues -> record learnings.

## Important status distinction
Writing this file and the issue drafts does not itself create GitHub issue events. Actual repository creation, issue timestamps, test results, and closure must be confirmed in GitHub. Do not invent or backdate them.
