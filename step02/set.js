'use strict'

async function generateArray () {
  const generateValues = () =>
    Math.round(Math.random() * 9)

  const arrayOfRandomKeys = Array(10).fill()
    .map(() => generateValues())

  console.log('Generated Random Keys Array: ')
  console.dir(arrayOfRandomKeys, { depth: null })

  return arrayOfRandomKeys
}

async function setWayMethod (arrayOfRandomKeys) {
  console.log('\n------------')
  console.log('SET METHOD\n')

  const arrayOfSet = new Set(arrayOfRandomKeys)
  const memoryUsage = process.memoryUsage()

  console.log('\nGenerated Set Array: ')
  console.dir([ ...arrayOfSet.values() ], { depth: null })

  console.log('\nMemory Usage Inside Set Method')
  console.log(`heapUsed/V8's memory: ${memoryUsage.heapUsed / 1024 / 1024} megabytes`)
  console.log(`Device memory: ${memoryUsage.rss / 1024 / 1024} megabytes`)
  console.log('------------\n')

  return arrayOfRandomKeys
}

async function weakSetWayMethod (arrayOfRandomKeys) {
  console.log('\n------------')
  console.log('WEAK_SET METHOD\n')
  const weakSetInstance = new WeakSet()
  const arrayOfWeakSet = { ...arrayOfRandomKeys }
  weakSetInstance.add(arrayOfWeakSet)
  const memoryUsage = process.memoryUsage()

  console.log('\nCheck if arrayWeakSet is in weakSetInstance: ')
  console.dir(weakSetInstance.has(arrayOfWeakSet), { depth: null })

  console.log('\nMemory Usage Inside WeakSet Method')
  console.log(`heapUsed/V8's memory: ${memoryUsage.heapUsed / 1024 / 1024} megabytes`)
  console.log(`Device memory: ${memoryUsage.rss / 1024 / 1024} megabytes`)
  console.log('------------\n')
}

generateArray()
  .then(arrayOfRandomKeys => setWayMethod(arrayOfRandomKeys))
  .then(arrayOfRandomKeys => weakSetWayMethod(arrayOfRandomKeys))
  .catch(err => console.error(err))
