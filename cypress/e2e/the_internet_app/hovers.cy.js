describe("Hovers page", () =>  {
    before(() =>  {
        cy.visit("/hovers");
    });

    it('should display view profile link', () =>  {
        cy.get(":nth-child(3) > .figcaption").invoke("show");

        cy.get(":nth-child(3) > .figcaption > a").should("have.text", "View profile");
    });

});
