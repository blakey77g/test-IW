export class loginPage {
  goToHomepage() {
    cy.visit("/");
    cy.get("#onetrust-accept-btn-handler").click();
  }

  enterLoginCredentails() {
    cy.get(`[id*="login-emailInput"]`).type(Cypress.env("user_email"));
    cy.get(`[id*="login-password"]`).type(Cypress.env("user_password"));
  }

  enterInvalidLoginCredentails() {
    cy.get(`[id*="login-emailInput"]`).type(Cypress.env("user_email"));
    cy.get(`[id*="login-password"]`).type(Cypress.env("user_passwordinvalid"));
  }

  clickLoginButton() {
    cy.get('[data-testid="login-submitBtn"]').click();
  }

  verifyMessageDisplayed() {
    cy.get('[data-testid="login-errorMessage"]').should(
      "contain",
      "We didn't recognize the username or password you entered. Please try again or click here to reset your password"
    );
  }
}
export const onLoginPage = new loginPage();
