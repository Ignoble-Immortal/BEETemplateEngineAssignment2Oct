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
const express = require("express");
const app = express();
const path = require("path");
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(express.json());

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
    res.render("index", { name, destination: place, greeting });
});

app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Listening to Port ${PORT}`);
});
