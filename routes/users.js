const express = require("express")
const router=express.Router()



router.get('/', (req, res) => {
    res.send("users list")
})

router.get('/new', (req, res) => {
    res.send("users new form")
})





router.post('/', (req, res) => {
    res.send("Create user")
})

// It works excatly same as below code
// router.route('/:userId').get((req, res) => {
//     res.send(`Get user with id ${req.params.userId}`)
// }).put((req, res) => {
//     res.send(`Update user with id ${req.params.userId}`)
// }).delete((req, res) => {
//     res.send(`Delete user with id ${req.params.userId}`)
// })

router.get('/:userId', (req, res) => {
    console.log(req.users);
    res.send(`Get user with id ${req.params.userId}`)
})
router.put('/:userId', (req, res) => {
    res.send(`Update user with id ${req.params.userId}`)
})
router.delete('/:userId', (req, res) => {
    res.send(`Delete user with id ${req.params.userId}`)
})

const users = [{ name: "Krishna" }, { name: "yash" }]
router.param("userId", (req, res, next, userId) => {
    // console.log(userid);
    req.users=users[userId]
    next()
})


module.exports=router