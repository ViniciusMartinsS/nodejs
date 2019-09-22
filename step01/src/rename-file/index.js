'use strict'

const { appendFileSync, existsSync, renameSync } = require('fs')
const { checkFileNamePattern } = require('../utils')
const { append, files, prefix, renamed } = require('./fields')

module.exports.fileRenamer = () => {
  for (let i = 0; i < 2; i++) {
    const fileName = `${prefix}/${files[i]}.txt`
    const newFileName = `${prefix}/${renamed[i]}.txt`

    if (!existsSync(fileName)) {
      throw new Error('File does not exist!')
    }

    checkFileNamePattern(renamed[i])
    renameSync(fileName, newFileName)
    console.log(`${(i + 1)}º file renamed successfully!\n`)

    appendFileSync(newFileName, append)
    console.log(`Some more data were appended to ${(i + 1)}º file!\n`)
  }
}
