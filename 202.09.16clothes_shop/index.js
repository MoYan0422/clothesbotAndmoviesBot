'use strict';
const
    config = require('config'),
    exrpess = require('express'),
    mssql = require('mssql');

var app = exrpess();
var port = process.env.PORT || process.env.port || 5000;
app.set('port', port);
app.use(exrpess.json());
app.listen(app.get('port'), function () {
    console.log('[app.listen] Node app is running on port', app.get('port'));
});

module.exports = app;

var config_db = {
    user: config.get("user"),
    password: config.get("password"),
    database: "ec-bot",
    server: '127.0.0.1',
    port: 1433,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};
mssql.connect(config_db, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("sql ok")
});

app.post('/webhook', function (req, res) {
    //拿到電影名稱
    let data = req.body;
    let queryCategory = data.queryResult.parameters.product_category;
    console.log("[queryCategory] ", queryCategory);
    //Request TMDB
    let queryFilter = "";
    if (queryCategory == "熱門") {
        queryFilter = "IsHot = 1"
    } else {
        queryFilter = `Category = '${queryCategory}'`;
    }

    mssql.query("SELECT * FROM productdb where " + queryFilter, function (err, body, fields) {
        if (err) {
            throw err;
        } else {
            console.log("Selected: " + body.recordset.length + ' row(s)');
            sendCards(body, res);
        }

    });
});
function sendCards(body, res) {
    console.log("[sendCards] in");
    console.log(JSON.stringify(body))
    var thisFulfillmentMessages = [];
    for (let i = 0; i < body.recordset.length; i++) {
        var thisObject = {};
        thisObject.card = {};
        thisObject.card.title = body.recordset[i].Name;
        thisObject.card.subtitle = body.recordset[i].Category;
        thisObject.card.imageUri = body.recordset[i].Photo;
        thisObject.card.buttons = [{
            text: "看大圖",
            postback: body.recordset[i].Photo
        }]

        thisFulfillmentMessages.push(thisObject);
    }
    res.json({ fulfillmentMessages: thisFulfillmentMessages });
}