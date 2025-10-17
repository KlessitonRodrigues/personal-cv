# Dockerfile
FROM node:20-bullseye

# Install dependencies
RUN apt-get update && apt-get install -y \
    openjdk-17-jdk \
    gradle \
    git \
    wget \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Install Expo and EAS globally
RUN npm install -g expo-cli eas-cli

# Set environment variables
ENV ANDROID_SDK_ROOT=/opt/android-sdk
ENV PATH=$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$ANDROID_SDK_ROOT/platform-tools

# Install Android SDK (working version)
RUN mkdir -p $ANDROID_SDK_ROOT/cmdline-tools && \
    cd $ANDROID_SDK_ROOT/cmdline-tools && \
    wget https://dl.google.com/android/repository/commandlinetools-linux-10406996_latest.zip -O commandlinetools.zip && \
    unzip commandlinetools.zip && rm commandlinetools.zip && \
    mv cmdline-tools latest && \
    yes | $ANDROID_SDK_ROOT/cmdline-tools/latest/bin/sdkmanager --licenses && \
    $ANDROID_SDK_ROOT/cmdline-tools/latest/bin/sdkmanager --install "platform-tools" "platforms;android-34" "build-tools;34.0.0"

# Set working directory
WORKDIR /app

# Copy package and install
COPY package*.json ./
RUN npm install

# Copy all app files
COPY . .

# Default command: bash shell
CMD ["bash"]

