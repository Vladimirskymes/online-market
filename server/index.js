require("dotenv").config()
const express = require("express");
const PORT = process.env.PORT || 4444;
const sequelize = require("./db");
const app = express();
const cors = require('cors');
const models = require("./models/models")
const router = require('./routes/index')
const errorHadler = require("./middleware/ErrorHandlingMiddleware");
const imgUpload = require("express-fileupload");
const path = require("path")



app.use(cors())
app.use(express.json())
app.use(imgUpload({}))
app.use('/api', router)
app.use(express.static(path.resolve(__dirname, "static")))


app.use(errorHadler)

const start = async () =>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`hello ${PORT}`))
    }
    catch(e){
        console.log(e)
    }
}
start()

