'use strict'

module.exports.checkFileNamePattern = variable => {
  const regex = /^[a-z]{1,3}_[a-z].+$/

  if (!variable.match(regex)) {
    throw new Error('Invalid variable name')
  }
}
