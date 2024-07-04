import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page{
    open(path){
        return super.open("")
    }

    get textBoxUsername(){
        return $("#user-name");
    }

    get textBoxPassword(){
        return $("#password");
    }

    get buttonLogin(){
        return $("#login-button")
    }

    get messageLogin(){
        // return $("//h3[contains(text(),'Epic sadface: Username and password do not match a')]")
        return $("h3[data-test='error']")
    }
    async login(username, password){
        await this.textBoxUsername.setValue(username)
        await this.textBoxPassword.setValue(password)
        await this.buttonLogin.click()
    }  


    
}

export default new LoginPage();