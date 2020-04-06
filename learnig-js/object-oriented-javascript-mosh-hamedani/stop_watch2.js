function StopWatch () {
  let currentTime = 0
  let running = false
  let intervalFunc = null

  this.stop = function () {
    if (!running) {
      console.log('Stopwatch is already stopped')
      return
    }
    running = false
    console.log('Stopwatch has been stopped')
    clearInterval(intervalFunc)
  }

  this.reset = function () {
    running = false
    clearInterval(intervalFunc)
    currentTime = 0
  }

  Object.defineProperty(this, 'duration', {
    get: () => {
      if (currentTime > 0) {
        return Number.parseFloat(currentTime / 100)
      }
    }
  })
  Object.defineProperties(this, 'running', {
    get: () => {
      return running
    },
    set: (value) => {
      running = value
    }
  })
}

StopWatch.prototype.start = function () {
  if (this.running) {
    console.log('Stopwatch is already running')
    return
  }
  console.log('Stopwatch has been started')
  running = true
  intervalFunc = setInterval(() => {
    currentTime += 1
  }, 10)
}

console.log("Hello I am here")
let sw = new StopWatch()
sw.start()


// so this will make a mess for object orienrtation

