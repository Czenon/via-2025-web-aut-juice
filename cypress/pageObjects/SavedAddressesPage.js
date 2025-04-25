import { BasePage } from "./basePage";

export class SavedAddressesPage extends BasePage {

    static get addNewAddressButton() {
        return cy.get("button[aria-label='Add a new address'");
    }

    static get addressRow() {
        return cy.get("mat-table mat-row");
    }
}