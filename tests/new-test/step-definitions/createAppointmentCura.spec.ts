import {test, expect} from '@playwright/test';
import loginCuraPage from '../pages/loginCura';

test('User membuat janji baru', async ({page}) => {
    const Login = new loginCuraPage(page);
    //await Login.userLoginCura();
    await Login.accessLoginCura();
    await Login.enterValidUsernamePasswordCura('John Doe', 'ThisIsNotAPassword');
    await Login.clickLoginCuraBtn();
    await expect(page.getByRole('heading', { name: 'Make Appointment' })).toBeVisible();
    await page.pause();
    await page.selectOption('#combo_facility', 'Seoul CURA Healthcare Center')
    await page.check("input[value='Medicaid']");
    await page.fill('#txt_visit_date', '28/01/2024'); //script masih salah
    await page.click("[id='txt_comment']")
    await page.getByPlaceholder('Comment').fill('This is a comment');
    await page.click("[id='btn-book-appointment']");
    await expect(page.getByRole('heading', {name: 'Appointment Confirmation'})).toBeVisible();
    // /await page.waitForTimeout(3000);
});