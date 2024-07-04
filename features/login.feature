@saucedemo @login
Feature: Saucedemo login

  Background:
    Given user is on the login page

  @tc-1 @positive
  Scenario Outline: As a user, I can log into the saucedemo 

    When user login with <username> and <password>
    Then user should redirect to the Product Page

    Examples:
      | username      | password             |
      | standard_user | secret_sauce         |
      | visual_user   | secret_sauce        |

  @tc-2 @negative  
  Scenario Outline: As a user, I can not log into the saucedemo using wrong password

    When user login with <username> and <password>
    Then user will show error "Epic sadface: Username and password do not match any user in this service"

    Examples:
      | username      | password         |    
      | standard_user | secret_sauce123  |

  # Scenario Outline: As a user, I can not log into the saucedemo using wrong password

  #     Given user is on the login page
  #     When user login with <username> and <password>
  #     Then user will show error "XXX Epic sadface: Username and password do not match any user in this service"

  #     Examples:
  #       | username      | password         |    
  #       | standard_user | secret_sauce123  |