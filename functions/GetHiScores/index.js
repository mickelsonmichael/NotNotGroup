const axios = require("axios");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');


    const name = (req.query.name || (req.body && req.body.name));

    if (!name) {
        context.res = {
            statusCode: 400,
            body: "You must specify a name."
        };

        return;
    }

    context.log("Sending request for " + name);

    const response = await axios("https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=" + name);

    context.res = {
        statusCode: response.statusCode,
        body: response.data
    }
}
