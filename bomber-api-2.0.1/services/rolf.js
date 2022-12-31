const request = require("request");

module.exports.run = function (number) {
  if (number.toString().startsWith('7')) {
    request.post({
      url: 'https://lk.rolf.ru/api/register-sms-code', json: true,
      json: {
        phone: `${number.toString().replace(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1 ($2) $3-$4-$5')}`,
        reToken: ""
      }
    },
      function (err, res, json) {
        /**/
      }
    )
  }
}
