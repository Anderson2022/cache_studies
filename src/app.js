const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/cache', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes')(app);

app.listen(3000, () => {
  console.log('Express started-------');
})