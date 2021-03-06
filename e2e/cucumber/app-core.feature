Feature: App core module
  As a Developer, I want to try out Protractor with Cucumber.

  Scenario: Navigate to the page
    Given I am on the home page
    Then I should see the correct page title
    And I should see the welcome text: 'Angular'

#  Scenario: Getting the next names
#    Given I am on the nameday page
#    And I should see the names
#    When I click on the next button
#    Then I should see the new names

  Scenario: Accounts details
    Given I am on the accounts screen
    Then I should see my accounts in the accounts block

  Scenario: Accounts details
    Given I am on the accounts screen
    When I clicked on an account
    Then I should see details of my account
