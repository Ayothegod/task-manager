const express = require('express')
const app = express()
const tasks = require('./routes/tasks.js')
const connect = require('./db/connect.js')
const dotenv = require('dotenv')

//dotenv config
dotenv.config()
//middlesware
app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/api/v1/tasks',tasks)

// app.get('/route',(req,res)=> {
//     res.status(200).send("Hello , Welcome to the home route")
// })

port = process.env.PORT || 3001

const start = async () => {
    try {
        await connect()
        app.listen(port, () => console.log(`server is running on localhost:${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()