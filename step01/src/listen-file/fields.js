'use strict'

const ENV = process.env
const FOLDER_NAME = ENV.STEP01_FOLDER_NAME || 'assets'
const FIRST_FILE_NAME = ENV.STEP01_FIRST_FILE_NAME || 'tsk_first_noenv'
const SECOND_FILE_NAME = ENV.STEP01_SECOND_FILE_NAME || 'tsk_second_noenv'

module.exports.prefix = `${__dirname}/../${FOLDER_NAME}`
module.exports.files = [ `${FIRST_FILE_NAME}.txt`, `${SECOND_FILE_NAME}.txt` ]
