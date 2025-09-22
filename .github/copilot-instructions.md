# Personal CV Project — AI Coding Agent Instructions

## Project Overview

This is a multi-platform personal portfolio built with React + TypeScript, supporting:

- **Web**: Vite SPA (AWS CloudFront)
- **Mobile (Cordova)**: Android/Electron via `_mobile/`
- **Mobile (Expo)**: React Native via `_expo/`
- **Native**: Platform-specific via `_native/`

## Architecture & Patterns

- **Conditional Routing**: `src/app.tsx` chooses router (`createMemoryRouter` for embedded/mobile, `createBrowserRouter` for web) using `isEmbbedMobile()` (checks `.html` in pathname and screen size).
- **Lazy Route Loading**: All routes in `src/pages/routes.tsx` are lazy-loaded with `React.lazy()`.
- **Component Structure**: Each component in its own folder with `index.ts` barrel export. Use the custom `If` component (`src/lib/common/If/`) for conditional rendering.
- **Styling**: Theme-aware via `src/styles/theme.ts` (`getTheme`). Color schemes in `src/styles/colors.ts`. Use `cssSize()` for rem units. Responsive breakpoints in `screenSize`.
- **Types**: Global types in `src/@types/` (see `Props.*`, `Utils.*`, etc). Path mapping via `vite-tsconfig-paths`.
- **Internationalization**: JSON-based (`src/public/i18n/en.json`, `pt.json`). Use `getText(path)` (auto-fallback to 'NO_TEXT').
- **Asset Optimization**: Images compressed in Vite config (JPG: 15%, PNG: 5%).

## Developer Workflows

- **Local Dev**: `yarn dev` (with --host), `yarn build`, `yarn preview`
- **Testing**: Selenium-based in `_tests/` (Jest + Selenium, 60s timeout). Use `yarn test-dev`, `yarn test-build`, `yarn test-prod` for different targets.
- **Multi-Platform**:
  - Cordova: `yarn run-android`, `yarn run-web`
  - Expo: `cd _expo/personal-cv && expo start --android`
  - AWS: `yarn build && yarn cdk-deploy` (requires AWS credentials)

## Deployment & Infrastructure

- **AWS CDK**: `_aws/` contains infra code. S3 + CloudFront with SPA routing (404 → index.html). Asset hashing via Vite chunk files.
- **Platform Folders**: Each (`_deploy/`, `_mobile/`, `_expo/`, `_tests/`) has its own `package.json` and scripts.

## Project-Specific Conventions

- **Mobile Routing**: Always check `isEmbbedMobile()` for mobile-specific logic.
- **WhatsApp Links**: Switch between web/mobile URLs based on platform.
- **TypeScript Namespaces**: Use `Props.*`, `Utils.*`, `Styles.*`, `Hooks.*` for global types.
- **Component Naming**: PascalCase folders, `index.ts` barrels. Utilities: camelCase. Types: `*.d.ts` in `src/@types/`.

## Common Pitfalls

1. **Routing**: Mobile routing depends on pathname, not user agent.
2. **Image Quality**: Asset compression is aggressive—check `vite.config.ts` if images look degraded.
3. **Test Modes**: Each test command targets a different environment/config.
4. **AWS Deploy**: Requires manual AWS credential setup before `cdk-deploy`.

## Key Files & Directories

- `src/app.tsx`: Router selection logic
- `src/pages/routes.tsx`: Route definitions (lazy-loaded)
- `src/styles/theme.ts`, `src/styles/colors.ts`: Theme and color system
- `src/@types/`: Global TypeScript types
- `_aws/`: AWS CDK infra
- `_tests/`: Selenium test suite

---

**For AI agents:**

- Always use the platform detection helpers for routing/UI logic.
- Follow the folder/component conventions for new code.
- Reference the above files for examples of project patterns.
