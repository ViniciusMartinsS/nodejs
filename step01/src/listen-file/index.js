'use strict'

const { readFileSync } = require('fs')
const { files, prefix } = require('./fields')

module.exports.fileListener = async () => {
  for (let i = 0; i < 2; i++) {
    const response = readFileSync(`${prefix}/${files[i]}`, 'utf8')

    console.log(`Content of ${(i + 1)}º file: `)
    console.dir(response, { depth: null })
    console.log(`End content\n`)
  }
}
