import LoginPage from '../support/loginPage'

const loginPage = new LoginPage()

describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('should login successfully with valid credentials', () => {
    loginPage.login('tomsmith', 'SuperSecretPassword!')
    loginPage.getSuccessMessage().should('contain', 'You logged into a secure area!')
  })

  it('should fail login with invalid username', () => {
    loginPage.login('invalidUser', 'SuperSecretPassword!')
    loginPage.getErrorMessage().should('contain', 'Your username is invalid!')
  })

  it('should fail login with invalid password', () => {
    loginPage.login('tomsmith', 'wrongPassword!')
    loginPage.getErrorMessage().should('contain', 'Your password is invalid!')
  })
})
