// console.log("hello");\

const express = require("express")
const app = express()
app.use(express.static("public"))
app.use(logger)
app.set('view engine','ejs')

app.get('/', (req, res) => {
    console.log("Here");
    // res.send("Hiii!!")
    // res.sendStatus(500)
    // res.download("package.json")
    // res.render("views/index.html")
    res.render("index")
})


const userRouter=require("./routes/users")
app.use('/users', userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl);
    next()
    
}


app.listen(3000)