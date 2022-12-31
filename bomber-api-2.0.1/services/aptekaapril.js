const request = require("request");
const tools = require("../index.js")

module.exports.run = function (number) {
  if (number.toString().startsWith('7')) {
    request.post({
      url: 'https://web-api.apteka-april.ru/users', json: true,
      json: {
        "phone": number,
        "password": tools.charsGen(),
        "name": "Алексей",
        "sname": "Иванов"
    }
    },
      function (err, res, json) {
        /**/
      }
    )
  }
}
