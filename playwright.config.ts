import {PlaywrightTestConfig} from '@playwright/test';


const config:PlaywrightTestConfig = {
  // On appelle la fonction de setup global qui se trouve dans le fichier 'playwright.setup.ts'
  globalSetup: './playwright.setup.ts'
}

export default config;