import { BasePage } from "./basePage";

export class PaymentOptionsPage extends BasePage {

    static get paymentCardRadioButton() {
        return cy.get("mat-row").contains("5678").get("mat-radio-button");
    }

    static get continueButton() {
        return cy.get("[aria-label='Proceed to review'");
    }
}