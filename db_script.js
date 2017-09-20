var farmerInfoArray =[
    {
        farmerName: "Nanasaheb D",
        age: 45,
        address: "Satara",
        //Farm 
        farm: [
            //Farm info and seasonal field data

            //Farm 1 data
            {
                farmName: "Farm 1 - Near highway, Satara",
                GeoLocation: 0,
                //season 
                rainy:[ 
                    {
                        fieldName: "Field 1 - During Rainy",
                        cropName: "sugarcane",
                        polygonData: 0
                    },
                    {
                        fieldName: "Field 2 - During Rainy",
                        cropName: "tur",
                        polygonData: 0
                    }
                ],
                winter:[ 
                    {
                        fieldName: "Field 1 - During Winter",
                        cropName: "Rice",
                        polygonData: 0
                    },
                    {
                        fieldName: "Field 2 - During Winter",
                        cropName: "Cotton",
                        polygonData: 0
                    },
                    {
                        fieldName: "Field 3 - During Winter",
                        cropName: "moong",
                        polygonData: 0
                    }
                ],
                summer:[ 
                    {
                        fieldName: "Field 1 - During Summer",
                        cropName: "sugarcane",
                        polygonData: 0
                    },
                    {
                        fieldName: "Field 2 - During Summer",
                        cropName: "tur",
                        polygonData: 0
                    }
                ]
            },

            //farm2 data starts here
            {
                farmName: "Farm 2 - Near well, Satara",
                GeoLocation: 0,
                //seasonal data
                rainy:[ 
                    {
                        fieldName: "Field 1 - During Rainy",
                        cropName: "Bajra",
                        polygonData: 0
                    },
                    {
                        fieldName: "Field 2 - During Rainy",
                        cropName: "Jowar",
                        polygonData: 0
                    },
                    {
                        fieldName: "Field 3 - During Rainy",
                        cropName: "Turmeric",
                        polygonData: 0
                    }
                ],
                winter:[ 
                    {
                        fieldName: "Field 1 - During Winter",
                        cropName: "Wheat",
                        polygonData: 0
                    },
                    {
                        fieldName: "Field 2 - During Winter",
                        cropName: "Peas",
                        polygonData: 0
                    }
                ],
                summer:[ 
                    {
                        fieldName: "Field 1 - During Summer",
                        cropName: "Watermelon",
                        polygonData: 0
                    },
                    {
                        fieldName: "Field 2 - During Summer",
                        cropName: "Pumpkin",
                        polygonData: 0
                    }
                ]
            }
        ]
    },

    //farmer 2 data
    {
        farmerName: "Kishor Kulkarni",
        age: 39,
        address: "Nagpur",
        //Farm 
        farm: [
            //Farm info and seasonal field data

            //Farm 1 data
            {
                farmName: "Farm 1 - Near highway, Satara",
                GeoLocation: 0,
                //season 
                rainy:[ 
                    {
                        fieldName: "Field 1 - During Rainy",
                        cropName: "Maize",
                        polygonData: 0
                    },
                    {
                        fieldName: "Field 2 - During Rainy",
                        cropName: "Red Chillies",
                        polygonData: 0
                    }
                ],
                winter:[ 
                    {
                        fieldName: "Field 1 - During Winter",
                        cropName: "Barley",
                        polygonData: 0
                    },
                    {
                        fieldName: "Field 2 - During Winter",
                        cropName: "Sesame",
                        polygonData: 0
                    }
                ],
                summer:[ 
                    {
                        fieldName: "Field 1 - During Summer",
                        cropName: "Muskmelon",
                        polygonData: 0
                    }
                ]
            }// farm 1 data ends here
        ]//farm array ends here
    }//farmer 2 data ends here
]

//command to add data inside mongo db
db.FarmerInfoCollection.insert(farmerInfoArray);