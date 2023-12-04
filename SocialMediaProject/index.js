const express = require("express"); //this line of code is essential and makes it easier for us

let app = express();

let path = require("path");

const port = process.env.PORT || 3000;

app.set("view engine", "ejs"); 

app.use(express.urlencoded({extended:true}));


const knex = require("knex")({
    client: "pg",
    connection: {
        host: "localhost",
        user: "postgres",
        password: "Blackdiamond1251*",
        database: "bucket_list",
        port: 5432
    }
});