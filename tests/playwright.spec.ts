import {expect, test } from '@playwright/test';

test('mon test', async ({page}) => {
  await page.goto(process.env.URL as string);

  await expect(page).toHaveTitle('Logiciels et matériel pour le monde agricole - ISAGRI')
})