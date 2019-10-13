'use strict'

const { readdirSync } = require('fs')
const directory = `${__dirname}/..`

async function mapWayMethod () {
  console.log('\n------------')
  console.log('MAP METHOD\n')

  const arrayOfFiles = await readdirSync(directory)
  const map = new Map([ arrayOfFiles ])
  map.get([ arrayOfFiles ])

  const memoryUsage = process.memoryUsage()

  console.log('\nGenerated Map: ')
  console.dir(map, { depth: null })

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
  const arrayOfWeakMap = { ...arrayOfFiles }
  weakMapInstance.set(arrayOfWeakMap)

  const memoryUsage = process.memoryUsage()

  console.log('\nCheck if arrayWeakMap is in weakMapInstance:: ')
  console.dir(weakMapInstance.has(arrayOfWeakMap), { depth: null })

  console.log('\nMemory Usage Inside WeakMap Method')
  console.log(`heapUsed/V8's memory: ${memoryUsage.heapUsed / 1024 / 1024} megabytes`)
  console.log(`Device memory: ${memoryUsage.rss / 1024 / 1024} megabytes`)
  console.log('------------\n')
}

mapWayMethod()
  .then(arrayOfFiles => weakMapWayMethod(arrayOfFiles))
  .catch(err => console.error(err)
  )
