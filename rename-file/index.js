'use strict'

const { appendFileSync, existsSync, renameSync } = require('fs')
const { files, prefix, renamed } = require('./fields')
const fileErr = { status: false, message: 'File does not exist!' }

module.exports.fileRenamer = () => {
  try {
    for (let i = 0; i < 2; i++) {
      const doesExist = existsSync(`${prefix}/${files[i]}`)

      if (!doesExist) throw fileErr

      renameSync(`${prefix}/${files[i]}`, `${prefix}/${renamed[i]}`)
      appendFileSync(`${prefix}/${renamed[i]}`, '\nI just append some more data to it')
      console.log(`${(i + 1)}º renamed successfully!`)
    }
  } catch (err) {
    const error = err && err.message || err
    console.error('While renaming files an error has occurred:', error)
    throw err
  }
}
