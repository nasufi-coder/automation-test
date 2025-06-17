import LoginPage from '../support/loginPage'

const loginPage = new LoginPage()

// Environment credentials
const validUsername = Cypress.env('username')
const validPassword = Cypress.env('password')

// Test data for negative scenarios
const invalidUsername = 'InvalidUsername'
const wrongPassword = 'WrongPassword'

/**
 * Login Test Suite
 * Verifies the login functionality with valid and invalid credentials.
 */
describe('Login Tests', () => {
  /**
   * Visit the login page before each test
   */
  beforeEach(() => {
    cy.visit('/login')
  })

  it('should login successfully with valid credentials', () => {
    loginPage.login(validUsername, validPassword)
    loginPage.getSuccessMessage().should('contain', 'You logged into a secure area!')
  })

  it('should show error for invalid username', () => {
    loginPage.login(invalidUsername, validPassword)
    loginPage.getErrorMessage().should('contain', 'Your username is invalid!')
  })

  it('should show error for invalid password', () => {
    loginPage.login(validUsername, wrongPassword)
    loginPage.getErrorMessage().should('contain', 'Your password is invalid!')
  })
})
