// assignment b
const crypto = require('crypto');
console.log('Assignment b')
crypto.randomBytes(48, (err, buf) => {
  if (err) throw err;
  let result = {
    "title": "6 Secure Randoms",
    "randoms": []
  }

  result.randoms.push({ "length": buf.length, "random": buf.toString('hex') })

  crypto.randomBytes(40, function (err, buf) {
    if (err) {
      return console.log(err)
    }
    result.randoms.push({ "length": buf.length, "random": buf.toString('hex') })
  })

  crypto.randomBytes(32, function (err, buf) {
    if (err) {
      return console.log(err)
    }
    result.randoms.push({ "length": buf.length, "random": buf.toString('hex') })
  })

  crypto.randomBytes(24, function (err, buf) {
    if (err) {
      return console.log(err)
    }
    result.randoms.push({ "length": buf.length, "random": buf.toString('hex') })
  })

  crypto.randomBytes(16, function (err, buf) {
    if (err) {
      return console.log(err)
    }
    result.randoms.push({ "length": buf.length, "random": buf.toString('hex') })
  })

  crypto.randomBytes(8, function (err, buf) {
    if (err) {
      return console.log(err)
    }
    result.randoms.push({ "length": buf.length, "random": buf.toString('hex') })
    //console.log(result)
  })
});

// assignment c
function makeSecureRandom(size) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(size, function (err, buf) {
      if (err) {
        reject(err)
      }
      else {
        let secureHex = buf;
        resolve(secureHex)
      }

    })
  })
}




let promises = [makeSecureRandom(48), makeSecureRandom(40)
,makeSecureRandom(32),makeSecureRandom(24),
makeSecureRandom(16), makeSecureRandom(8)];



function execPromises(callback) {
  Promise.all(promises)
    .then((data) => {
      let result = {
        "title": "6 Secure Randoms",
        "randoms": []
      }
      data.map(buf => result.randoms.push({ "length": buf.length, "random": buf.toString('hex') }))
      //console.log(result)
      return callback(result);
    }).catch(err => console.log(err))
}

module.exports = { generateBytes: execPromises }
