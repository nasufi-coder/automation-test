# Cypress Login Test Suite

This is a simple test suite using Cypress to validate login functionality on a demo site.

## Why Cypress?

I'm using Cypress because it's simple to set up, handles UI testing well, and makes debugging easy with real-time previews.

## Test URL

https://the-internet.herokuapp.com/login

Credentials:
- Check cypress.env.json

## Test Cases

- Successful login with valid credentials
- Failed login with invalid username
- Failed login with invalid password
- Error/success message validation

## Structure

- `login.cy.js` – Test cases
- `loginPage.js` – Page Object
- `elementHelper.js` – Reusable UI actions
- `cypress.env.json` – environment variables for credentials

## Setup & Run

```bash
npm install          # install dependencies
npx cypress open     # run in interactive mode
npx cypress run      # run headlessly



