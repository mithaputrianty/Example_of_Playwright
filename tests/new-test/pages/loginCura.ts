//import { Page } from "@playwright/test";
import { chromium, Browser, Page } from '@playwright/test';

export default class loginCuraPage{
    constructor(public page: Page){ }
        async accessLoginCura(){
            await this.page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        }

        async enterValidUsernamePasswordCura(username: string, password: string){
            await this.page
                .getByLabel('Username')
                .fill(username)
                await this.page
                .getByLabel('Password')
                .fill(password)
        }

        async clickLoginCuraBtn(){
            await this.page.click("[id='btn-login']")
        }

        async userLoginCura(){
            this.accessLoginCura();
            this.enterValidUsernamePasswordCura('John Doe', 'ThisIsNotAPassword');
            this.clickLoginCuraBtn();
        }
}