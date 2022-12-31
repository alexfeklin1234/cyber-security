const request = require("request");

module.exports.run = function (number) {
  if (number.toString().startsWith('375')) {
    request.post({
      url: 'https://618.by/api/v2/auth/login',
      form: {
        phone: `${number}`,
        password: "nikak52N12",
        uid: "",
        name: "",
        surname: ""
      }
    },
      function (err, httpResponse, body) {
        /**/
      })
  }
}
