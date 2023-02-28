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

app.listen(3000)