const WebSocket = require('ws');
const log = console.log; // eslint-disable-line

// Mailsac uses secure web sockets. This is the web socket API base endpoint.
const BASE_URL = 'wss://sock.mailsac.com/incoming-messages';

// In this example, we pull the username and API key from environment variables.
// You could also hardcode the credentials, or use a package like node-config for managing them.
const username = process.env.MAILSAC_USER;
const apiKey = process.env.MAILSAC_KEY;
// List the addresses you want to receive messages for.
// You MUST have web socket forwarding turned on for the addresses!
const listenAddresses = process.env.ADDRESSES;

const urlParams = '?_id=' + username + '&key=' +apiKey+ '&addresses=' + listenAddresses;

log('attempting to open web socket to', BASE_URL + urlParams);
const ws = new WebSocket(BASE_URL + urlParams);

ws.on('open', function () {
  log('web socket opened');
});

ws.on('error', function (err) {
  log('connection error', err);
});

ws.on('message', function (data) {
  log(data);
});
