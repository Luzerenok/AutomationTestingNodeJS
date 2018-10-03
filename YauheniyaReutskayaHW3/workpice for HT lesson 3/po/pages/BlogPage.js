'use strict';
const BasePage = require("./BasePage");

class BlogPage extends BasePage{
    constructor() {
        super();
        this.headerBlogTitle = element(by.css("div.header-content h1"));
        this.headerBlogDescription = element(by.css("div.header-content span"));

        this.blogPostReadMoreButton = element(by.css("div.pagination a"));

    };



}

module.exports = BlogPage;