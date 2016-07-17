var port = 2712;

var name = 'Blastway';
var version = '0.0.1';
var verNick = 'Potato';

console.log(name+' server version '+version+' ['+verNick+']');

var debug = true;

var express = require('express')
  , app = express(app)
  , server = require('http').createServer(app);
var Eureca = require('eureca.io');
var ExpressPeerServer = require('peer').ExpressPeerServer;

var eurecaServer = new Eureca.Server({allow:['setID', 'updtPos', 'spawnEntity', 'killEntity']});
eurecaServer.attach(server);

app.get('/',function(req, res, next) {
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));

var peerJSoptions = {
    debug: true
}

app.use('/peerjs', ExpressPeerServer(server, peerJSoptions));
 
//functions under "exports" namespace will be exposed to client side
var connections = {};

eurecaServer.onConnect(function (connection) {
   console.log('New client ', connection.id);
   connections[connection.id] = {nick:null, client:eurecaServer.getClient(connection.id)};
   console.log('TEST: '+connections[0]);
   //connection.client.setID(connection.id);
});

eurecaServer.onDisconnect(function (connection) {    
    console.log('Client quit', connection.id);
    delete connections[connection.id];
});

/*
eurecaServer.export.setNick = function(connID, nick) {
	console.log('TEST: '+connections[connID]);
}
*/
server.listen(port);
console.log('Server listening at port: '+port);