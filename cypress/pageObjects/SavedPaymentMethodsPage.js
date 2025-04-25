import { BasePage } from "./basePage";

export class SavedPaymentMethodsPage extends BasePage {

    static get addNewCardMenu() {
        return cy.get("mat-expansion-panel");
    }

    static get nameField() {
        return cy.get("mat-label").contains("Name");
    }

    static get cardNumberField() {
        return cy.get("mat-label").contains("Card Number");
    }

    static get expiryMonthField() {
        return cy.get("select#mat-input-4");
    }

    static get expiryYearField() {
        return cy.get("select#mat-input-5");
    }

    static get submitButton() {
        return cy.get("button#submitButton");
    }

    static get savedPaymentMethodRow() {
        return cy.get("mat-row");
    }
}