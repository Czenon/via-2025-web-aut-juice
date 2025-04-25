import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("button#navbarAccount");
  }
 
  static get loginButton() {
    return cy.get("button#navbarLoginButton");
  }
  
  static get userProfileButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchIcon() {
    return cy.get("#searchQuery");
  }

  static get searchField() {
    return cy.get("#searchQuery input");
  }

  static get productBox() {
    // return cy.get("[aria-label='Click for more information about the product']");
    return cy.get("div.mdc-card");
  }

  static get productInfo() {
    return cy.get("app-product-details mat-dialog-content");
  }

  static get closeProductInfo() {
    return cy.get("button[aria-label='Close Dialog']");
  }

  static get reviewInfo() {
    return cy.get("[aria-label='Expand for Reviews']");
  }

  static get reviewText() {
    return cy.get(".review-text");
  }

  static get reviewField() {
    return cy.get("[aria-label='Text field to review a product']");
  }

  static get submitReviewButton() {
    return cy.get("#submitButton");
  }

  static get itemsPerPageBox() {
    return cy.get(".mat-mdc-paginator-touch-target");
  }

  static get itemsPerPageBoxSelection() {
    return cy.get("mat-option span.mdc-list-item__primary-text");
  }

  static get itemsPerPageBoxCurrentSelection() {
    return cy.get("div mat-option[aria-selected='true']");
  }

  static get addToBasketButton() {
    return cy.get("[aria-label='Add to Basket'");
  }

  static get shoppingCartButton() {
    return cy.get("[aria-label='Show the shopping cart']");
  }

  
}
