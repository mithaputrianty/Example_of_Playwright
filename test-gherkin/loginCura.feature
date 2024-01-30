Feature: Cura Healthcare Login

Scenario: Login using valid credential
    Given User access Cura Healthcare website
    When User enter valid username "John Doe" and password "ThisIsNotAPassword"
    And User click Login button on Cura Login page
    Then User redirect to Appointment page