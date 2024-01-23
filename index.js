const expres = require('express')

// api expression functionality api -get -post


const bodyParser = require('body-parser')



const route = require('./route')

const app = expres()

// instance app


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

//req.body - input -parse





app.use('/', route)  

app.listen(process.env.PORT || 3000, function(){
    console.log('express app running on ' + (process.env.PORT || 3000))
})



