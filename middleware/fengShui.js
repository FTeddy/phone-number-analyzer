///// good
const hashKekayaan = {
  '14': true,
  '28': true,
  '39': true,
  '41': true,
  '67': true,
  '76': true,
  '82': true,
  '93': true,
}

const hashKesehatan = {
  '13': true,
  '27': true,
  '31': true,
  '49': true,
  '68': true,
  '72': true,
  '86': true,
  '94': true,
}

const hashRelasi = {
  '19': true,
  '26': true,
  '34': true,
  '43': true,
  '62': true,
  '78': true,
  '87': true,
  '91': true,
}

const hashKestabilan = {
  '11': true,
  '22': true,
  '33': true,
  '44': true,
  '66': true,
  '77': true,
  '88': true,
  '99': true,
}

//// bad
const hashPerselisihan = {
  '17': true,
  '23': true,
  '32': true,
  '46': true,
  '64': true,
  '71': true,
  '89': true,
  '98': true,
}

const hashKehilangan = {
  '16': true,
  '29': true,
  '38': true,
  '47': true,
  '61': true,
  '74': true,
  '83': true,
  '92': true,
}

const hashMalapetaka = {
  '18': true,
  '24': true,
  '36': true,
  '42': true,
  '63': true,
  '79': true,
  '81': true,
  '97': true,
}

const hashKehancuran = {
  '12': true,
  '21': true,
  '37': true,
  '48': true,
  '69': true,
  '73': true,
  '84': true,
  '96': true,
}

function fengShui (req, res, next) {
  let length = req.clean.length

  // good characteristics
  let kekayaan = 0
  let kesehatan = 0
  let relasi = 0
  let kestabilan = 0

  // bad characteristics
  let perselisihan = 0
  let kehilangan = 0
  let malapetaka = 0
  let kehancuran = 0

  for (var i = 0; i < req.clean.length - 1; i++) {
    let pair = req.clean[i]+req.clean[i+1]
    if (hashKekayaan[pair]) {kekayaan++}
    if (hashKesehatan[pair]) {kesehatan++}
    if (hashRelasi[pair]) {relasi++}
    if (hashKestabilan[pair]) {kestabilan++}
    if (hashPerselisihan[pair]) {perselisihan++}
    if (hashKehilangan[pair]) {kehilangan++}
    if (hashMalapetaka[pair]) {malapetaka++}
    if (hashKehancuran[pair]) {kehancuran++}
  }

  // construct response
  let result = {
    matches: length-1,
    good: {
      kekayaan: `${kekayaan}/${length-1}, ` + String(Math.floor((kekayaan/(length-1)*100))) + '%',
      kesehatan: `${kesehatan}/${length-1}, ` + String(Math.floor((kesehatan/(length-1)*100))) + '%',
      relasi: `${relasi}/${length-1}, ` + String(Math.floor((relasi/(length-1)*100))) + '%',
      kestabilan: `${kestabilan}/${length-1}, ` + String(Math.floor((kestabilan/(length-1)*100))) + '%',
      percentage: String(Math.floor((kekayaan+kesehatan+relasi+kestabilan)/(length-1)*100)) + '%'
    },
    bad: {
      perselisihan: `${perselisihan}/${length-1}, ` + String(Math.floor((perselisihan/(length-1)*100))) + '%',
      kehilangan: `${kehilangan}/${length-1}, ` + String(Math.floor((kehilangan/(length-1)*100))) + '%',
      malapetaka: `${malapetaka}/${length-1}, ` + String(Math.floor((malapetaka/(length-1)*100))) + '%',
      kehancuran: `${kehancuran}/${length-1}, ` + String(Math.floor((kehancuran/(length-1)*100))) + '%',
      percentage: String(Math.floor((perselisihan+kehilangan+malapetaka+kehancuran)/(length-1)*100)) + '%'
    }
  }

  req.result = result
  next()
}

module.exports = fengShui;
