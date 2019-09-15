'use strict'

const { appendFileSync, renameSync } = require('fs')
const { checkExistence, checkFileNamePattern } = require('../utils')
const { append, files, prefix, renamed } = require('./fields')
const fileErr = { status: false, message: 'File does not exist!' }

module.exports.fileRenamer = () => {
  try {
    for (let i = 0; i < 2; i++) {
      const exists = checkExistence(`${prefix}/${files[i]}.txt`)
      if (!exists) throw fileErr

      checkFileNamePattern(renamed[i])
      renameSync(`${prefix}/${files[i]}.txt`, `${prefix}/${renamed[i]}.txt`)
      appendFileSync(`${prefix}/${renamed[i]}.txt`, append)
      console.log(`${(i + 1)}º renamed successfully!`)
    }
  } catch (err) {
    throw err
  }
}
