const express = require('express')
const app = express()
const tasks = require('./routes/tasks.js')

//middlesware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/api/v1/tasks',tasks)

app.get('/',(req,res)=> {
    res.status(200).send("Hello , Welcome to the home route")
})
port = 3000
app.listen(port, () => console.log('server is running on localhost:3000'))