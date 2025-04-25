import { BasePage } from "./basePage";

export class DeliveryMethodPage extends BasePage {

    static get deliveryMethod() {
        return cy.get("mat-cell");
    }

    static get continueButton(){
        return cy.get("[aria-label='Proceed to delivery method selection']");
    }
}