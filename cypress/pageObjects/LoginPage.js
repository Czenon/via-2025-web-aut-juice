import { BasePage } from "../pageObjects/basePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get elementName() {
    return cy.get("elementSelector");
  }

  static get emailField() {
    return cy.get("input#email");
  }

  static get passwordField() {
    return cy.get("input#password");
  }

  static get loginButton() {
    return cy.get("button#loginButton");
  }

  static get notYetACustomerLink() {
    return cy.get("a[href='#/register']");
  }
}
