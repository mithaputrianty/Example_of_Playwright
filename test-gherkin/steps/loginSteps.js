const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const {chromium} = require('playwright');
//var {setDefaultTimeout} = require('@cucumber/cucumber')

let browser;
let page;

setDefaultTimeout(15 * 1000); 

Given('User access Cura Healthcare website', async () => {
    browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
});

When ('User enter valid username {string} and password {string}', async (username, password) => {
    await page.locator('input[id="txt-username"]').fill(username);
    await page.locator('input[id="txt-password"]').fill(password);
    //fill('input[id="txt-username"]', username);
    //await page.fill('input[id="txt-password"]', password);
});

When ('User click Login button on Cura Login page', async () => {
    await page.locator('button[id="btn-login"]').click();
});

Then ('User redirect to Appointment page', async () => {
    const textToVerify = 'Make Appointment';
    await page.waitForSelector(`:text("${textToVerify}")`, { state: 'visible' });
});