describe("Form authentication page", () => {
    beforeEach(() => {
        cy.visit("/login");
    });

    it('should login to secure area with valid credentials', function () {
        cy.login("tomsmith", "SuperSecretPassword!");

        cy.get(".flash.success").should("be.visible");
    });

    it('should not login to secure area with invalid credentials', function () {
        cy.login("pepsi", "asdsad");

        cy.get(".flash.error").should("be.visible");
    });
});