const request = require("request");

module.exports.run = function (number) {
  if (number.toString().startsWith('7')) {
    request.post({
      url: `https://www.citilink.ru/registration/confirm/phone/+${number}/`, json: true,
      form: {
          "smsRequestToken": "",
          "smsRepeatDelay": 60,
          "smsRepeatsLimit": 3,
          "phone": `${number}`,
          "ret": 1,
          "smsRepeatsDelay": 60
      }
    },
      function (err, res, json) {
        /**/
      })
  }
}
