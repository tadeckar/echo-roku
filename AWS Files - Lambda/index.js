var APP_ID = "amzn1.ask.skill.f88e1389-94e8-43b5-8d65-a7b110a25d29"; //replace this with your app ID to make use of APP_ID verification

var AlexaSkill = require("./AlexaSkill");
var serverinfo = require("./serverinfo");
var http = require("http");

if (serverinfo.host == "127.0.0.1") {
    throw "Default hostname found, edit your serverinfo.js file to include your server's external IP address";
}

var AlexaRoku = function () {
    AlexaSkill.call(this, APP_ID);
};

var roomMap = {
    'amzn1.ask.device.AHT2EBQPJ3ROPFTRY2D3MFFXQAILPWNYHWHECFOJQNCTRJNTTPDO2RUER54OD345Q36JA3OSDPARZSOTQBVDM4HOFLHDBGCMQJCSFHFMLDXGAS4BHW75CDLHRI7V55ODQ3MKU4ZMAP7XLSIQFDQYQUDCFYHQ': 'amzn1.ask.device.AHT2EBQPJ3ROPFTRY2D3MFFXQAILVC2BRNTP7P26OEWL2E374DBR4ABSGAXCIVSXWRNQDNBG5TJ5ZWESDDVNQKXI47YRJHG5GMPASPQ6BLT2GGAYVVPGVSRXWXJC6CBAVFOUL55MRS2AFK5A6DHGBY5GOXCA',
    'test2': 'bedroom'
};

AlexaRoku.prototype = Object.create(AlexaSkill.prototype);
AlexaRoku.prototype.constructor = AlexaRoku;

