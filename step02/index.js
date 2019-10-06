'use strict'

const generateValues = () =>
  Math.round(Math.random() * 10)

const arrayOfRandomKeys = Array(10).fill()
  .map(() => generateValues())

console.log('Generated Random Keys Array: ')
console.dir(arrayOfRandomKeys, { depth: null })

const arrayOfSetDataType = new Set()

for (let i = 0; i < 10; i++) {
  const value = generateValues()
  console.log(`\nTrying to add ${value} to array of Set.`)
  arrayOfSetDataType.add(value)
}

console.log('\nGenerated Set Data Type Array: ')
console.dir([ ...arrayOfSetDataType.values() ], { depth: null })
