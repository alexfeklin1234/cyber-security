const request = require("request");
const tools = require("../index.js")

module.exports.run = function (number) {
  if (number.toString().startsWith('7')) {
    request.post({
      url: 'https://mapi-order.srochnodengi.ru/api/v1/auth/send-sms/', json: true,
      json: {
          "first_name": "Иван",
          "last_name": "Котов",
          "middle_name": "Артёмович",
          "email": tools.mailGen(),
          "phone": number.toString().replace(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1 $2 $3 $4 $5'),
          "birthday": "1998-08-27"
      }
    },
      function (err, res, json) {
        /**/
      })
  }
}
