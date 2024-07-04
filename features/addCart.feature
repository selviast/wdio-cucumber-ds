Feature: Saucedemo add cart through dashboard

    Background:
        Given user is on the login page
        When user login with standard_user and secret_sauce
        Then user should redirect to the Product Page

    Scenario Outline: As a user, I can add cart to dashbboard
        Then user click Add Button
        Then user see the cart badge with number 1 and Add button change into Remove Button

        