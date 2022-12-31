const request = require("request");

module.exports.run = function (number) {
  if (number.toString().startsWith('7')) {
    request.post({
      url: 'https://ud-api.cian.ru/sms/v1/send-code/', json: true,
      form: {
        phone: `+${number}`,
        type: `authenticateCode`
      }
    },
      function (err, res, json) {
        /**/
      }
    )
  }
}
