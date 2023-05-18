const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://akramovsardor93:dpse5wJhF2aIq1tD@cluster0.k40qhfh.mongodb.net/Reja";

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) console.log("Error on connection MongoDB");
    else {
        console.log("Success to connect MongoDB");

        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 4000;
        server.listen(PORT, function () {
            console.log(`The server is running successfully on port: ${PORT}, 
            http://localhost:${PORT}`);
        });

    }
});
