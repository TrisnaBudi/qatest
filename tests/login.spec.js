const { expect, test } = require("@playwright/test");

test("Open Login Assemblr", async ({ page }) => {
  await page.goto("https://studio.assemblrworld.com/explore");

  // Tunggu hingga halaman dimuat sepenuhnya
  await page.waitForLoadState('load');

  // Tunggu hingga tombol login muncul
  await page.waitForSelector('p[class="Navbar_text_login_register__iaP7J"]');

  // Temukan tombol login dan klik
  await page.click('p[class="Navbar_text_login_register__iaP7J"]');
  
  // Tunggu hingga popup login muncul
  await page.waitForSelector('div[class="Navbar_login_container__yEoKN"]');

 // Tunggu hingga elemen formulir username muncul
 await page.waitForSelector('input[id="username"]');

 // Isi username
 await page.fill('input[id="username"]', 'trisna1111');

 // Tunggu hingga elemen formulir password muncul
 await page.waitForSelector('input[id="password"]');

 // Isi password
 await page.fill('input[id="password"]', '14111997');

 // Klik tombol "Sign in"
 await page.click('div[class="Navbar_button__8PfXW Navbar_sign_in__Jcu0s"]');

 // Tunggu hingga halaman login selesai dimuat
 await page.waitForLoadState('load');

 // Verifikasi bahwa pengguna telah berhasil login dengan memeriksa elemen pada halaman setelah login
 const userWelcomeMessage = await page.waitForSelector('p[class="Banner_banner_text__qe6vw Banner_explore__8KHTC "]');

 // Lakukan asersi (assertion) untuk memeriksa pesan selamat datang
 const messageText = await userWelcomeMessage.textContent();
 expect(messageText).toContain("Welcome to Assemblr Studio!");
});
