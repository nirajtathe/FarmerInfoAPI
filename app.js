var express=require('express'),
mongoose=require('mongoose'),
bodyParser=require('body-parser');

var db=mongoose.connect('mongodb://localhost/farmerInfoAPI'); 
var farmerInfo= require('./models/farmerInfoModel');

var app=express();
var port=process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

farmerInfoRouter=require('./Routes/farmerInfoRoutes.js')(farmerInfo);

app.use("/api/farmerInfo",farmerInfoRouter);

app.get("/",function(req,res){
    res.send("<h2>Hi,<br> Welcome to our Farmer Information API</h2>");
});

app.listen(port, function(){
console.log("Server started on port : "+port);
});