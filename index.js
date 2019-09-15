'use strict'

const { config } = require('dotenv')
config()
const { fileCreator } = require('./create-file')
const { fileListener } = require('./listen-file')
const { fileRenamer } = require('./rename-file')

fileCreator()
  .then(() => fileListener())
  .then(() => fileRenamer())
  .catch(err => err)