function sendCommand(path,body,deviceId,callback) {
    var opt = {
        host:serverinfo.host,
        port:serverinfo.port,
        path: path + '?room=' + roomMap[deviceId],
        method: 'POST',
    };

    var req = http.request(opt, function(res) {
        callback();
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    if (body) req.write(body);
    req.end();
}

AlexaRoku.prototype.intentHandlers = {
    Home: function (intent, session, response) {
        sendCommand("/roku/home",null,session.fromDevice,function() {
            response.tellWithCard("Going Home");
        });
    },
    Amazon: function (intent, session, response) {
        sendCommand("/roku/amazon",null,session.fromDevice,function() {
            response.tellWithCard("Launching Amazon");
        });
    },
    Pandora: function (intent, session, response) {
        sendCommand("/roku/pandora",null,session.fromDevice,function() {
            response.tellWithCard("Launching Pandora");
        });
    },
    Hulu: function (intent, session, response) {
        sendCommand("/roku/hulu",null,session.fromDevice,function() {
            response.tellWithCard("Launching Hulu");
        });
    },
    Captionson: function (intent, session, response) {
        sendCommand("/roku/captionson",null,function() {
            response.tellWithCard("Turning On Captions");
        });
    },
    Captionsoff: function (intent, session, response) {
        sendCommand("/roku/captionsoff",null,session.fromDevice,function() {
            response.tellWithCard("Turning Off Captions");
        });
    },
    Select: function (intent, session, response) {
        sendCommand("/roku/select",null,session.fromDevice,function() {
            response.tellWithCard("Ok");
        });
    },
    Back: function (intent, session, response) {
        sendCommand("/roku/back",null,session.fromDevice,function() {
            response.tellWithCard("Going Back");
        });
    },
    TV: function (intent, session, response) {
        sendCommand("/roku/tv",null,function() {
            response.tellWithCard("TV");
        });
    },
    Plex: function (intent, session, response) {
        sendCommand("/roku/plex",null,session.fromDevice,function() {
            response.tellWithCard("Launching Plex");
        });
    },
    Netflix: function (intent, session, response) {
        sendCommand("/roku/netflix",null,session.fromDevice,function() {
            response.tellWithCard("Launching Netflix");
        });
    },
    HBO: function (intent, session, response) {
        sendCommand("/roku/hbo",null,session.fromDevice,function() {
            response.tellWithCard("Launching HBO");
        });
    },
    YouTube: function (intent, session, response) {
        sendCommand("/roku/youtube",null,session.fromDevice,function() {
            response.tellWithCard("Launching YouTube");
        });

    },
    FX: function (intent, session, response) {
        sendCommand("/roku/fx",null,session.fromDevice,function() {
            response.tellWithCard("Launching FX");
        });

    },
    FourK: function (intent, session, response) {
        sendCommand("/roku/fourk",null,session.fromDevice,function() {
            response.tellWithCard("Launching Four K");
        });

    },
    Rewind: function (intent, session, response) {
        sendCommand("/roku/rewind",null,session.fromDevice,function() {
            response.tellWithCard("Rewinding");
        });

    },
    Fastforward: function (intent, session, response) {
        sendCommand("/roku/fastforward",null,session.fromDevice,function() {
            response.tellWithCard("Fast forwarding");
        });

    },
    Instantreplay: function (intent, session, response) {
        sendCommand("/roku/instantreplay",null,session.fromDevice,function() {
            response.tellWithCard("Instant Replay");
        });

    },
    Up: function (intent, session, response) {
        sendCommand("/roku/up",null,session.fromDevice,function() {
            response.tellWithCard("Up");
        });

    },
    Uptwo: function (intent, session, response) {
        sendCommand("/roku/uptwo",null,session.fromDevice,function() {
            response.tellWithCard("Up Two");
        });

    },
    Upthree: function (intent, session, response) {
        sendCommand("/roku/upthree",null,session.fromDevice,function() {
            response.tellWithCard("Up Three");
        });

    },
    Upfour: function (intent, session, response) {
        sendCommand("/roku/upfour",null,session.fromDevice,function() {
            response.tellWithCard("Up Four");
        });

    },
    Upfive: function (intent, session, response) {
        sendCommand("/roku/upfive",null,session.fromDevice,function() {
            response.tellWithCard("Up five");
        });

    },
    Down: function (intent, session, response) {
        sendCommand("/roku/down",null,session.fromDevice,function() {
            response.tellWithCard("Down");
        });

    },
    Downtwo: function (intent, session, response) {
        sendCommand("/roku/downtwo",null,session.fromDevice,function() {
            response.tellWithCard("Down Two");
        });

    },
    Downthree: function (intent, session, response) {
        sendCommand("/roku/downthree",null,session.fromDevice,function() {
            response.tellWithCard("Down Three");
        });

    },
    Downfour: function (intent, session, response) {
        sendCommand("/roku/downfour",null,session.fromDevice,function() {
            response.tellWithCard("Down Four");
        });

    },
    Downfive: function (intent, session, response) {
        sendCommand("/roku/downfive",null,session.fromDevice,function() {
            response.tellWithCard("Down Five");
        });

    },
    Power: function (intent, session, response) {
        sendCommand("/roku/power",null,session.fromDevice,function() {
            response.tellWithCard("Power");
        });

    },
    Left: function (intent, session, response) {
        sendCommand("/roku/left",null,session.fromDevice,function() {
            response.tellWithCard("Left");
        });

    }, 
    Lefttwo: function (intent, session, response) {
        sendCommand("/roku/lefttwo",null,session.fromDevice,function() {
            response.tellWithCard("Left Two");
        });

    },
    Leftthree: function (intent, session, response) {
        sendCommand("/roku/leftthree",null,session.fromDevice,function() {
            response.tellWithCard("Left Three");
        });

    },
    Leftfour: function (intent, session, response) {
        sendCommand("/roku/leftfour",null,session.fromDevice,function() {
            response.tellWithCard("Left Four");
        });

    },
    Leftfive: function (intent, session, response) {
        sendCommand("/roku/leftfive",null,session.fromDevice,function() {
            response.tellWithCard("Left Five");
        });

    },
    Right: function (intent, session, response) {
        sendCommand("/roku/right",null,session.fromDevice,function() {
            response.tellWithCard("Right");
        });

    },   
    Righttwo: function (intent, session, response) {
        sendCommand("/roku/righttwo",null,session.fromDevice,function() {
            response.tellWithCard("Right Two");
        });

    },
    Rightthree: function (intent, session, response) {
        sendCommand("/roku/rightthree",null,session.fromDevice,function() {
            response.tellWithCard("Right Three");
        });

    },
    Rightfour: function (intent, session, response) {
        sendCommand("/roku/rightfour",null,session.fromDevice,function() {
            response.tellWithCard("Right Four");
        });

    },
    Rightfive: function (intent, session, response) {
        sendCommand("/roku/rightfive",null,session.fromDevice,function() {
            response.tellWithCard("Right Five");
        });

    },
    Type: function (intent, session, response) {
        sendCommand("/roku/type",intent.slots.Text.value,session.fromDevice,function() {
            response.tellWithCard("Typing text: "+intent.slots.Text.value,"Roku","Typing text: "+intent.slots.Text.value);
        });
    },
    PlayPause: function (intent, session, response) {
        sendCommand("/roku/playpause",null,session.fromDevice,function() {
            response.tell("Ok");
        });
    },
    Playlastyoutube: function (intent, session, response) {
        sendCommand("/roku/playlastyoutube",null,session.fromDevice,function() {
            response.tellWithCard("Playing Last Search on YouTube");
        });

    },
    SearchRoku: function (intent, session, response) {
        sendCommand("/roku/searchroku",intent.slots.Text.value,session.fromDevice,function() {
            response.tellWithCard("Playing: "+intent.slots.Text.value,"Roku","Playing: "+intent.slots.Text.value);
        });
    },
    Search: function (intent, session, response) {
        sendCommand("/roku/search",intent.slots.Text.value,session.fromDevice,function() {
            response.tellWithCard("Typing: "+intent.slots.Text.value,"Roku","Playing: "+intent.slots.Text.value);
        });
    },
    SearchPlex: function (intent, session, response) {
        sendCommand("/roku/searchplex",intent.slots.Text.value,session.fromDevice,function() {
            response.tellWithCard("Playing: "+intent.slots.Text.value,"Roku","Playing: "+intent.slots.Text.value);
        });
    },
    HelpIntent: function (intent, session, response) {
        response.tell("No help available at this time.");
    }
};

exports.handler = function (event, context) {
    var roku = new AlexaRoku();
    console.log(event.context.System.device.deviceId);
    roku.execute(event, context);
};
