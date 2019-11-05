'use strict'

;(async () => {
  console.log('________Simple Example of Nested Set Timeout________\n')
  await nestedSetTimeoutExample()
})()

async function nestedSetTimeoutExample () {
  setTimeout(function tick () {
    console.log('I am nested set timeout log')
    setTimeout(tick, 2000)
  }, 2000)
}
