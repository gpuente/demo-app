import 'dotenv/config';

export default {
  expo: {
    name: 'demo-app',
    slug: 'demo-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    extra: {
      PEXELS_API_KEY: process.env.PEXELS_API_KEY,
    },
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: {
      fallbackToCacheTimeout: 0,
      useClassicUpdates: true
    },
    assetBundlePatterns: [
      '**/*'
    ],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF'
      }
    },
    web: {
      favicon: './assets/favicon.png'
    },
    description: ''
  }
}
