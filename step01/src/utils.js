'use strict'

module.exports.checkFileNamePattern = variable => {
  const regex = /^tsk_[a-z].+$/

  if (!variable.match(regex)) {
    throw new Error('Invalid variable name')
  }
}
