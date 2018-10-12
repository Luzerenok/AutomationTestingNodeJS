'use strict';

const BasePage = require("./BasePage");

class ServicePage extends BasePage {
    constructor() {
        super();

        this.HeaderServices = element(by.css('div.header-content'));

        this.EnterpriseApplicationDevelopmentBlock = element(by.css('div.et_pb_column_2'));
        this.ProjectOutsourcingBlock = element(by.css('div.et_pb_column_3'));
        this.InnovationThroughTechnologyBlock = element(by.css('div.et_pb_column_4'));
        this.AdditionalServicesBlock = element(by.css('div.et_pb_column_5'));
        this.ServerSideBlock = element(by.css('div.et_pb_column_8'));
        this.MobileBlock = element(by.css('div.et_pb_column_9'));
        this.FrontEndBlock = element(by.css('div.et_pb_column_10'));
        this.DataStorageAndCloudBlock = element(by.css('div.et_pb_column_11'));

        this.EnterpriseApplicationDevelopmentItems = this.EnterpriseApplicationDevelopmentBlock.$$('div.et_pb_column_2 div.service-item');
        this.ProjectOutsourcingItems = this.ProjectOutsourcingBlock.$$('div.et_pb_column_3 div.service-item');
        this.InnovationThroughTechnologyItems = this.InnovationThroughTechnologyBlock.$$('div.et_pb_column_4 div.service-item');
        this.AdditionalServicesItems = this.AdditionalServicesBlock.$$('div.et_pb_column_5 div.service-item');
        this.ServerSideItems = this.ServerSideBlock.$$('div.et_pb_column_8 div.skill-item');
        this.MobileItems = this.MobileBlock.$$('div.et_pb_column_9 div.skill-item');
        this.FrontEndItems = this.FrontEndBlock.$$('div.et_pb_column_10 div.skill-item');
        this.DataStorageAndCloudItems = this.DataStorageAndCloudBlock.$$('div.et_pb_column_11 div.skill-item');

    };
}

module.exports = ServicePage;