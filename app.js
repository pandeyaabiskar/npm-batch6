const express = require('express');
const PORT = 4000;

//Create a server
const app = express();

//Adding route to our server
app.get("/", (req, res) => {
    res.status(200).send("Welcome to our app")
})

//Prompts to download the given file to the user
app.get("/download", (req, res) => {
    res.download("./package.json")
})

app.get("/json", (req, res) => {
    const laptopSpecs = {
        name: "Acer",
        size: 15,
        ram: 8,
        price: 95000,
        ssd: 256
    }

    res.json(laptopSpecs)
})

//Start the above server
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})

console.log("Hello")

console.log("Changes for 2nd commit")
console.log("Changes for 3rd commit")

console.log("New changes to main after branching")