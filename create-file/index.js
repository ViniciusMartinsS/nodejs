'use strict'

const { mkdirSync, writeFileSync } = require('fs')
const { checkExistence } = require('../utils')
const { content, prefix } = require('./fields')

module.exports.fileCreator = async () => {
  try {
    directoryCreator()
    for (let i = 0; i < 2; i++) {
      writeFileSync(content[i].path, content[i].message)
      console.log(`${(i + 1)}º created successfully!`)
    }
  } catch (err) {
    const error = err && err.message || err
    console.error('While creating files an error has occurred,', error)
    throw err
  }
}

function directoryCreator () {
  const error = { status: false, message: 'Directory already exists!' }

  const exists = checkExistence(prefix)
  if (exists) throw error

  mkdirSync(prefix)
  console.log('Directory created successfully!')
}
