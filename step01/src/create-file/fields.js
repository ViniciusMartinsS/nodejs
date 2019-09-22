'use strict'

const FOLDER_NAME = process.env.FOLDER_NAME || 'assets'
const FIRST_FILE_NAME = process.env.FIRST_FILE_NAME || 'tsk_first_noenv'
const SECOND_FILE_NAME = process.env.SECOND_FILE_NAME || 'tsk_second_noenv'

const prefix = `${__dirname}/../${FOLDER_NAME}`

const content = {
  0: {
    path: `${prefix}/${FIRST_FILE_NAME}.txt`,
    message: `Hi, I'm Vinicius... This is ma first "Hello Word" file!`,
    file_name: FIRST_FILE_NAME
  },
  1: {
    path: `${prefix}/${SECOND_FILE_NAME}.txt`,
    message: `Hey, It's Vinicius again... This is ma second "Hello Word" file!`,
    file_name: SECOND_FILE_NAME
  }
}

module.exports = {
  content,
  prefix
}
