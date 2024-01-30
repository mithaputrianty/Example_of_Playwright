import {test, expect} from '@playwright/test';
import loginCuraPage from '../pages/loginCura';

test('User berhasil login ke OpenMRS dengan data yang valid', async ({page}) => {
    const Login = new loginCuraPage(page);
    
    //await page.pause(); --> code ini untuk debug tiap step
    await Login.accessLoginCura();
    await Login.enterValidUsernamePasswordCura('John Doe', 'ThisIsNotAPassword');
    await Login.clickLoginCuraBtn();
    await expect(page.getByRole('heading', { name: 'Make Appointment' })).toBeVisible();
    await page.close();
});