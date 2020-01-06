const express = require('express')
const router = new express.Router
const puppeteer = require("puppeteer")

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/accessories-detail', (req, res) => {
  res.render('accessories-detail')
})

router.get('/shopping-cart', (req, res) => {
  res.render('shopping-cart')
})

router.get('/checkout', (req, res) => {
  res.render('checkout')
})

router.get('/grid1', (req, res) => {
  res.render('grid1')
})

router.get('/grid', (req, res) => {
  res.render('grid')
})

router.get('/list', (req, res) => {
  res.render('list')
})

router.get('/wishlist', (req, res) => {
  res.render('wishlist')
})

router.get('/list1', (req, res) => {
  res.render('list1')
})

router.get('/car-detail', (req, res) => {
  res.render('car-detail')
})

router.get('/blog', (req, res) => {
  res.render('blog')
})

router.get('/blog-detail', (req, res) => {
  res.render('blog-detail')
})

router.get('/compare', (req, res) => {
  res.render('compare')
})

router.get('/about-us', (req, res) => {
  res.render('about-us')
})

router.get('/checkout-method', (req, res) => {
  res.render('checkout-method')
})

router.get('/checkout-billing-info', (req, res) => {
  res.render('checkout-billing-info')
})

router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

router.get('/multiple-addresses', (req, res) => {
  res.render('multiple-addresses')
})

router.get('/contact-us', (req, res) => {
  res.render('contact-us')
})

router.get('/quickview', (req, res) => {
  res.render('quickview')
})

router.get('/newsletter', (req, res) => {
  res.render('newsletter')
})

router.get('*', (req, res) => {
  res.render('404error')
})


router.get("/scrap", async function(req, res, next) {
    const url = 'https://www.copart.com'
    puppeteer
  .launch({ headless: true })
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {
    res.send(html);
  })
  .catch(function(err) {
    //handle error
  });
    // res.send(result);
  });


module.exports = router