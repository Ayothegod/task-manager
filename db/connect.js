const mongoose = require('mongoose')
// const dotenv = require('dotenv')
// dotenv.config({path:'../env'})

// const connstring = "mongodb+srv://tasks:tasks1234@tasks.xpzvj28.mongodb.net/taskentry?retryWrites=true&w=majority"

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to the database");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect
// mongoose.connect(connstring)
// .then(() => console.log("connected"))
// .catch((err) => console.log(err))





