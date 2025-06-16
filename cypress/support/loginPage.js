class LoginPage {
  usernameField = '#username'
  passwordField = '#password'
  loginButton = 'button[type="submit"]'
  errorMessage = '#flash'
  successMessage = '#flash'

  login(username, password) {
    cy.get(this.usernameField).type(username)
    cy.get(this.passwordField).type(password)
    cy.get(this.loginButton).click()
  }

  getErrorMessage() {
    return cy.get(this.errorMessage)
  }

  getSuccessMessage() {
    return cy.get(this.successMessage)
  }
}

export default LoginPage
