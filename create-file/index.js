'use strict'

const { mkdirSync, writeFileSync } = require('fs')
const { doesItExist } = require('../utils')
const { content, prefix } = require('./fields')

module.exports.fileCreator = async () => {
  try {
    const directoryExists = doesItExist(prefix)
    if (directoryExists) console.log(directoryExists)
    mkdirSync(`${__dirname}/../assets`)
    console.log('Directory created successfully!')

    for (let i = 0; i < 2; i++) {
      writeFileSync(content[i].path, content[i].message)
      console.log(`${(i + 1)}º created successfully!`)
    }
  } catch (err) {
    const error = err && err.message || err
    console.error('While creating files an error has occurred, ', error)
  }
}
