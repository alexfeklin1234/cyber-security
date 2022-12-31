const request = require("request");

module.exports.run = function (number) {
  if (number.toString().startsWith('7')) {
    request.post({
      url: 'https://shop.vsk.ru/ajax/auth/postSmsX/',
      form: {
        "phone": `${number.toString().replace(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1($2) $3-$4-$5')}`
      }
    },
      function (err, httpResponse, body) {
        /* ... */
      })
  }
}
