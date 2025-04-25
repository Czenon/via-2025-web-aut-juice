import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { RegistrationPage } from "../pageObjects/RegistrationPage";
const randomNumber = Math.floor(Math.random() * 900000) + 100000;
// const randomPass = Math.floor(Math.random() * 900000) + 100000;

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      HomePage.accountButton.click();
      HomePage.loginButton.click();

      LoginPage.emailField.type("demo");
      LoginPage.passwordField.type("demo");
      LoginPage.loginButton.click();

      HomePage.accountButton.click();
      HomePage.userProfileButton.should("contain.text", "demo");
      // Click Account button
      // Click Login button
      // Set email value to "demo"
      // Set password value to "demo"
      // Click Log in
      // Click Account button
      // Validate that "demo" account name appears in the menu section
    });

    it("Registration", () => {
      HomePage.accountButton.click();
      HomePage.loginButton.click();
      
      LoginPage.notYetACustomerLink.click();
      RegistrationPage.emailField.type(`email_${randomNumber}@inbox.com`);
      RegistrationPage.passwordField.click().type(`password_${randomNumber}`)
      RegistrationPage.repeatPasswordField.click().type(`password_${randomNumber}`);
      RegistrationPage.securityQuestionField.click();
      RegistrationPage.securityQuestionOptions.contains("Last name of dentist when you were a teenager? (Do not include 'Dr.')").click();
      RegistrationPage.answerField.click().type("gordonas frymenas");
      RegistrationPage.registrationButton.click();

      LoginPage.emailField.click().type(`email_${randomNumber}@inbox.com`);
      LoginPage.passwordField.click().type(`password_${randomNumber}`);
      LoginPage.loginButton.click();
      // Click Account button
      // Login button
      // Click "Not yet a customer?"
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      // Fill in password field and repeat password field with same password
      // Click on Security Question menu
      // Select  "Name of your favorite pet?"
      // Fill in answer
      // Click Register button
      // Set email value to previously created email
      // Set password value to previously used password value
      // Click login button
      // Click Account button
      // Validate that account name (with previously created email address) appears in the menu section
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      HomePage.searchIcon.click();
      HomePage.searchField.click().type("Lemon{enter}");
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");
      // Click on search icon
      // Search for Lemon
      // Select a product card - Lemon Juice (500ml)
      // Validate that the card (should) contains "Sour but full of vitamins."
    });

    it("Search 500ml and validate Lemon, while having multiple cards", () => {
      // Create scenario - Search 500ml and validate Lemon, while having multiple cards
      // Click on search icon
      // Search for 500ml
      // Select a product card - Lemon Juice (500ml)
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.searchIcon.click();
      HomePage.searchField.click().type("500ml{enter}");
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");      
    })

    it("Search 500ml and validate cards", () => {
    // Create scenario - Search 500ml and validate cards
    // Click on search icon
    // Search for 500ml
    // Select a product card - Eggfruit Juice (500ml)
    // Validate that the card (should) contains "Now with even more exotic flavour."
    // Close the card
    // Select a product card - Lemon Juice (500ml)
    // Validate that the card (should) contains "Sour but full of vitamins."
    // Close the card
    // Select a product card - Strawberry Juice (500ml)
    // Validate that the card (should) contains "Sweet & tasty!"

      HomePage.searchIcon.click();
      HomePage.searchField.click().type("500ml{enter}");
      HomePage.productBox.contains("Eggfruit Juice (500ml)").click();
      HomePage.productInfo.should("contain.text", "Now with even more exotic flavour.");
      HomePage.closeProductInfo.click();

      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");    
      HomePage.closeProductInfo.click();

      HomePage.productBox.contains("Strawberry Juice (500ml)").click();
      HomePage.productInfo.should("contain.text", "Sweet & tasty!");    
      HomePage.closeProductInfo.click();
    })

    it.only("Read a review", () => {
      // Create scenario - Read a review
    // Click on search icon
    // Search for King
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    // Click expand reviews button/icon (wait for reviews to appear)
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!

      HomePage.searchIcon.click();
      HomePage.searchField.click().type("King");
      HomePage.productBox.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
      HomePage.reviewInfo.click();
      HomePage.reviewText.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
    })

    // Create scenario - Add a review
    // Click on search icon
    // Search for Raspberry
    // Select a product card - Raspberry Juice (1000ml)
    // Type in review - "Tastes like metal"
    // Click Submit
    // Click expand reviews button/icon (wait for reviews to appear)
    // Validate review -  "Tastes like metal"

    // Create scenario - Validate product card amount
    // Validate that the default amount of cards is 12
    // Change items per page (at the bottom of page) to 24
    // Validate that the amount of cards is 24
    // Change items per page (at the bottom of page) to 36
    // Validate that the amount of cards is 35

    // Create scenario - Buy Girlie T-shirt
    // Click on search icon
    // Search for Girlie
    // Add to basket "Girlie"
    // Click on "Your Basket" button
    // Create page object - BasketPage
    // Click on "Checkout" button
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    // Click Continue button
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    // Click Continue button
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    // Click Continue button
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"

    // Create scenario - Add address
    // Click on Account
    // Click on Orders & Payment
    // Click on My saved addresses
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    // Click Submit button
    // Validate that previously added address is visible

    // Create scenario - Add payment option
    // Click on Account
    // Click on Orders & Payment
    // Click on My payment options
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    // Fill in Name
    // Fill in Card Number
    // Set expiry month to 7
    // Set expiry year to 2090
    // Click Submit button
    // Validate that the card shows up in the list
  });
});
