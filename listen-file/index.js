'use strict'

const { readFileSync } = require('fs')
const prefix = `${__dirname}/../assets`
const files = [ `tsk_first.txt`, `tsk_second.txt` ]

module.exports.fileListener = async () => {
  try {
    for (let i = 0; i < 2; i++) {
      const response = readFileSync(`${prefix}/${files[i]}`, 'utf8')
      console.log(`Content of ${(i + 1)}º file: `)
      console.dir(response, { depth: null })
    }
  } catch (err) {
    const error = err && err.message || err
    console.error('While listening files an error has occurred, ', error)
  }
}
