'use strict'

const { existsSync } = require('fs')

module.exports.checkExistence = path => {
  const err = { status: false, message: 'path is required' }

  if (!path) throw err

  return existsSync(path)
}

module.exports.checkFileNamePattern = givenName => {
  const err = { status: false, message: 'Invalid variable name' }
  const regex = /^[a-z]{1,3}_[a-z].+$/
  const matchRegex = givenName.match(regex)
  if (!matchRegex) throw err
}
