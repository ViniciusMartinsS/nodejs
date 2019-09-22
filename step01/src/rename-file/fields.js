'use strict'

const FOLDER_NAME = process.env.FOLDER_NAME || 'assets'
const FIRST_FILE_NAME = process.env.FIRST_FILE_NAME || 'tsk_first_noenv'
const SECOND_FILE_NAME = process.env.SECOND_FILE_NAME || 'tsk_second_noenv'
const RENAME_FIRST_FILE = process.env.RENAME_FIRST_FILE || 'tsk_first_noenv_rename'
const RENAME_SECOND_FILE = process.env.RENAME_SECOND_FILE || 'tsk_second_noenv_rename'

module.exports.prefix = `${__dirname}/../${FOLDER_NAME}`
module.exports.files = [ FIRST_FILE_NAME, SECOND_FILE_NAME ]
module.exports.renamed = [ RENAME_FIRST_FILE, RENAME_SECOND_FILE ]
module.exports.append = `\nHere we got some more text to append to a file.`