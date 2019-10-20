'use strict'

const { readdirSync } = require('fs')
const directory = `${__dirname}/..`

async function mapWayMethod () {
  console.log('\n------------')
  console.log('MAP METHOD\n')

  const arrayOfFiles = await readdirSync(directory)

  const mapItems = arrayOfFiles.map((item, i) => ([ `key${i}`, item ]))
  let lastKey = {}

  const map = new Map(mapItems)
  map.set(lastKey, {})

  const memoryUsage = process.memoryUsage()

  console.log('\nGenerated Map Keys: ')
  console.dir([ ...map.keys() ], { depth: null })

  console.log('\nGenerated Map Values: ')
  console.dir([ ...map.values() ], { depth: null })

  console.log(`\nCheck if "map" has "key0"
[must be true because "key0" was added]:`)
  console.dir(map.has('key0'), { depth: null })

  console.log(`\nGet key0" from "map" now
[must get "key0" value]:`)
  console.dir(map.get('key0'), { depth: null })

  console.log(`\nNow lets delete key0" from "map"
[must be true because "key0" exists and so we could remove it]:`)
  console.dir(map.delete('key0'), { depth: null })

  console.log(`\nOk, now lets check again if "map" has "key0"
[must be false because "key0" was removed]:`)
  console.dir(map.has('key0'), { depth: null })

  lastKey = null

  console.log(`\nGenerated Map Keys after resetting "lastKey"
[must have all keys, including "{}"]:`)
  console.dir([ ...map.keys() ], { depth: null })

  console.log(`\nGenerated Map Values after resetting "lastKey"
[must have all values, including "{}"]:`)
  console.dir([ ...map.values() ], { depth: null })

  console.log('\nMemory Usage Inside Map Method')
  console.log(`heapUsed/V8's memory: ${memoryUsage.heapUsed / 1024 / 1024} megabytes`)
  console.log(`Device memory: ${memoryUsage.rss / 1024 / 1024} megabytes`)
  console.log('------------\n')

  return arrayOfFiles
}

async function weakMapWayMethod (arrayOfFiles) {
  console.log('\n------------')
  console.log('WEAK_MAP METHOD\n')

  const weakMapInstance = new WeakMap()
  const arrayOfWeakMap = [ ...arrayOfFiles ]

  let weakMapObjEvenNumbers = {}
  let weakMapObjOddNumbers = {}

  for (let i = 0; i < arrayOfWeakMap.length; i++) {
    const weakMapObjOption = i % 2 === 0
      ? weakMapObjEvenNumbers
      : weakMapObjOddNumbers

    weakMapInstance.set(weakMapObjOption, arrayOfWeakMap[i])
  }

  const memoryUsage = process.memoryUsage()

  console.log(`\nCheck if "weakMapObjOddNumbers" is in "weakMapInstance"
[must be true because "weakMapObjOddNumbers" was used]:`)
  console.dir(weakMapInstance.has(weakMapObjEvenNumbers), { depth: null })

  console.log(`\nCheck if "weakMapObjEvenNumbers" is in "weakMapInstance"
[must be true because "weakMapObjEvenNumbers" was used]:`)
  console.dir(weakMapInstance.has(weakMapObjEvenNumbers), { depth: null })

  console.log(`\nCheck if {} is in "weakMapInstance"
[must be false because its a new object]:`)
  console.dir(weakMapInstance.has({}), { depth: null })

  console.log(`\nGet last value from "weakMapObjOddNumbers"
[it must show the last one because WeakMap doesn't offer access to more than one item]`)
  console.dir(weakMapInstance.get(weakMapObjOddNumbers))

  console.log(`\nGet last value from "weakMapObjEvenNumbers"
[it must show the last one because WeakMap doesn't offer access to more than one item]`)
  console.dir(weakMapInstance.get(weakMapObjEvenNumbers))

  weakMapObjOddNumbers = null
  weakMapObjEvenNumbers = null

  console.log(`\nGet last value from "weakMapObjOddNumbers"
[it must show undefined because we've set "weakMapObjOddNumbers" to null ]`)
  console.dir(weakMapInstance.get(weakMapObjOddNumbers))

  console.log(`\nGet last value from "weakMapObjEvenNumbers"
[it must show undefined because we've set "weakMapObjEvenNumbers" to null ]`)
  console.dir(weakMapInstance.get(weakMapObjEvenNumbers))

  console.log('\nMemory Usage Inside WeakMap Method')
  console.log(`heapUsed/V8's memory: ${memoryUsage.heapUsed / 1024 / 1024} megabytes`)
  console.log(`Device memory: ${memoryUsage.rss / 1024 / 1024} megabytes`)
  console.log('------------\n')
}

mapWayMethod()
  .then(arrayOfFiles => weakMapWayMethod(arrayOfFiles))
  .catch(err => console.error(err)
  )
