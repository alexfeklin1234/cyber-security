const request = require("request");

module.exports.run = function (number) {
  if (number.toString()) {
    request.get({
      url: `https://www.banki.ru/ng/api/v1.0/public/auth/send-otp/`,
      form: {
        "phone": `+${number}`,
        "isRulesAccepted": "true",
        "isAdAccepted": "true"
      }
    },
      function (err, res, json) {
        /**/
      });
  }
}