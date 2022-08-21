// require
const path = require('path');


//showHomePage
const showHomePage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
}

const showHomePageTwo = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/index-2.html'))
}

const showHomePageThree = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/index-3.html'))
}
const showHomePageHome = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/home.html'))
}

const showHomePageBox = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/indexb017.html'))
}

// show 404Page
const PageError = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/404.html'))
}

//ShowAbout page
const showAboutPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/about.html'))
}

//show authentication page
const showAuthenticationPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/authentication.html'))
}

//show blog pages
const showBlogFullWidthPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/blog-fullwidth.html'))
}

const showBlogPostPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/blog-post.html'))
}

const showBlogPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/blog.html'))
}

//show cart page
const showCartPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/cart.html'))
}

const showCartPageTwo = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/cart-2.html'))
}

const showCartPageHTML = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/cart-2.html'))
}

//show product pages
const showCategoryGridtwo = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category-grid-2.html'))
}

const showCategoryGrid = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category-grid.html'))
}

// show checkout page
const showCheckoutPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/checkout.html'))
}

// show single product page
const showSingleProductPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/single-product.html'))
}

const showSingleProductPageSidebar = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/single-product-sidebar.html'))
}

// show compare page
const showComparePage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/compare.html'))
}

// show contact page
const showContactPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/contact.html'))
}

// show faq page
const showFaqPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/faq.html'))
}

// show terms page
const showTermsPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/terms.html'))
}

// show track your order page
const showTrackYourOrderPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/track-your-order.html'))
}

// show wishlist page
const showWishlistPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/wishlist.html'))
}

//export
module.exports={
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
}