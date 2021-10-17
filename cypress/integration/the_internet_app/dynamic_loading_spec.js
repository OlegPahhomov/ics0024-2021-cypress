describe("Dynamic loading page", () =>  {
    before(() =>  {
        cy.visit("/dynamic_loading")
    });

    it('should display Hello World', () =>  {
        cy.get("[href=\"/dynamic_loading/1\"]").click();
        cy.get("#start > button").click();
        cy.wait(5000)
        cy.get("#finish > h4")
            .should("be.visible")
            .should("have.text", "Hello World!");
    });
});
