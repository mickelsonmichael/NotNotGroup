const axios = require("axios");

module.exports = async function (context, req) {
  context.log("GET diary progress.");

  const url = process.env["DIARY_CSV_URL"];

  const response = await axios(url);

  context.res = {
    statusCode: response.statusCode,
    body: response.data,
    contentType: "application/csv",
  };
};
