var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://hattfan:Neroxrox5(@ds227740.mlab.com:27740/datatables";
var json = require('./zips.js');

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  console.log(json)
  db.close();
});

