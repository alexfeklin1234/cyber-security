const request = require("request");
const tools = require("../index.js")

module.exports.run = function (number) {
  if (number.toString().startsWith('7')) {
    request.post({
      url: 'https://api.nadodeneg.ru/user', json: true,
      body: {
        "agree": true,
        "email": tools.mailGen(),
        "ga_cid": "1566208007.1648898983",
        "is_esia_user": false,
        "last_name": "Иванов",
        "first_name": "Иван",
        "middle_name": "Андреевич",
        "mobile_phone": number,
        "requested_amount": 10000,
        "requested_days": 7,
        "step": 2,
        "target_url": null,
      }
    },
      function (err, res, json) {
        /**/
      });
  }
}