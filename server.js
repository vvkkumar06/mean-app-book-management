const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const api = require('./server/routes/api');
const PORT = process.env.PORT || 3000;



//middlewares
app.use(express.static(path.join(__dirname,'dist')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api', api);


app.get('*', function(req,res){
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

app.listen(PORT, function(err){
    if(err){
            console.log("Error running server: "+err);
    }
    else{
        console.log("Server started on localhost on " +PORT);
    }
});




