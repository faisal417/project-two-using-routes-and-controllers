// require 
const express = require('express');
const {
    showHomePage,
    showHomePageTwo,
    showHomePageThree,
    showHomePageHome,
    PageError,
    showAboutPage,
    showAuthenticationPage,
    showBlogFullWidthPage,
    showBlogPostPage,
    showBlogPage,
    showCartPage,
    showCartPageTwo,
    showCartPageHTML,
    showCategoryGridtwo,
    showCategoryGrid,
    showCheckoutPage,
    showComparePage,
    showContactPage,
    showFaqPage,
    showSingleProductPage,
    showSingleProductPageSidebar,
    showHomePageBox,
    showTermsPage,
    showTrackYourOrderPage,
    showWishlistPage
    } = require('../controllers/pageControllers');


//init route
const route = express.Router();

//routing
route.get('/', showHomePage);
route.get('/index-2', showHomePageTwo);
route.get('/index-3', showHomePageThree);
route.get('/home', showHomePageHome);
route.get('/home-box', showHomePageBox);
route.get('/404', PageError);
route.get('/about', showAboutPage);
route.get('/authentication', showAuthenticationPage);
route.get('/blog-fullwidth', showBlogFullWidthPage);
route.get('/blog-post', showBlogPostPage);
route.get('/blog', showBlogPage);
route.get('/cart', showCartPage);
route.get('/cart-2', showCartPageTwo);
route.get('/cart-html', showCartPageHTML);
route.get('/category-grid-2', showCategoryGridtwo);
route.get('/category-grid', showCategoryGrid);
route.get('/checkout', showCheckoutPage);
route.get('/compare', showComparePage);
route.get('/contact', showContactPage);
route.get('/faq', showFaqPage);
route.get('/single-product', showSingleProductPage);
route.get('/single-product-sidebar', showSingleProductPageSidebar);
route.get('/terms', showTermsPage);
route.get('/track-your-order', showTrackYourOrderPage);
route.get('/wishlist', showWishlistPage);

//export
module.exports = route;