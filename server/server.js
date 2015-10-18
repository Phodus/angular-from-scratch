var express = require('express');

var server = express();
server.use(express.static(__dirname + '/../src'));

var port = 8801;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});
