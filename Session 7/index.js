const express = require("express");
const lulu = express();

const port = 4000;

// Middlewares
lulu.use(express.json());
lulu.use(express.urlencoded({extendedL:true}));

// REQUESTS
// GET METHOD
lulu.get("/", (req, res) => {
    res.send("Hello World!");
})

let users = [];

lulu.get("/hello", (req, res) => {
    res.send("Hello from /hello endpoint.");
})

lulu.post("/hello", (req, res) => {
    res.send(`Hello ${req.body.firstName} ${req.body.lastName}!`);
})

lulu.post("/register", (req, res) => {
    if(req.body.username !== "" && req.body.password !== ""){
        users.push(req.body);
        res.send(`User ${req.body.username} is now registered!`);
    }else{
        res.send("Please enter correct username or password!");
    }
})

lulu.delete("/delete-user", (req, res) => {
    if(users.length > 0){
        users.pop();
        res.send("A user was deleted");
    }else{
        res.send("There is no registered user.");
    }
})

lulu.get("/get-users", (req, res) => {
    if(users.length > 0){
        res.send({users});
    }else{
        res.send("There is no registered user.");
    }
})

lulu.listen(port, () => console.log("Server is running at port number " + port));