describe("Dropdown List Page", () => {
    before(() => {
        cy.visit("/dropdown");
    });

    it('should select option 1', () =>  {
        cy.get("#dropdown").select("Option 1");

        cy.get("#dropdown").find(":selected").should("have.text", "Option 1");
    });
});
