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

    // 3 tests plz
    // 1 test
    // formAuthenticationPage.submitForm("useruser", "SuperSecretPassword!");
    // username is wronk!!

    // 1 test
    // formAuthenticationPage.submitForm("tomsmith", "tomsmith");
    // pwd is wronk!!

    // 1 test
    // log in like boss
    // log out, drop the mike, close computer, walk away

    // master skillz next level, level 100+, giga
    // separate function for notification validation

//         formAuthenticationPage.submitForm("useruser", "SuperSecretPassword!");
// @Test
//     public void should_not_login_with_invalid_login() {
//         FormAuthenticationPage formAuthenticationPage = homePage.goToAuthenticationPage();
//         assertThat(formAuthenticationPage.isAt(), is(true));
//
//
//         assertThat(formAuthenticationPage.isUsernameInvalidMessageDisplayed(), is(true));
//     }
//
// @Test
//     public void should_not_login_with_invalid_password() {
//         FormAuthenticationPage formAuthenticationPage = homePage.goToAuthenticationPage();
//         assertThat(formAuthenticationPage.isAt(), is(true));
//
//         formAuthenticationPage.submitForm("tomsmith", "tomsmith");
//
//         assertThat(formAuthenticationPage.isPasswordInvalidMessageDisplayed(), is(true));
//     }
//
// @Test
//     public void should_login_then_logout() {
//         FormAuthenticationPage formAuthenticationPage = homePage.goToAuthenticationPage();
//         assertThat(formAuthenticationPage.isAt(), is(true));
//
//         formAuthenticationPage.submitForm("tomsmith", "SuperSecretPassword!");
//         formAuthenticationPage.clickLogout();
//         assertThat(formAuthenticationPage.isSuccessfullyLoggedOutMessageDisplayed(), is(true));
//     }
});
