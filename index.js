const express = require('express');
const app = express();
const port = 8500;

app.use('/', require('./routes/index'))

app.listen(port, function(err){ 
    if(err){
        console.log(`Error in running the server ${err}`)
    }
        console.log(`Server is soo Fantastic on ${port}`)
})