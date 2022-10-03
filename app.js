const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

//This is CORS Ref:https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
var corsOptions = {
    origin: "http://localhost:8000"
}
app.use(cors(corsOptions))

// 1) MiddleWare Morgan is used for debugging
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// 2) Middleware JSON is used for injecting the body attribute in the pipeline
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}))

app.use(( req, res, next) => {
    console.log('Hello from the Middleware 😂')
    next()
})



// 3) Middle Routes loading
const salesRouter = require('./routes/salesRoutes')
const customerRouter = require('./routes/customerRoutes')
app.use('/api/v1/sales', salesRouter)
app.use('/api/v1/customers', customerRouter)

module.exports = app