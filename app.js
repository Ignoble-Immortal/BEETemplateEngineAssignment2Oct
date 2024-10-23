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

// const express = require("express");
// const app = express();
// const path = require("path");
// const PORT = 8080;
// app.set('view engine', 'ejs');
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// let tasks = [];
// app.get("/", (req, res) => {
//     let name = "Sam";
//     let place = "Jakhu";
//     let currentHour = new Date().getHours();
//     let greeting;

//     if (currentHour < 12) {
//         greeting = "Good Morning";
//     } else if (currentHour < 18) {
//         greeting = "Good Afternoon";
//     } else {
//         greeting = "Good Evening";
//     }
//     res.render("index", { name, destination: place, greeting, tasks });
// });
// app.post("/add-task", (req, res) => {
//     const newTask = req.body.task;
//     if (newTask) {
//         tasks.push(newTask);
//     }
//     res.redirect("/todo");
// });
// app.post("/edit-task/:id", (req, res) => {
//     const taskId = req.params.id;
//     const updatedTask = req.body.updatedTask;
//     if (updatedTask && tasks[taskId]) {
//         tasks[taskId] = updatedTask;
//     }
//     res.redirect("/todo");
// });
// app.post("/delete-task/:id", (req, res) => {
//     const taskId = req.params.id;
//     tasks.splice(taskId, 1);
//     res.redirect("/todo");
// });
// app.get("/todo", (req, res) => {
//     let name = "Sam";
//     let place = "Jakhu";
//     let currentHour = new Date().getHours();
//     let greeting;

//     if (currentHour < 12) {
//         greeting = "Good Morning";
//     } else if (currentHour < 18) {
//         greeting = "Good Afternoon";
//     } else {
//         greeting = "Good Evening";
//     }

//     res.render("index", { name, destination: place, greeting, tasks });
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
app.use(express.urlencoded({ extended: true }));
let tasks = [];
let products = [
    { name: 'asd', price: 10 },
    { name: 'wasd', price: 20 },
    { name: 'qwerty', price: 30 },
];
app.get("/", (req, res) => {
    let name = "Sean";
    let place = "Jakhu";
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
app.post("/add-task", (req, res) => {
    const newTask = req.body.task;
    if (newTask) {
        tasks.push(newTask);
    }
    res.redirect("/");
});
app.post("/edit-task/:id", (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body.updatedTask;
    if (updatedTask && tasks[taskId]) {
        tasks[taskId] = updatedTask;
    }
    res.redirect("/");
});
app.post("/delete-task/:id", (req, res) => {
    const taskId = req.params.id;
    tasks.splice(taskId, 1);
    res.redirect("/");
});
// app.get("/todo", (req, res) => {
//     let name = "Sam";
//     let place = "Jakhu";
//     let currentHour = new Date().getHours();
//     let greeting;
//     if (currentHour < 12) {
//         greeting = "Good Morning";
//     } else if (currentHour < 18) {
//         greeting = "Good Afternoon";
//     } else {
//         greeting = "Good Evening";
//     }
//     res.render("index", { name, destination: place, greeting, tasks });
// });
app.get("/products", (req, res) => {
    const searchQuery = req.query.search || "";
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    res.render("products", { products: filteredProducts });
});
const users = {
    sam: { age: 25, hobby: 'Hiking' },
    jake: { age: 30, hobby: 'Reading' },
    emma: { age: 22, hobby: 'Painting' },
};
app.get("/profile/:username", (req, res) => {
    const username = req.params.username.toLowerCase(); // Get username from the URL
    const user = users[username]; // Fetch user data based on username
    
    if (user) {
        res.render("profile", { username, age: user.age, hobby: user.hobby });
    } else {
        res.status(404).send("User not found");
    }
});
app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Listening to Port ${PORT}`);
});