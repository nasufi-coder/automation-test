/**
 * ElementHelper class provides reusable wrapper methods around Cypress commands
 * to promote cleaner and more maintainable test code.
 */
class ElementHelper {
  /**
   * Get an element by selector or XPath.
   * @param {string} selector
   * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
   */
  get(selector) {
    return cy.get(selector)
  }

  /**
   * Clear and type text into an input field.
   * @param {string} selector - Input field selector.
   * @param {string} text - Text to type.
   */
  type(selector, text) {
    return cy.get(selector).clear().type(text)
  }

  /**
   * Click an element.
   * @param {string} selector - Selector of the element to click.
   */
  click(selector) {
    return cy.get(selector).click()
  }

  /**
   * Assert that an element contains specific text.
   * @param {string} selector - Selector of the element.
   * @param {string} text - Expected text content.
   */
  shouldContain(selector, text) {
    return cy.get(selector).should('contain', text)
  }

  /**
   * Assert that an element is visible.
   * @param {string} selector - Selector of the element.
   */
  isVisible(selector) {
    return cy.get(selector).should('be.visible')
  }
}

export default new ElementHelper()
