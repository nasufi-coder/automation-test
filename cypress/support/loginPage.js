import helper from './elementHelper'

/**
 * Page Object representing the Login Page.
 * Provides methods to interact with the login form and verify responses.
 */
class LoginPage {
  // Locators
  #usernameField = '#username'
  #passwordField = '#password'
  #loginButton = 'button[type="submit"]'
  #flashMessage = '#flash' // covers both success and error messages

  /**
   * Logs in using the provided credentials.
   * @param {string} username - The username to enter.
   * @param {string} password - The password to enter.
   */
  login(username, password) {
    helper.type(this.#usernameField, username)
    helper.type(this.#passwordField, password)
    helper.click(this.#loginButton)
  }

  /**
   * Gets the flash message element (used for both success and error).
   * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
   */
  getSuccessMessage() {
    return helper.get(this.#flashMessage)
  }

  getErrorMessage() {
    return helper.get(this.#flashMessage)
  }
}

export default LoginPage
