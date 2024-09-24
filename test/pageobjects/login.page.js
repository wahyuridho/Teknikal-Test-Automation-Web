import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    get username () { return $('#user-name') }
    get password () { return $('#password') }
    get submitButton () { return $('input[type=submit]') }
    get errorButton () {return $('button[class="error-button"]')}
    get alertBlockUser () {return $('h3[data-test="error"]')}

    open = () => {
        return super.open('/')
    }

    fillForm = async (username, password) => {
        await this.username.addValue(username)
        await this.password.addValue(password)
    }

    submit = async () => {
        return await this.submitButton.click()
    }
}

export default new LoginPage();
