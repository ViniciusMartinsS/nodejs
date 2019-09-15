'use strict'

const { mkdirSync } = require('fs')
const { checkExistence } = require('../utils')
const FOLDER_NAME = process.env.FOLDER_NAME || 'assets'
const folderPath = `${__dirname}/../${FOLDER_NAME}`
const error = { status: false, message: 'Directory already exists!' }

module.exports.directoryCreator = async () => {
  const exists = checkExistence(folderPath)
  if (exists) throw error

  mkdirSync(folderPath)
  console.log('Directory created successfully!')
}
