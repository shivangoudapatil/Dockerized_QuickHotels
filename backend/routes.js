const express = require("express"); // importing express
var myRouter = express.Router();
var mongoClient = require("mongodb").MongoClient;
const ObjectID = require('mongodb').ObjectID;
var url = "mongodb+srv://wtProject:apple@cluster0.zb2ny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoClient.connect(url, (err, db) => {
	if (err) throw err;
	var dbo = db.db("paiHotels");
	console.log("connected !!!!!");
	
     myRouter.get("/showme", (req, res) => {
		dbo
               .collection("hotelsDatabase")
               .find({}).toArray((err, result) => {
			if (err) throw err;
               res.json({allHotels : result})
		});
	});

	myRouter.post("/loginAuth", (req, res) => {
		dbo
			.collection("loginsDatabase")
			.find(req.body)
			.toArray((err, result) => {
				if (err) throw err;
				if (result.length == 0) res.json({user:{userMail:"none"},"status":0});
				else 
                    {    
                         console.log("logged in");
                         res.json({user : result[0],"status":1});
                    }
			});
	});

	myRouter.post("/signupAuth", (req, res) => {
          newUser = 
		dbo
			.collection("loginsDatabase")
			.insertOne(req.body,{new:true},(err, result) => {
				if (err) throw err;
				console.log("inserted");
                    res.json({user : req.body})
			});
	});

     myRouter.post("/query", (req, res) => {
          queryJson = req.body;
          if(queryJson.find.name == "null") delete queryJson.find.name;
          if(queryJson.find.city == "null") delete queryJson.find.city;
          if(queryJson.find.price == -1) delete queryJson.find.price;
          if(queryJson.find.rating == -1) delete queryJson.find.rating;
          if(queryJson.find.freeCancellation == -1) delete queryJson.find.freeCancellation;

          if(queryJson.sortBy.name == -1) delete queryJson.sortBy.name;
          if(queryJson.sortBy.price == -1) delete queryJson.sortBy.price;
          if(queryJson.sortBy.rating == -1) delete queryJson.sortBy.rating;

		dbo
               .collection("hotelsDatabase")
               .find( {...queryJson.find , name: { $regex : new RegExp(queryJson.find.name)}})
               .sort(queryJson.sortBy)
               .toArray((err, result) => {
			if (err) throw err;
               res.json({list : result});
		});

	});

     myRouter.post("/book", (req, res) => {
          quer = {userMail : req.body.userMail}
		dbo
			.collection("loginsDatabase")
               .findOneAndUpdate(quer,{ $set: {hotels: req.body.hotels } },function(err, result) {
				if (err) throw err;
				console.log("updated");
                    res.json({user : req.body})
			});
	});
	//db.close();
});

module.exports = {
	myRouter,
};
