import { $ } from '@wdio/globals'
import Page from './page.js';

class DashboardPage extends Page{
    open(path){
        return super.open("inventory.html")
    }
    //icon cart on dashboard
    get cartIcon(){
        return $("#shopping_cart_container")
    }
    //icon add cart on dashboard
    get addCartButton(){
        return $('//button[@id="add-to-cart-sauce-labs-backpack"]')
    }

    //icon badge after user click add cart on dashboard
    get cartBadgeAfterAddCart(){
        return $('(//span[@class="shopping_cart_badge"])[1]')
    }

    //button remove after user click add cart on dashboard
    get removeCartButton(){
        return $('//button[@id="remove-sauce-labs-backpack"]')
    }

    //action click add cart on dashboard
    async addToCart(){
        await this.addCartButton.click()
    }

    //validate success to add cart on dashboard
    async validateAddToCart(){
        await expect(browser).toHaveUrl(`${process.env.BASE_URL}/inventory.html`)  
        await expect(this.removeCartButton).toBeDisplayed()
        await expect(this.cartBadgeAfterAddCart).toBeDisplayed()

        await browser.pause(3000)
    }

    //validate success on dashboard page
    async validateOnPage(){
        //cart icon tertampil - default: timeout 10000
        await this.cartIcon.waitForDisplayed()
        await expect(browser).toHaveUrl(`${process.env.BASE_URL}/inventory.html`)        
        await browser.pause(3000)
    }
}

export default new DashboardPage();