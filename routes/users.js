const express = require("express")
const router=express.Router()



router.get('/', (req, res) => {
    res.send("users list")
})

router.get('/new', (req, res) => {
    res.send("users new form")
})



module.exports=router