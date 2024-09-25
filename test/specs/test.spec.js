import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('Saucedemo Login Scenario', () => {
    it('User should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.fillForm("standard_user", "secret_sauce")
        await LoginPage.submit()
        
        await expect(browser).toHaveUrl(expect.stringContaining('inventory.html'))
        await expect(LoginPage.productHeader).toBeDisplayed()
        await expect(LoginPage.productHeader).toHaveText('Products')
        await browser.pause(2000)
    })

    it('User get error message when login using invalid credentials', async () => {
        await LoginPage.open()
        await LoginPage.fillForm("standard_user", "secret_sa")
        await LoginPage.submit()

        await expect(LoginPage.errorButton).toBeDisplayed()
        await expect(LoginPage.alertBlockUser).toHaveText('Epic sadface: Username and password do not match any user in this service')
        await browser.pause(2000)
    })
})

