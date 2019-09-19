let express = require('express');
let cors = require('cors');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
const https = require('https')

require('dotenv').config();

let PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/', express.static(__dirname + '/www'));
app.get('/docuData', docuData);

server.listen(PORT, () => console.log(`Express server listening on ${ PORT }`));

function docuData(req, res){
console.log(docuData);
}