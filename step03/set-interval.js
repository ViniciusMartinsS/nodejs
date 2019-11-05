'use strict'

;(async () => {
  console.log('________Simple Example of Set Interval________\n')
  await setIntervalExample()
})()

async function setIntervalExample () {
  const setIntervalId = setInterval(() => {
    console.log(`Set Interval Execution`)
  }, 2000)

  setTimeout(() => {
    clearInterval(setIntervalId)
  }, 7000)
}
