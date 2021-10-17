describe("Form authentication page", () => {
    beforeEach(() => {
        cy.visit("/login");
    });

    it('should login to secure area with valid credentials',  () => {
        cy.login("tomsmith", "SuperSecretPassword!")
        cy.get(".flash.success").should("be.visible").should(($div) => {
            $div.text().includes("You logged into a secure area!")
        });
    });
});
