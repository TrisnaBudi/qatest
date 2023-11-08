const { expect, test } = require("@playwright/test");

test("Open Login Assemblr", async ({ page }) => {
  await page.goto("https://studio.assemblrworld.com/explore");

  // Tunggu hingga halaman dimuat sepenuhnya
  await page.waitForLoadState('load');

  // Tunggu hingga tombol login muncul
  await page.waitForSelector('p[class="Navbar_text_login_register__iaP7J"]');

  // Temukan tombol login dan klik
  await page.click('p[class="Navbar_text_login_register__iaP7J"]');
  
  // Lakukan asersi (assertion) untuk memeriksa login  popup
  await expect(page.locator('div[class="Navbar_login_container__yEoKN"]')).toBeVisible();
});
