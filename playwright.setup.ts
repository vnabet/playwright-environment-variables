import { FullConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

/**
 * Fonction de setup global de playwright
 * Elle est appelée dans la configuration 'playwright.config.ts'
 * @param config 
 *  
 */
async function globalSetup(config:FullConfig) {
  //On charge des variables de base quel que soit l'environnement de test
  dotenv.config({ path: path.resolve(__dirname, './environment', `.env`)});

  //En fonction de l'environnement de test (dev ou prod)
  //Cette variable d'environnement process.env.test est renseignée dans le package.json, quand on appelle l'un des scripts de test
  if(process.env.test) {
    // On charge le bon fichier d'environement
    dotenv.config({ path: path.resolve(__dirname, './environment', `.env.${process.env.test}`) , override: true});
  }
}

export default globalSetup;