'use strict'

;(async () => {
  console.log('________Simple Example of Set Timeout | With Seconds________\n')
  console.log(`Date before SetTimeOut: ${new Date()}`)
  await setTimeoutWithASecondExample()
})()

async function setTimeoutWithASecondExample () {
  setTimeout(() => {
    console.log(`Date after a second on setTimeout: ${new Date()}`)
  }, 1000)
}
