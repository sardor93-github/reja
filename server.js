const http = require("http");
const mongodb = require("mongodb");

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
        let PORT = 3017;
        server.listen(PORT, function () {
            console.log(`The server is running successfully on port: ${PORT}, 
            http://localhost:${PORT}`);
        });

    }
});

//1 Kirish code

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2: Session code

//3: Views code

app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing code
app.post("/create-item", (req, res) => {
  //TODO: code with DB here 
});

app.get("/", function(req, res){
    res.render("harid");
});

app.get('/author', (req, res) => {
    res.render("author", {user: user});
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running successfully on port: ${PORT}`);
});