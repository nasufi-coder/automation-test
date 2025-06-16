class ElementHelper {
  get(selector) {
    return cy.get(selector)
  }

  type(selector, text) {
    return cy.get(selector).clear().type(text)
  }

  click(selector) {
    return cy.get(selector).click()
  }

  shouldContain(selector, text) {
    return cy.get(selector).should('contain', text)
  }

  isVisible(selector) {
    return cy.get(selector).should('be.visible')
  }
}

export default new ElementHelper()