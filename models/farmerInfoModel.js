var mongoose=require('mongoose');
Schema = mongoose.Schema;

var farmerInfoModel = new mongoose.Schema({
    farmerName: {type: String},
    age: {type: Number},
    address: { type: String},
    //Farm 
    farm: [
        //Farm info and seasonal field data
        {
            farmName: {type: String},
            GeoLocation: {type:Number, default: 0},
            //season 
            rainy:[ 
                {
                    fieldName: {type: String},
                    cropName: {type: String},
                    polygonData: { type: Number,default: 0}
                }
            ],
            winter:[
                {
                    fieldName: {type: String},
                    cropName: {type: String},
                    polygonData: { type: Number,default: 0}
                }
            ],
            summer: [
                {
                    fieldName: {type: String},
                    cropName: {type: String},
                    polygonData: { type: Number,default: 0}
                }
            ]
        }
    ]
});

module.exports= mongoose.model('FarmerInfo',farmerInfoModel,'FarmerInfoCollection');