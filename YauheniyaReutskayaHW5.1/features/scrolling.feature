@scrolling
Feature: Home Page

  Background:
    Given I Disable protractor synchronization
    When I should be on "Home" page

  @smoke
  @ticket_01 @backToTopButton
  Scenario: Verify that Back to Top button is displayed when I scroll down on the Home Page
    When I scroll to the "HomePage > Footer > Solutions" element
    Then Element "HomePage > backToTopButton" should be visible

