const request = require("request");

module.exports.run = function (number) {
  if (number.toString().startsWith('7')) {
    request.post({
      url: 'https://zdravcity.ru/bff/query', json: true,
      json: {
        "operationName": "isRegistered",
        "variables": {
            "phone": `${number.toString().slice(1)}`
        },
        "query": "query isRegistered($phone: String!) {\n  isRegistered(phone: $phone)\n}\n"
    }
    },
      function (err, res, json) {
        /**/
      }
    )
  }
}
