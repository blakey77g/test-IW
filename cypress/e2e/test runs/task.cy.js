const { onLoginPage } = require("../../support/pageObjects/loginPage");
const { onLandingPage } = require("../../support/pageObjects/landingPage");


describe("Login Tests", () => {
  beforeEach(() => {
    onLoginPage.goToHomepage();
  });

  it("Log into application", () => {
    login();
  });

  it("Attempt login with Invalid credentails", () => {
    onLoginPage.enterInvalidLoginCredentails();
    onLoginPage.clickLoginButton();
    onLoginPage.verifyMessageDisplayed();
  });

  it("Open then close Modal", () => {
    login();
    onLandingPage.selectStartFollowButton();
    //Close Modal after opening
    onLandingPage.closeFollowWindow();
  });

  it("Navigation and Links", () => {
    login();
    onLandingPage.clickExplore();
    onLandingPage.verifyDiscoverURL();
  });

  it("Search with results expected", () => {
    login();
    onLandingPage.enterValidSearch("investers");
    onLandingPage.listResults();
  });

  it("Search with no results expected", () => {
    login();
    onLandingPage.enterInvaldSearch("fvfsdvvfsdvsdfvsdfvsdv");
  });

  it("Section Navigation", () => {
    login();
    onLandingPage.selectFromDropDownMenu();
    onLandingPage.verifyPcfiURL();
  });

  function login() {
    onLoginPage.enterLoginCredentails();
    onLoginPage.clickLoginButton();
    onLandingPage.verifyloggedInURL();
  }
});
