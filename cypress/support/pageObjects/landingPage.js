export class landingPage {
  verifyloggedInURL() {
    cy.url().should("eq", "https://platform.withintelligence.com/all/now");
  }

  selectStartFollowButton() {
    cy.get('[class="Buttonstyled__ButtonWrapper-sc-1p61isx-0 eOssHf"]').click();
  }

  closeFollowWindow() {
    cy.get('[data-testid="popup-empty-value-crossBtn"]').click();
  }

  clickExplore() {
    cy.get('[data-testid="nav-link-header-discover-link"]').click();
  }

  verifyDiscoverURL() {
    cy.url().should("eq", "https://platform.withintelligence.com/all/discover");
  }

  enterValidSearch(textEntered) {
    cy.get('[data-testid="globalSearch-input"]').type(textEntered);
  }

  enterInvaldSearch(textEntered) {
    cy.get('[data-testid="globalSearch-input"]').type(textEntered);
    cy.get('[class="NotFoundstyled__Text-sc-1qxw8dj-0 kngPDg"]')
      .should("contain", "Your search for")
      .should("contain", "did not match any documents.");
    cy.get('[class="NotFoundstyled__Text-sc-1qxw8dj-0 kngPDg"]').should(
      "contain",
      textEntered
    );
  }

  listResults() {
    cy.get('[class="sc-iLIByi kBtGYR"]').should(
      "contain",
      "Displaying results for"
    );
    cy.get('[class="sc-iLIByi kBtGYR"]').should("contain", "investers");
    cy.get('[data-testid="tabsHandlers-tabPanel-nowResults"]').should(
      "be.visible"
    );
  }

  selectFromDropDownMenu() {
    cy.get('[id="downshift-0-menu"]').click();
    cy.get('[id="downshift-0-item-3"]').click();
  }

  verifyPcfiURL() {
    cy.url().should("eq", "https://platform.withintelligence.com/pcfi/now");
  }
}

export const onLandingPage = new landingPage();
