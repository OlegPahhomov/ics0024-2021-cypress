describe("Home page", () => {
    before(() => {
        cy.visit("");
    });

    it('should open home page', function () {
        cy.get("h1").should("have.text", "Welcome to the-internet")
    });
});
