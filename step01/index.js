'use strict'

const { config } = require('dotenv')
config()

const {
  directoryCreator,
  fileCreator,
  fileListener,
  fileRenamer
} = require('./src')

directoryCreator()
  .then(() => fileCreator())
  .then(() => fileListener())
  .then(() => fileRenamer())
  .catch(err => {
    const error = {
      status: false,
      message: err && err.message || err
    }

    console.log(error)
    return error
  })
