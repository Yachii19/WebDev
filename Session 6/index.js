// Insert one data to MongoDB

db.users.insertOne({
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
    contact: {
        phone: "09678039221",
        email: "janedoe@ua.edu.ph"
    },
    courses: ["CSS", "JS", "PYTHON"],
    department: "none"
});

// Insert multiple records in mongoDB
db.users.insertMany([
{
    firstName: "Stephen",
    lastName: "Hawking",
    age: 76,
    contact: {
        phone: "09678039221",
        email: "stephenhawking@ua.edu.ph"
    },
    courses: ["PYHTON", "REACT", "PHP"],
    department: "none"
},
{
    firstName: "Neil",
    lastName: "Armstrong",
    age: 82,
    contact: {
        phone: "09678039221",
        email: "neilarmstrong@ua.edu.ph"
    },
    courses: ["REACT", "LARAVEL", "SASS"],
    department: "none"
}
])

// Selecting records in mongoDB
db.users.find();

// Selecting records in mongoDB with criteria
db.users.find({firstname: "Neil"});

db.users.find({department: "none", age: 82});

// Updating a record in 

db.users.insertOne({
    firstName: "Test",
    lastName: "Test",
    age: 0,
    contact: {
        phone: "09678039221",
        email: "test@ua.edu.ph"
    },
    courses: [],
    department: "none"
});

db.users.updateOne({firstName: "Test"}, {
    $set:{
        firstName: "Bill",
        lastName: "Gates",
        age: 65,
        contact: {
            phone: "09678039221",
            email: "billgates@ua.edu.ph"
        },
        courses: ["PHP", "LARAVEL", "HTML"],
        department: "Operations",
        status: "Active"
    }
})

// Update multiple records
db.users.updateMany({department: "none"},
    {
        $set: {
            department: "HR"
        }
    }
)

// find records with comparison
db.users.find({age:{$gt : 50}});
db.users.find({age:{$lt : 50}})