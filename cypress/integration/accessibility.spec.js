/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe();
  });

  it("checks nav-button for accessibility", () => {
    cy.viewport("iphone-3");
    cy.get("[data-controller='nav-button']").click();
    cy.get("[data-target='nav-button.content']").injectAxe().checkA11y();
  });

  it("navigates to each page and tests accessibility", () => {
    cy.checkA11y();
    cy.viewport("iphone-3").checkA11y();

    cy.get("[data-controller='nav-bar']")
      .find("a")
      .each((child) => {
        cy.visit(child.attr("href"));
        cy.get("main").injectAxe();
        cy.checkA11y();
        cy.viewport("iphone-3").checkA11y();
      });
  });
});
