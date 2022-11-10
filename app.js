const express = require('express')
const app = express()
const tasks = require('./routes/tasks.js')
const connect = require('./db/connect.js')
const dotenv = require('dotenv')
const NotFound = require('./middleware/notfound.js')
const errorware = require('./middleware/error-handler.js')

//dotenv config
dotenv.config()
//middlesware
app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/api/v1/tasks',tasks)
app.use(NotFound)
app.use(errorware)

port = process.env.PORT || 3001

const start = async () => {
    try {
        await connect()
        app.listen(port, () => console.log(`server is running on http://localhost:${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()