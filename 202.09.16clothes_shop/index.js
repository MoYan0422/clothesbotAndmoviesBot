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
function sendCardsSingleCard(body, res) {
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
function sendCards(body, res) {
    console.log('[sendCards] In');
    var thisFulfillmentMessages = [];
    // https://developers.line.biz/en/reference/messaging-api/#location-message
    var stickerObject = {
        payload: {
            line:
            {
                type: "sticker",
                packageId: "6359",
                stickerId: "11069849"
            }


        }
    }
    thisFulfillmentMessages.push(stickerObject);
    var videoObject = {
        payload: {
            line:
            {
                type: "video",
                originalContentUrl: "https://example.com/original.mp4",
                previewImageUrl: "https://example.com/preview.jpg",
                trackingId: "track-id"
            }



        }
    }

    thisFulfillmentMessages.push(videoObject);

    var mapObject = {
        payload: {
            line:
            {
                "type": "location",
                "title": "my location",
                "address": "1-6-1 Yotsuya, Shinjuku-ku, Tokyo, 160-0004, Japan",
                "latitude": 35.687574,
                "longitude": 139.72922
            }


        }
    }

    thisFulfillmentMessages.push(mapObject);

    var mapObject = {
        payload: {
            line:
            {
                "type": "flex",
                "altText": "this is a flex message",
                "contents": {
                    "type": "bubble",
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "hello"
                            },
                            {
                                "type": "text",
                                "text": "world"
                            }
                        ]
                    }
                }
            }


        }
    }

    thisFulfillmentMessages.push(mapObject);

    var thisLineObject = {
        payload: {
            line: {
                type: "template",
                altText: "this is a carousel template",
                template: {
                    type: "carousel",
                    columns: []
                }
            }
        }
    };

    for (var x = 0; x < body.recordset.length; x++) {
        var thisObject = {};
        thisObject.thumbnailImageUrl = body.recordset[x].Photo;
        thisObject.imageBackgroundColor = "#FFFFFF";
        thisObject.title = body.recordset[x].Name;
        thisObject.text = body.recordset[x].Category;
        thisObject.defaultAction = {};
        thisObject.defaultAction.type = "uri";
        thisObject.defaultAction.label = "view detail";
        thisObject.defaultAction.uri = body.recordset[x].Photo;
        thisObject.actions = [];
        var thisActionObject = {};
        thisActionObject.type = "uri";
        thisActionObject.label = "view detail";
        thisActionObject.uri = body.recordset[x].Photo;
        thisObject.actions.push(thisActionObject);
        thisLineObject.payload.line.template.columns.push(thisObject);
    }

    thisFulfillmentMessages.push(thisLineObject);
    var responseObject = {
        fulfillmentMessages: thisFulfillmentMessages
    };
    res.json(responseObject);
}