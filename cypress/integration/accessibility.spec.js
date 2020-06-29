/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe();
  });

  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });

  it("navigates to each page and tests accessibility", () => {
    cy.get("[data-controller='nav-bar']")
      .find("a")
      .each((child) => {
        cy.visit(child.attr("href"));
        cy.get("main").injectAxe();
        cy.checkA11y();
      });
  });
});
