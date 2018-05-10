var host = "127.0.0.1"
var port = 8000
var express = require("express")

var app = express()
app.use("/", express.static(__dirname + "/dist"))
app.listen(port, host)

console.log("Running server at http://" + host + ":" + port + "/")
