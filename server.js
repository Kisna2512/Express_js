// console.log("hello");\

const express = require("express")
const app = express()

app.set('view engine','ejs')

app.get('/', (req, res) => {
    console.log("Here");
    // res.send("Hiii!!")
    // res.sendStatus(500)
    // res.download("package.json")
    // res.render("views/index.html")
    res.render("index")
})


app.get('/users', (req, res) => {
    res.send("users list")
})

app.get('/users/new', (req, res) => {
    res.send("users new form")
})




app.listen(3000)