const BlogPage = require('../../po/pages/BlogPage.js');
const Header = require('../../po/components/global/Header.js');
const EC = protractor.ExpectedConditions;
const blogUrl = 'https://exadel.com/about/blog/';
const titleBlogPage = "Blog | About | Exadel";
const topBlogPageTitle = "The Exadel blog";
const topBlogPageDescription = "Your dose of tech talk and insights";
const CUSTOM_TIMEOUT = 15 * 1000;

describe("BLOG PAGE", () => {

    beforeEach(async () => {
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl);
        let header = new Header();
        await header.NewsButton.click();
        await header.BlogButton.click();
    });

    describe("OPENING BLOG PAGE", () => {
        it(`verify that Blog Page url is right`, async () => {
            const url = await browser.getCurrentUrl();
            return expect(url).toEqual(blogUrl);
        });

        it(`verify that title of the Blog Page is equal to the 'Blog | About | Exadel'`, async () => {
            const pageTitle = await browser.getTitle();
            return expect(pageTitle).toEqual(titleBlogPage);
        });
    });

    describe("Verification header content of the BLOG PAGE", () => {
        it(`verify that Blog Page top title is equal to the 'The Exadel blog'`, async () => {
            let blogPage = new BlogPage();
            const blogPageTitle = await blogPage.headerBlogTitle.getText();
            return expect(blogPageTitle).toEqual(topBlogPageTitle);
        });

        it(`verify that Blog Page top description is equal to the 'Your dose of tech talk and insights'`, async () => {
            let blogPage = new BlogPage();
            const blogPageDescription = await blogPage.headerBlogDescription.getText();
            return expect(blogPageDescription).toEqual(topBlogPageDescription);
        });
   });

});
