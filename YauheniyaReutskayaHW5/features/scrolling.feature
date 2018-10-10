@scrolling
Feature: Scrolling

  Background:
    Given I Disable protractor synchronization
    When I am on the "Home Page"

  @smoke
  @ticket_01
  Scenario: Verify that Back to Top button is displayed when I scroll down on the Home Page
    When I scroll to the "HomePage > BackToTop" element
    Then Back to Top button "^" should be displayed