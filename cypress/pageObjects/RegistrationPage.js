import { BasePage } from "./basePage";

export class RegistrationPage extends BasePage {
    // static get url() {
    //     return "/#/register";
    // }

    static get emailField() {
        return cy.get("input#emailControl");
    }

    static get passwordField() {
        return cy.get("input#passwordControl");
    }

    static get repeatPasswordField() {
        return cy.get("input#repeatPasswordControl");
    }

    static get securityQuestionField() {
        return cy.get("mat-select[name='securityQuestion']");
    }

    static get securityQuestionOptions() {
        return cy.get("mat-option[role='option']");
    }

    static get answerField() {
        return cy.get("input#securityAnswerControl");
    }

    static get registrationButton() {
        return cy.get("button#registerButton");
    }


}