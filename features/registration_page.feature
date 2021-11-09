Feature: Registration Page
  # Source: https://www.departmentofproduct.com/blog/writing-bdd-test-scenarios/

    Scenario: User successfully creates a LinkedIn Account
        Given John is on LinkedIn Registration page
        When he enters a valid email
        And he puts a random password
        And he hits ‘join now’
        Then his LinkedIn account is created
        And he is directed to the profile creation page
        And his confirmation email is sent


    Scenario: User enters a invalid email
        Given John is on LinkedIn Registration page
        When he enters an invalid email
        And he puts a random password
        And he hits ‘join now’
        Then his LinkedIn account is not created
        And he remains on the Registration page
        And the email input is highlighted in red



