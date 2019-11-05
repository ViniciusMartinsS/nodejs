'use strict'

;(async () => {
  console.log('________Simple Example of Set Timeout 0 Second________\n')
  await setTimeoutExample()
})()

async function setTimeoutExample () {
  setTimeout(() => {
    console.log('I am set timeout log')
  }, 0)
  console.log('It shows up before set timeout log even though it is after it')
}
