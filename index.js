let express = require("express");

let app = express();

let path = require("path");

let port = 3000;

app.use(express.urlencoded({extended : true}));
app.set("view engine", "ejs");

//DB
const knex = require("knex")({
    client: "mysql",
    connection: {
        host:"starwars-shows-instance-1.cp2qklrumzvb.us-east-2.rds.amazonaws.com",
        user: "admin",
        password: "admin123",
        database:"starwarsdb",
        port: 3306,
    },
});



app.get("/", (req, res) => {
    knex.select().from("starwars").then(show => {
        res.render("index", {myShows : show});
    });
});




app.listen(port, () => console.log("The server has started"));