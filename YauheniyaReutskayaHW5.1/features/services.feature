@services
Feature: Services

  Background:
    Given I Disable protractor synchronization
    When I should be on "Home" page

  @smoke
  @ticket_01 @seeAllItems
  Scenario Outline: Verify that user is able to see all items in all tables on the
    When I scroll to the "HomePage > ServicesBlock" element
    Then Element "HomePage > ServicesBlock" should be visible
    When I click "HomePage > ViewAllServisesLink" element
    When I should be on "Service" page
    And I scroll to the "ServicePage > <Title of Blocks>" element
    Then Collection "ServicePage > <Service Block Items>" should be visible
    And Count of "ServicePage > <Service Block Items>" elements should be equal "<Number of Items>"

  Examples:
  | Service Block Items                   | Number of Items    | Title of Blocks                       |
  | EnterpriseApplicationDevelopmentItems | 7                  | EnterpriseApplicationDevelopmentBlock |
  | ProjectOutsourcingItems               | 7                  | ProjectOutsourcingBlock               |
  | InnovationThroughTechnologyItems      | 6                  | InnovationThroughTechnologyBlock      |
  | AdditionalServicesItems               | 4                  | AdditionalServicesBlock               |
  | ServerSideItems                       | 5                  | ServerSideBlock                       |
  | MobileItems                           | 5                  | MobileBlock                           |
  | FrontEndItems                         | 6                  | FrontEndBlock                         |
  | DataStorageAndCloudItems              | 7                  | DataStorageAndCloudBlock              |

