describe("Form authentication page", () => {
    beforeEach(() => {
        cy.visit("/login");
    });

    it('should login to secure area with valid credentials',  () => {
        cy.get('input[name=username]').type("tomsmith")

        // {enter} causes the form to submit
        cy.get('input[name=password]').type(`SuperSecretPassword!{enter}`)

        cy.get(".flash.success").should("be.visible");
    });
});
