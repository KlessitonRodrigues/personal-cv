# Personal CV

Monorepo for my personal profile/CV: a web app, a mobile wrapper, and the AWS infrastructure used to deploy it.

**Live site:** https://profile.klessitonrds.com/

## 🗂️ Structure

This is a [Yarn (v1) workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) monorepo managed with [Turborepo](https://turbo.build/).

```
.
├── apps/
│   ├── vite-profile-page/     # Web app (React + Vite)
│   └── expo-profile-app/      # Mobile wrapper (Expo + WebView)
└── services/
    └── aws-cloudfront-deploy/ # Infra-as-code (AWS CDK, S3 + CloudFront)
```

| Workspace | Description | Stack |
| --- | --- | --- |
| [`apps/vite-profile-page`](./apps/vite-profile-page) | The CV/profile website | React 19, TypeScript, Vite, styled-components |
| [`apps/expo-profile-app`](./apps/expo-profile-app) | Mobile app that wraps the website in a WebView | Expo, React Native |
| [`services/aws-cloudfront-deploy`](./services/aws-cloudfront-deploy) | Deploys the built website to AWS | AWS CDK (S3 + CloudFront) |

## 🚀 Getting Started

Requires Node.js and Yarn `1.22.22` (see `packageManager` in `package.json`).

```bash
yarn install
```

### Root scripts (run via Turborepo across all workspaces)

```bash
yarn dev     # start all apps in dev mode
yarn build   # build all apps/services
yarn lint    # lint all workspaces
yarn test    # test all workspaces
```

You can also run any script scoped to a single workspace, e.g.:

```bash
yarn workspace @apps/vite-profile-page dev
```

## 🌐 Web App — `apps/vite-profile-page`

```bash
yarn workspace @apps/vite-profile-page dev       # start dev server (vite --host)
yarn workspace @apps/vite-profile-page build      # production build (+ image compression)
yarn workspace @apps/vite-profile-page preview    # preview the production build
yarn workspace @apps/vite-profile-page format     # format source with Prettier
```

i18n content lives under `src/public/i18n/` (`en`, `es`, `pt`).

## 📱 Mobile App — `apps/expo-profile-app`

Renders the deployed/local web page inside a React Native WebView.

```bash
yarn workspace @apps/expo-profile-app start             # expo start
yarn workspace @apps/expo-profile-app android            # expo start --android
yarn workspace @apps/expo-profile-app ios                # expo start --ios
yarn workspace @apps/expo-profile-app web                # expo start --web
yarn workspace @apps/expo-profile-app android-build       # EAS build (preview profile)
```

### Local EAS build (via Docker)

```bash
yarn workspace @apps/expo-profile-app start-container     # build & start the local EAS builder container
yarn workspace @apps/expo-profile-app build-container      # run the local EAS build inside the container
yarn workspace @apps/expo-profile-app stop-container       # stop the container
```

## ☁️ Deployment — `services/aws-cloudfront-deploy`

Deploys the built `vite-profile-page` static site to AWS (S3 + CloudFront) using AWS CDK.

1. Build the website:

   ```bash
   yarn workspace @apps/vite-profile-page build
   ```

2. Export AWS credentials:

   ```bash
   export AWS_ACCESS_KEY_ID=
   export AWS_SECRET_ACCESS_KEY=
   export AWS_DEFAULT_REGION=us-east-1
   ```

3. Synthesize / deploy the CDK stack:

   ```bash
   yarn workspace @services/aws-cloudfront-deploy cdk-synt
   yarn workspace @services/aws-cloudfront-deploy cdk-deploy
   ```

### CI/CD

Pushes to `master` trigger [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml), which builds the web app and runs `cdk deploy` automatically using the `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` repository secrets.

## 🤖 For AI Agents

See [`AGENTS.md`](./AGENTS.md) for a detailed breakdown of the repository intended for AI coding agents.

## 📄 License

MIT
