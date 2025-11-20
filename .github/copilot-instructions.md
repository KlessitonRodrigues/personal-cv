
# Personal CV — AI Coding Agent Instructions (concise)

This repo is a multi-platform personal portfolio (Web via Vite, Mobile via Expo) written in React + TypeScript. The notes below highlight patterns, workflows, and precise locations you will use frequently.

- **Routing & Platform detection:** `src/app.tsx` decides between `createBrowserRouter` and `createMemoryRouter` using `isEmbbedMobile()` (it checks for `.html` in pathname + screen size). Check `src/pages/routes.tsx` for lazy-loaded routes via `React.lazy()`.

- **Component & folder conventions:** Components live in their own folder with an `index.ts` barrel export (PascalCase folder names). Shared UI lives under `src/lib/common/` (e.g., `If`, `Icons`, `Loading`) and styled tokens under `src/lib/common/StyledComponents/`.

- **Styling & theme:** Theme utilities in `src/styles/theme.ts` and colors in `src/styles/colors.ts`. Use `cssSize()` helpers and the `screenSize` breakpoints defined in `src/styles/theme.ts`.

- **Types & path aliases:** Global types in `src/@types/` (Namespaces: `Props.*`, `Utils.*`, `Styles.*`, `Hooks.*`). Project uses `vite-tsconfig-paths` — prefer path aliases when importing.

- **I18n:** JSON files in `public/i18n/` (e.g., `en.json`, `pt.json`). Use `getText(path)` from `src/utils/i18n.ts` which returns `'NO_TEXT'` fallback.

- **Assets & Vite config:** Image compression is handled in `vite.config.ts` (JPG/PNG optimization). If images look degraded, adjust compression settings there.

- **Platform folders:**
  - `_expo/` — React Native app entry (`App.js`, `app.json`). Use `cd _expo && yarn android` or `expo start` for device testing.
  - `_aws/` — CDK infra and deployment scripts (see `_aws/awsDeploy.ts`, `cdk.json`). Deploy requires AWS credentials.
  - `_tests/` — Selenium/Jest tests. WebDriver config in `_tests/config/webDriver.ts`.

- **Scripts & testing:** Top-level `package.json` includes `yarn dev`, `yarn build`, `yarn preview`. Tests use Selenium-based suites; `yarn test-dev`, `yarn test-build`, `yarn test-prod` map to environments — inspect `_tests/package.json` for details.

- **Common patterns & gotchas:**
  - Mobile routing uses pathname detection not UA — look for `isEmbbedMobile()` usages.
  - Use the `If` component (`src/lib/common/If/index.ts`) for terse conditional rendering.
  - Lazy routes and Suspense boundaries are the expected pattern for pages.

- **When changing UI or routes:** Update `src/pages/routes.tsx` and corresponding lazy imports. Follow existing barrel export patterns and update i18n keys in `public/i18n/*.json`.

- **Where to look for examples:**
  - `src/pages/profile/_content/Experience/index.tsx` — example of page composition using shared components.
  - `src/lib/common/Icons/` — how icons are organized and exported.
  - `_tests/navigation/pages.spec.ts` — integration test examples against the SPA.

If anything is unclear or you want the file expanded with more examples (CLI commands, tests, or specific file snippets), tell me which area to expand. 
