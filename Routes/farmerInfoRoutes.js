var express=require('express');

var routes= function(farmerInfo){

    farmerInfoRouter=express.Router();
    
    farmerInfoRouter.route("/")
        .post(function(req,res){
            var newFarmerInfo=new farmerInfo(req.body);
    
            newFarmerInfo.save();
            
            res.status(201).send(newFarmerInfo);
        })
        .get(function(req,res){
            
            farmerInfo.find(function(err,infos){
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.json(infos);
                }
            });
        });
    
    
        farmerInfoRouter.route("/:farmerId")
        .get(function(req,res){
            farmerInfo.findById(req.params.farmerId, function(err,searchedFarmer){
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.json(searchedFarmer);
                }
            });
        });
    
    return farmerInfoRouter;
};

module.exports = routes;