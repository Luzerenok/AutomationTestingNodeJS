'use strict';

const HomePage = require('./pages/HomePage');
const ServicePage = require('./pages/ServicePage');
// const baseUrl = browser.baseUrl;

class World {
	constructor (){
		this.HomePage = new HomePage();
		this.ServicePage = new ServicePage();
		this.HomeUrl = `^${browser.baseUrl}$`;
	}
}

module.exports = new World();