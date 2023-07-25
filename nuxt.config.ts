// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxthq/ui',
    '@productdevbook/chatwoot'
  ],
  chatwoot: {
    init: {
      websiteToken: process.env.webToken,

    },
    settings: {
      locale: 'en',
      position: 'left',
      launcherTitle: 'Chat with us',
       expandable: true,

      // ... and more settings
    },
    // If this is loaded you can make it true, https://github.com/nuxt-modules/partytown
    
  }
})
