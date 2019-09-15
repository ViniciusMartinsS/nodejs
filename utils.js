'use strict'

const { existsSync } = require('fs')
const err = { status: false, message: 'path is required' }

module.exports.doesItExist = path => {
  if (!path) throw err

  return existsSync(path)
}
