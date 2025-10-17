## ☰ Profile Page

#### Available on: https://djc7924qzcvck.cloudfront.net/

### 🔨 Frameworks

- ReactJS
- Styled Components
- ViteJS

### 🚀 Start Application

- Start development

  ```
  yarn
  yarn dev
  ```

- Start build preview

  ```
  yarn
  yarn build
  yarn preview
  ```

### 🤖 Test Application

- Test development environment

  ```
  yarn test-dev
  ```

- Test production environment

  ```
  yarn test-prod
  ```

### 📦 Deploy Application

- Generate website assets

  ```
  yarn build
  ```

- Add AWS keys

  ```
  export AWS_ACCESS_KEY_ID=
  export AWS_SECRET_ACCESS_KEY=
  export AWS_DEFAULT_REGION=us-east-1
  ```

- Deploy

  ```
  yarn cdk-deploy
  ```

### Generate Mobile App

- build container

  ```
  docker-compose up -d --build
  ```

- access the container

  ```
  docker exec -it eas-local-builder bash
  ```

- generete apk file

  ```
  eas build --platform android --profile development --local
  ```
