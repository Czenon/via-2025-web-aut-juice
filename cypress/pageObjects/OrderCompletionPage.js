import { BasePage } from "./basePage";

export class OrderCompletionPage extends BasePage {

    static get successMessage() {
        return cy.get(".confirmation");
    }
}