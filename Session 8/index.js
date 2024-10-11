const express = require("express");
const mongoose = require("mongoose");
const server = express();
const port = 4000;

// Mongoose setup and connection
mongoose.connect("mongodb+srv://admin:admin@ua-database.czgqc.mongodb.net/practice?retryWrites=true&w=majority&appName=UA-DATABASE");

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("We're connected to mongoDB"));

// SCHEMA
const taskSchema = new mongoose.Schema({
    name: String,
    status: {
        type: String,
        default: "pending"
    }
});

// MODEL
const Task = mongoose.model("Task", taskSchema);

// Middlewares
server.use(express.json());
server.use(express.urlencoded({extended:true}));

// Operations
server.post("/tasks", (req, res) => {
    Task.find({name: req.body.name}).then((result, err) => {
        if(result !== null && result.name == req.body.name){
            return res.send({
                code: 0,
                message: "Duplicate Found!",
                data: result
            });
        }else{
            let newTask = new Task({
                name: req.body.name
            })

            newTask.save().then((savedTask, saveErr) => {
                if(saveErr){
                    return console.error(saveErr);
                }else{
                    return res.send({
                        code: 200,
                        message: "Task Created!",
                        data: savedTask
                    });
                }
            })
        }
    })
})

server.get("/tasks", (req, res) => {
    Task.find({}).then((result, err) => {
        if(err){
            return res.send("ERROR!")
        }else{
            return res.send({
                code: 200,
                message: "LIST OF ALL TASKS",
                result: result
            });
        }
    })
})

server.listen(port, () => console.log(`Server is now running at port number ${port}`));