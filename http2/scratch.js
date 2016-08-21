var PORT = 8667,
    config = require('./config'),
    socketioServer = require('socket.io'),
    app = express(),
    https = require('http2'),
    cors = require('cors');

app.use(cors(function(req, callback){
    var corsOptions = { origin: false };
    if (/^https:\/\/mlpvc-rr\.lc/.test(req.header('Origin')))
        corsOptions.origin = true;
    callback(null, corsOptions);
}));

app.get('/', function (req, res) {
  res.sendStatus(403);
});

var server = https.createServer({
    cert: fs.readFileSync(config.SSL_CERT),
    key: fs.readFileSync(config.SSL_KEY),
}, app);
server.listen(PORT);
var io = socketioServer.listen(server);
// ...
Browser connection code:

var conn = io('https://ws.'+location.hostname+':8667/', { reconnectionDelay: 5000 });
conn.on('connect', function(){
    console.log('[WS] Connected');
});
conn.on('disconnect',function(){
    console.log('[WS] Disconnected');
});