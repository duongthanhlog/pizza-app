const express = require('express')
const app = express();
const user = require('./index')


app.use('/user', user)