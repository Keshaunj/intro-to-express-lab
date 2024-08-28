// imported framework which is "Express"
const express = require('express')

//declearing express to us it
const app = express()

// app is express | saying for express to get /(root) route
app.get('/',(req,res)=>{
    //res=response to send
res.send('hi!')
})

app.get 


app.listen(3000,()=> {
    console.log('Port 3000 sever working')
})
