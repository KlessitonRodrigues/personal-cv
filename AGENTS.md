# AGENTS.md

This file provides guidance for AI coding agents working in this repository.

## Repository Overview

This is a Yarn (v1) workspaces monorepo managed with **Turborepo**, containing the source for a personal profile/CV website, a mobile wrapper app, and the AWS deployment infrastructure.

- Package manager: `yarn@1.22.22`
- Task runner: `turbo` (see `turbo.json`)
- Workspaces: `apps/*`, `services/*`

### Root file structure

```
.
├── AGENTS.md
├── readme.md
├── package.json
├── turbo.json
├── yarn.lock
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD pipeline
├── apps/
│   ├── vite-profile-page/
│   └── expo-profile-app/
└── services/
    └── aws-cloudfront-deploy/
```

### Root scripts

```
yarn dev     # turbo run dev
yarn build   # turbo run build
yarn lint    # turbo run lint
yarn test    # turbo run test
```

---

## apps/

### apps/vite-profile-page

The main profile/CV website (web app).

**Technologies:**
- React 19
- TypeScript
- Vite 8 (`@vitejs/plugin-react`)
- styled-components 6
- react-router-dom 7
- react-icons
- sharp (image compression, used in `postbuild`)
- Prettier (`@trivago/prettier-plugin-sort-imports`)
- i18next + react-i18next (JSON resources in en/es/pt)

**File structure:**
```
apps/vite-profile-page/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .prettierrc
├── yarn.lock
├── dist/                          # build output (generated)
├── .turbo/                        # turbo cache (generated)
└── src/
    ├── app.tsx                    # app root
    ├── global.d.ts
    ├── theme.d.ts
    ├── components/
    │   ├── certifications/        # certification.notes.tsx, certifications.images.tsx
    │   ├── coding/                # coding.javascript.tsx
    │   ├── common/                # shared UI (accordion, android frame, document view,
    │   │                          #   icons, if, link + icon, link scroll to hash,
    │   │                          #   loading, option list, page, providers,
    │   │                          #   selectors dropdown/line, sidebar, text)
    │   │   └── styled/            # styled-components primitives (accordion, background,
    │   │                          #   buttons, containers, divisors, flex, image, list,
    │   │                          #   model, option list, progress, select, status bar, user)
    │   ├── profile/               # profile.experience.tsx, profile.header.tsx
    │   ├── projects/              # projects.list.tsx
    │   ├── resume/                # resume.certifications.tsx, resume.experience.tsx,
    │   │                          #   resume.header.tsx, resume.languages.tsx, resume.projects.tsx
    │   └── settings/              # settings.tsx
    ├── constants/                 # constants.experience.map.ts, constants.projects.map.ts, constants.urls.ts
    ├── hooks/                     # hooks.use.theme.tsx
    ├── pages/                     # page.certification.tsx, page.coding.tsx, page.profile.tsx,
    │                              #   page.projects.tsx, page.resume.tsx, page.settings.tsx, routes.tsx
    ├── public/
    │   ├── fonts/                 # roboto500.woff2, roboto700.woff2
    │   ├── i18n/                  # en.json, es.json, pt.json
    │   ├── icons/                 # icon.jpg
    │   └── images/                # profile pictures, project screenshots, certification/udemy images
    ├── styles/                    # styles.colors.ts, styles.global.ts, styles.theme.ts, styles.utils.ts
    └── utils/                     # utils.dates.ts, utils.html.ts, utils.i18n.ts,
                                   #   utils.image.compressor.js, utils.local.storage.ts,
                                   #   utils.pdf.ts, utils.theme.ts
```

**Scripts:**
```
yarn dev       # vite --host
yarn build     # vite build (+ postbuild image compression)
yarn preview   # vite preview --host
yarn format    # prettier -c -w ./src
```

---

### apps/expo-profile-app

Mobile wrapper app that renders the profile page using React Native / Expo + WebView.

**Technologies:**
- Expo 57
- React Native 0.86
- react-native-web
- react-native-webview
- Docker / docker-compose (local EAS builder container)
- EAS Build
- Prettier

**File structure:**
```
apps/expo-profile-app/
├── App.js
├── app.json
├── eas.json
├── Dockerfile
├── docker-compose.yml
├── package.json
├── .prettierrc
└── yarn.lock
```

**Scripts:**
```
yarn start                  # expo start
yarn android / yarn ios / yarn web
yarn android-build          # eas build -p android --profile preview
yarn android-build-local    # eas build -p android --profile development --local
yarn start-container        # docker-compose up -d --build
yarn stop-container         # docker-compose down
yarn build-container        # run EAS local build inside the docker container
```

---

## services/

### services/aws-cloudfront-deploy

Infrastructure-as-code service that deploys the built `vite-profile-page` static site to AWS (S3 + CloudFront) using AWS CDK.

**Technologies:**
- AWS CDK (`aws-cdk`, `aws-cdk-lib`)
- `constructs`
- TypeScript
- ts-node
- Prettier

**File structure:**
```
services/aws-cloudfront-deploy/
├── awsDeploy.ts        # CDK stack definition (S3 + CloudFront deployment)
├── cdk.json
├── tsconfig.json
├── package.json
├── .prettierrc
├── yarn.lock
└── cdk.out/            # CDK synth output (generated)
```

**Scripts:**
```
yarn cdk-synt     # cdk synthesize
yarn cdk-deploy   # cdk deploy
```

**Required environment variables for deploy:**
```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_DEFAULT_REGION=us-east-1
```

---

## Typical Workflow

1. `apps/vite-profile-page` is built (`yarn build`) to produce static assets.
2. `services/aws-cloudfront-deploy` deploys those assets to AWS via CDK (`yarn cdk-deploy`).
3. `apps/expo-profile-app` wraps the deployed/local web page in a WebView to produce a mobile APK via EAS Build (optionally inside a Docker container for local builds).
4. CI/CD is handled via `.github/workflows/deploy.yml`.
