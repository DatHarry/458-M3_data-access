//this line has to come first since we need to tell where is the config file
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'}) 


const app = require('./app')
const port = process.env.PORT || 6000
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
})



// Express is for building the Rest apis
// CORS provides Express middleware to enable CORS with various options.
// – create an Express app, then add body-parser (json and urlencoded) and cors middlewares using app.use() method.
// Notice that we set origin: http://localhost:6000