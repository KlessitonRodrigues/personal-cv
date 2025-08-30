# Personal CV Project - AI Coding Agent Instructions

## Project Overview

This is a multi-platform personal portfolio website built with React + TypeScript, deployed to AWS CloudFront. The codebase supports **4 different deployment targets** from a single React source:

- **Web**: Main Vite-powered SPA hosted on AWS CloudFront
- **Mobile (Cordova)**: Android/Electron apps via `_mobile/`
- **Mobile (Expo)**: React Native apps via `_expo/`
- **Native**: Platform-specific builds via `_native/`

## Architecture Patterns

### Routing Strategy

- Uses **conditional router selection** in `src/app.tsx`: `createMemoryRouter` for embedded mobile, `createBrowserRouter` for web
- Lazy-loaded route components via `lazy()` imports in `src/pages/routes.tsx`
- Mobile detection: `isEmbbedMobile()` checks for `.html` in pathname + tablet screen size

### Component Architecture

- **Folder-based components**: Each component lives in its own directory with `index.ts` barrel exports
- **Conditional rendering**: Custom `If` component (`src/lib/common/If/`) for clean conditional JSX
- **Styled Components**: Theme-aware styling with `src/styles/theme.ts` supporting 5 color schemes (indigo, purple, blue, magenta, green)
- **TypeScript declarations**: Global types in `src/@types/` - particularly `Props.*` for component interfaces

### Platform-Specific Logic

- **Mobile detection**: `isMobileScreen()` for responsive behavior, `isEmbbedMobile()` for router choice
- **URL switching**: WhatsApp links change between web/mobile versions based on platform
- **Asset optimization**: Vite plugin aggressively compresses images (JPG: 15%, PNG: 5% quality)

## Development Workflows

### Local Development

```bash
yarn dev          # Development server with --host flag
yarn build        # Production build
yarn preview      # Preview built assets with --host
```

### Testing (Selenium-based)

```bash
yarn test-dev     # Test against dev server
yarn test-build   # Test built assets locally
yarn test-prod    # Test production CloudFront deployment
```

Tests run in `_tests/` with Jest + Selenium WebDriver, 60s timeout per test.

### Multi-Platform Builds

```bash
# Mobile (Cordova)
yarn run-android  # Build & run Android app
yarn run-web      # Serve Cordova web version

# Expo (React Native)
cd _expo/personal-cv && expo start --android

# AWS Deployment
yarn build && yarn cdk-deploy  # Requires AWS credentials in env
```

## Key Patterns & Conventions

### Styling System

- **Theme function**: `getTheme(dark: boolean, color: ThemeColors)` generates complete theme objects
- **CSS utility**: `cssSize(number | string)` converts numbers to rem units (`size * 0.2`)
- **Responsive breakpoints**: Defined in `screenSize` object (mobileS: 320px → desktopL: 2560px)
- **Color system**: Material + Ant Design color palettes imported from `src/styles/colors.ts`

### Internationalization

- **JSON-based**: `src/public/i18n/en.json` and `pt.json`
- **Utility function**: `getText(path)` retrieves translations based on `localStorage` language setting
- **Auto-fallback**: Returns 'NO_TEXT' for missing keys

### TypeScript Structure

- **Namespace-based**: Global types organized under `Props.*`, `Utils.*`, `Styles.*`, `Hooks.*` namespaces
- **Path mapping**: `vite-tsconfig-paths` enables `src/` imports from anywhere

## Deployment Architecture

### AWS Infrastructure (CDK)

- **S3 + CloudFront**: Static site with SPA routing (404 → index.html)
- **Auto-deployment**: `yarn cdk-deploy` builds assets and updates infrastructure
- **Asset hashing**: Vite generates `chunk-[hash].js` files for cache busting

### Multi-Platform Strategy

Each platform folder contains its own `package.json` and build scripts:

- `_deploy/`: AWS CDK infrastructure code
- `_mobile/`: Cordova configuration + platform-specific scripts
- `_expo/`: Expo/EAS build configuration
- `_tests/`: Selenium test suite targeting all environments

## Common Gotchas

1. **Mobile routing**: Always check `isEmbbedMobile()` logic when debugging mobile-specific routing issues
2. **Asset optimization**: Images are heavily compressed - check `vite.config.ts` if assets appear degraded
3. **Platform detection**: `isBuiltIn` checks for `.html` in pathname, not user agent
4. **Test environments**: Each test mode (`test-dev`, `test-build`, `test-prod`) targets different URLs/configs
5. **AWS deployment**: Requires manual environment variable setup for AWS credentials before `cdk-deploy`

## File Naming Conventions

- Component folders: PascalCase with `index.ts` barrel exports
- Utility files: camelCase `.ts` files
- Platform folders: Prefixed with `_` (e.g., `_mobile/`, `_tests/`)
- Type files: `*.d.ts` in `src/@types/` with namespace organization
