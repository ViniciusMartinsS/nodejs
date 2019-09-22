'use strict'

const { existsSync, mkdirSync } = require('fs')

const FOLDER_NAME = process.env.FOLDER_NAME || 'assets'
const folderPath = `${__dirname}/../${FOLDER_NAME}`

module.exports.directoryCreator = async () => {
  if (existsSync(folderPath)) {
    throw new Error('Directory already exists!')
  }

  mkdirSync(folderPath)
  console.log('Directory created successfully!\n')
}
