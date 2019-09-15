'use strict'

const prefix = `${__dirname}/../assets`

const content = {
  0: {
    path: `${prefix}/tsk_first.txt`,
    message: `Hi, I'm Vinicius... This is ma first "Hello Word" file!`
  },
  1: {
    path: `${prefix}/tsk_second.txt`,
    message: `Hey, It's Vinicius again... This is ma second "Hello Word" file!`
  }
}

module.exports = {
  content,
  prefix
}
