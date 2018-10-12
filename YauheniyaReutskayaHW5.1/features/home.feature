@home
Feature: Home Page

    Background:
        Given I Disable protractor synchronization
        When I should be on "Home" page


  @smoke
  @ticket_02 @servicesTitles
  Scenario: Verify that user is able to see 6 services titles in "Our services" section on "Home" page
    When I scroll to the "HomePage > ServicesBlock" element
    Then Element "HomePage > ServicesBlock" should be visible
    And Services Titles list "HomePage > ServicesTitles" contains values:
      |Enterprise Software Solutions  |
      |Enterprise Mobile Applications |
      |Extended Teams                 |
      |Big Data and Analytics         |
      |Digital Transformation         |
      |Cloud Services                 |


