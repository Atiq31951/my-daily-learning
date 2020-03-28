const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const Keys = require('./configs/keys')
const hbs = require('express-handlebars')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

const { DBInfo: { MongoURI } } = Keys

// Mongoose to connect mogo-db
mongoose.connect(MongoURI, { useNewUrlParser: true })
.then(() => console.log('DB Connected'))
.catch(error => console.error(error))

// Template Engine Conf
app.engine('handlebars', hbs({defaultLayout: 'default'}))


// Routes
app.use('/', (req, res) => {
    res.send('Welcome to the cms')
})

const port = 3000
app.listen(port, () => {
    console.log(`Port ${port} is stared to serve`)
})