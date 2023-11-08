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

    // Tunggu hingga halaman dimuat sepenuhnya
    await page.waitForLoadState('load');

  // Tunggu hingga elemen formulir username muncul
  await page.waitForSelector('input[id="username"]');

  // Isi username dengan akun yang tidak ditemukan
  await page.fill('input[id="username"]', 'agus');

  // Tunggu hingga elemen formulir password muncul
  await page.waitForSelector('input[id="password"]');

  // Isi password dengan kata sandi salah
  await page.fill('input[id="password"]', 'password');

  // Klik tombol "Sign in"
  await page.click('div[class="Navbar_button__8PfXW Navbar_sign_in__Jcu0s"]');

  // Tunggu hingga halaman login selesai dimuat
  await page.waitForLoadState('load');

  // Verifikasi bahwa login gagal dengan memeriksa pesan kesalahan
  const usernameErrorMessage = await page.waitForSelector('p[class="Navbar_error__iDs2z"]');
  const passwordErrorMessage = await page.waitForSelector('p[class="Navbar_error__iDs2z"]');

  // Lakukan asersi (assertion) untuk memeriksa pesan kesalahan
  const usernameErrorMessageText = await usernameErrorMessage.textContent();
  const passwordErrorMessageText = await passwordErrorMessage.textContent();

});
