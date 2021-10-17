describe("Form authentication page", () => {
    beforeEach(() => {
        cy.visit("/login");
    });

    it('should login to secure area with valid credentials',  () => {
        cy.login("tomsmith", "SuperSecretPassword!")
        cy.notificationText(".flash.success", "You logged into a secure area!")
    });

    it('should not login to secure area with invalid username',  () => {
        cy.login("useruser", "SuperSecretPassword!")
        cy.notificationText(".flash.error", "Your username is invalid!")
    });

    it('should not login to secure area with invalid password',  () => {
        cy.login("tomsmith", "tomsmith")
        cy.notificationText(".flash.error", "Your password is invalid!")
    });

    it('should login to secure area with valid credentials and log out',  () => {
        cy.login("tomsmith", "SuperSecretPassword!")
        cy.notificationText(".flash.success", "You logged into a secure area!")
        cy.get(".flash.success").should("be.visible").should(($div) => {
            $div.text().includes("You logged into a secure area!")
        });
        cy.get(".button").click()
        cy.notificationText(".flash.success", "You logged out of the secure area!")
    });
});
