// const express = require("express");
// const app = express();
// const path = require("path");
// const PORT = 8080;
// app.set('view engine', 'ejs');
// app.use(express.json());
// filepath = path.join(__dirname, "/views/index.ejs");
// app.get("/", (req, res)=>{
//     let name = "Sam";
//     let place="Jakhu"
//     res.render(filepath, {name, destination:place});
// })
// app.listen(PORT, (err)=>{
//     if(err) console.log(err);
//     else console.log(`Listening to Port ${PORT}`);
// })

// const express = require("express");
// const app = express();
// const path = require("path");
// const PORT = 8080;
// app.set('view engine', 'ejs');
// app.use(express.json());
// app.get("/", (req, res) => {
//     let name = "Sam";
//     let place = "Jakhu";
//     // Get current hour to generate greeting
//     let currentHour = new Date().getHours();
//     let greeting;
//     if (currentHour < 12) {
//         greeting = "Good Morning";
//     } else if (currentHour < 18) {
//         greeting = "Good Afternoon";
//     } else {
//         greeting = "Good Evening";
//     }
//     // Render the EJS template with name, destination, and greeting
//     res.render("index", { name, destination: place, greeting });
// });
// app.listen(PORT, (err) => {
//     if (err) console.log(err);
//     else console.log(`Listening to Port ${PORT}`);
// });

const express = require("express");
const app = express();
const path = require("path");
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded form data

let tasks = []; // Array to store tasks

app.get("/", (req, res) => {
    let name = "Sam";
    let place = "Jakhu";

    // Get current hour to generate greeting
    let currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    // Render the EJS template with name, destination, and greeting
    res.render("index", { name, destination: place, greeting, tasks });
});

// Route to handle adding a new task
app.post("/add-task", (req, res) => {
    const newTask = req.body.task;
    if (newTask) {
        tasks.push(newTask); // Add new task to array
    }
    res.redirect("/todo");
});

// Route to handle editing a task
app.post("/edit-task/:id", (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body.updatedTask;
    if (updatedTask && tasks[taskId]) {
        tasks[taskId] = updatedTask; // Update the task
    }
    res.redirect("/todo");
});

// Route to handle deleting a task
app.post("/delete-task/:id", (req, res) => {
    const taskId = req.params.id;
    tasks.splice(taskId, 1); // Remove task from the array
    res.redirect("/todo");
});

// Route for displaying todo list and form
app.get("/todo", (req, res) => {
    let name = "Sam";
    let place = "Jakhu";

    // Get current hour to generate greeting
    let currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    res.render("index", { name, destination: place, greeting, tasks });
});

app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Listening to Port ${PORT}`);
});