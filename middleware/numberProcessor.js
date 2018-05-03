


function numberProcessor (req, res, next) {
  // check for number if available
  if (!req.body) {
    return res.status(400).json({
      message: 'No data sent'
    })
  } else if (!req.body.number) {
    return res.status(400).json({
      message: 'No number sent'
    })
  }

  // turn number into string and remove 5 and other symbols
  let number = String(req.body.number)
  let trim = number.replace(/([^\d]|5)/g, '')
  let clean = removeZeros(trim)

  req.clean = clean
  next()
}

function numberProcessorMany (req, res, next) {
  // check for number if available
  if (!req.body) {
    return res.status(400).json({
      message: 'No data sent'
    })
  } else if (!req.body.numbers) {
    return res.status(400).json({
      message: 'No number sent'
    })
  }

  // turn number into string and remove 5 and other symbols
  let processed = []
  for (var i = 0; i < req.body.numbers.length; i++) {
    let number = String(req.body.numbers[i])
    let trim = number.replace(/([^\d]|5)/g, '')
    let clean = removeZeros(trim)
    processed.push(clean)
  }

  req.cleans = processed
  next()
}

function removeZeros (string) {
  let normalizeZero
  if (string[0] === '0') {
    normalizeZero = string.substr(1, 1) + string.substr(1)
  } else if ((string[0]+string[1]) === '62') {
    normalizeZero = string.substr(2, 1) + string.substr(2)
  } else {
    normalizeZero = string
  }
  let arr = normalizeZero.split('')
  let result = []
  let keepState
  for (var i = 0; i < arr.length+1; i++) {
    if (arr[i] === '0') {
      if (keepState === undefined) {
        keepState = arr[i-1]
      }
    } else if (arr[i] !== '0') {
      if (keepState !== undefined) {
        result.push(keepState)
        keepState = undefined
      }
      if (arr[i] !== undefined) {
        result.push(arr[i])
      }
    }
  }
  return result.join('')
}

module.exports = {
  numberProcessor,
  numberProcessorMany
};
