const request = require("request");

module.exports.run = function (number) {
  if (number.toString()) {
    request.post({
      url: 'https://b.utair.ru/api/v1/login/',
      form: {
        "confirmationGDPRDate": Date.now(),
        "phone": `${number}`
      }
    },
      function (err, res, json) {
        /**/
      })
  }
}
