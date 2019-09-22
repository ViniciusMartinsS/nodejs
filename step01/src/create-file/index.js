'use strict'

const { writeFileSync } = require('fs')
const { checkFileNamePattern } = require('../utils')
const { content } = require('./fields')

module.exports.fileCreator = async () => {
  for (let i = 0; i < 2; i++) {
    checkFileNamePattern(content[i].file_name)

    writeFileSync(content[i].path, content[i].message)
    console.log(`${(i + 1)}º file created successfully!\n`)
  }
}
