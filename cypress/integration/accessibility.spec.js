/// <reference types="Cypress" />

import { terminalLog } from "../support/index"

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe();
  });

  it("checks nav-button for accessibility", () => {
    cy.viewport("iphone-3");
    cy.findByTestId("nav-button").click()
    cy.findByTestId("nav-button-content").injectAxe().checkA11y(null, null, terminalLog);
  });

  it("navigates to each page and tests accessibility", () => {
    cy.checkA11y(null, null, terminalLog);
    cy.viewport("iphone-3").checkA11y(null, null, terminalLog);

    cy.get("[data-controller='nav-bar']")
      .find("a")
      .each((child) => {
        cy.visit(child.attr("href"));
        cy.get("main").injectAxe();
        cy.checkA11y(null, null, terminalLog);
        cy.viewport("iphone-3").checkA11y(null, null, terminalLog);
      });
  });
});
