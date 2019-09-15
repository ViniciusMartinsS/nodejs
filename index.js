'use strict'

const { config } = require('dotenv')
config()
const { directoryCreator } = require('./src/create-directory')
const { fileCreator } = require('./src/create-file')
const { fileListener } = require('./src/listen-file')
const { fileRenamer } = require('./src/rename-file')

directoryCreator()
  .then(() => fileCreator())
  .then(() => fileListener())
  .then(() => fileRenamer())
  .catch(err => {
    const error = {
      status: false,
      message: err && err.message && err.message || err
    }
    console.log(error)
    return error
  })
