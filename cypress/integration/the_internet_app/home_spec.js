describe("Home page", () => {
    before(() => {
        cy.visit("");
    });

    it('should open home page', () =>  {
        cy.get("h1").should("have.text", "Welcome to the-internet")
    });
});
