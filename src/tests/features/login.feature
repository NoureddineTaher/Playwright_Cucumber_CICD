Feature: Login
  Login page will work depending on the user credentials.

  Scenario: Successful Login
    Given a web browser is at the SauceLabs login page
    When the user enters the username "standard_user"
      And the user enters the password "secret_sauce"
      And clicks on the login button
    Then the URL should contain the inventory subdirectory