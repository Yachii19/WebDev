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
// Create a task
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

// Get all task
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
        };
    });
});

// Get specific task using its ID
// :taskID -> wild card
server.get("/tasks/search/:taskId", (req, res) => {
    Task.findById(req.params.taskId).then((result, err) => {
        if(err){
            return res.send({
                message: "There is a server error."
            });
        }else{
            if(result == null){
                res.send({
                    message: "Cannot find task with the given ID."
                });
            }else{
                res.send({
                    message: "ONE TASK RETRIEVED!",
                    result: result
                });
            };      
        };
    });
});

server.delete("/tasks/delete/:tasksId", (req, res) => {
    Task.findByIdAndDelete(req.params.tasksId).then((result, err) => {
        if(err){
            return res.send({
                message: "There is a server error."
            });
        }else{
            if(result == null){
                res.send({
                    message: "Cannot find task with the given ID."
                });
            }else{
                res.send({
                    message: "ONE TASK DELETED",
                    result: result
                });
            };
        };
    });
});

server.get("/tasks/pending", (req, res) => {
    Task.find({status: "pending"}).then((result, err) => {
        if(err){
            return res.send({
                message: "There is a server error."
            });
        }else{
            if(result.length > 0){
                res.send({
                    code: 200,
                    message: "LIST OF ALL PENDING TASK",
                    result: result
                });
            }else{
                res.send({
                    message: "There are no pending task"
                })
            }
        };
    });
});

server.get("/tasks/completed", (req, res) => {
    Task.find({status: "completed"}).then((result, err) => {
        if(err){
            return res.send({
                message: "There is a server error."
            });
        }else{
            if(result.length > 0){
                res.send({
                    code: 200,
                    message: "LIST OF ALL COMPLETED TASK",
                    result: result
                });
            }else{
                res.send({
                    message: "There are no completed task"
                })
            }
        };
    });
});


server.listen(port, () => console.log(`Server is now running at port number ${port}`));