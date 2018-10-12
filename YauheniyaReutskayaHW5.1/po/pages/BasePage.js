'use strict';

const Header = require('../components/global/Header');
const Footer = require('../components/global/Footer');

class BasePage {
        constructor() {

                this.Header = new Header();
                this.Footer = new Footer();
                this.backToTopButton = element(by.css("span.et_pb_scroll_top"));
        };
}

module.exports = BasePage;