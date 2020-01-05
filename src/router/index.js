const express = require('express')
const router = new express.Router
const puppeteer = require("puppeteer")

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/login', (req, res) => {
  res.render('login')
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