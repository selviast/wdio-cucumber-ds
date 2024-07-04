import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.js';
import DashboardPage from '../pageobjects/dashboard.js';


Given('user is on the login page', async () => {
    await LoginPage.open();
});


When(/^user login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then('user should redirect to the Product Page', async () => {
    await DashboardPage.validateOnPage()
});

Then('user will show error {string}', async (message) => {
    await LoginPage.messageLogin.waitForDisplayed()
    await expect(LoginPage.messageLogin).toHaveText(expect.stringContaining(message))

});

Then ('user click Add Button', async() => {
    await DashboardPage.addToCart()
});

Then ('user see the cart badge with number 1 and Add button change into Remove Button', async() => {
    await DashboardPage.validateAddToCart()
});

