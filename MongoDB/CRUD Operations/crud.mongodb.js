//Create
use("CRUD_DB");

// db.createCollection("services");

// db.services.insertOne({name:"Drugs",price:2000000,decription:"Cocaine"})

// db.services.insertMany([
//     {
//       "name": "Cocaine",
//       "price": 2000000,
//       "description": "Drugs"
//     },
//     {
//       "name": "Heroin",
//       "price": 1500000,
//       "description": "Drugs"
//     },
//     {
//       "name": "Methamphetamine",
//       "price": 1200000,
//       "description": "Drugs"
//     },
//     {
//       "name": "LSD",
//       "price": 800000,
//       "description": "Drugs"
//     },
//     {
//       "name": "Ecstasy",
//       "price": 500000,
//       "description": "Drugs"
//     },
//     {
//       "name": "Marijuana",
//       "price": 200000,
//       "description": "Drugs"
//     },
//     {
//       "name": "Ketamine",
//       "price": 300000,
//       "description": "Drugs"
//     },
//     {
//       "name": "Mushrooms",
//       "price": 100000,
//       "description": "Drugs"
//     },
//     {
//       "name": "MDMA",
//       "price": 600000,
//       "description": "Drugs"
//     },
//     {
//       "name": "Hashish",
//       "price": 250000,
//       "description": "Drugs"
//     },
//     {
//       "name": "DMT",
//       "price": 450000,
//       "description": "Drugs"
//     }
//   ]
//   )


//Read
// db.services.find({name:"Drugs"})


//Update
// let desc=db.services.find({description:"Cocaine"}).description
db.services.updateOne({name:"Drugs"},{$set:{name:"Cocaine",description:"Drugs"}})
// db.services.find({description:"Cocaine"})
// db.services.find({name:"Cocaine"})

// console.log(desc);

//DELETE
// db.services.deleteOne({decription:"Cocaine"})


// db.services.insertOne({name:"Drugs",price:2000000,description:"Cocaine"})

let a=db.services.find({description:"Drugs"})
console.log(a.toArray());