const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const {chromium} = require('playwright');

let browser;
let page;
setDefaultTimeout(10 * 1000); 

Given('User login', async () => {
    browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
    await page.locator('input[id="txt-username"]').fill('John Doe');
    await page.locator('input[id="txt-password"]').fill('ThisIsNotAPassword');
    await page.locator('button[id="btn-login"]').click();
    const textToVerify = 'Make Appointment';
    await page.waitForSelector(`:text("${textToVerify}")`, { state: 'visible' });
});

When ('User choose Facility', async () => {
    await page.selectOption('#combo_facility', 'Seoul CURA Healthcare Center');
    //await page.pause();
});

When ('User choose Healthcare Program', async () => {
    await page.check("input[value='Medicaid']");
});

When ('User choose Visit Date', async () => {
    await page.getByPlaceholder('dd/mm/yyyy').fill('28/01/2024');
});

When ('User input Comment', async () => {
    await page.getByPlaceholder('Comment').fill('This is a comment');
});

When ('User click Book Appointment button', async () => {
    await page.click("[id='btn-book-appointment']");
    await page.pause();
});

Then ('Appointment has been created', async () => {
    await expect(page.getByRole('heading', {name: 'Appointment Confirmation'})).toBeVisible();
});