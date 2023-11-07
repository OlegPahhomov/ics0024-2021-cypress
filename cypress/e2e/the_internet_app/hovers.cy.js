describe("Hovers page", function () {
    before(function () {
        cy.visit("/hovers");
    });

    it('should display view profile link', function () {
        cy.get(":nth-child(3) > .figcaption").invoke("show");

        cy.get(":nth-child(3) > .figcaption > a").should("have.text", "View profile");
    });

});