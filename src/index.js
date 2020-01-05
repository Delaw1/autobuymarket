const express = require('express')
// require('./db/mongoose')
const indexRouter = require('./router')
const path = require('path')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

//Define path for express config
const publicDir = path.join(__dirname, '../src/public');
const viewsPath = path.join(__dirname, '../src/templates/views')
const partialsPath = path.join(__dirname, '../src/templates/partials')

//Setup hbs engine and view location
app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static dir to serve
app.use(express.static(publicDir))

app.use(express.json())
app.use(indexRouter)

const puppeteer = require('puppeteer');

async function run() {
  let browser = await puppeteer.launch({ headless: true });
  let page = await browser.newPage();
  await page.goto('https://www.iaai.com/VehicleSearch/SearchDetails?Keyword=Auction');
  await page.screenshot({ path: './image2.jpg', type: 'jpeg' });
  await page.close();
  await browser.close();
}

// run();

app.listen(port, () => {
    console.log('Server is on on ' + port)
})