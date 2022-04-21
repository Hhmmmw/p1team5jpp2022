// // const express = require("express")
// // const mongo = require("mongodb").MongoClient

// // const app = express()
// // const url = "mongodb://localhost:27017"

// // app.post("/trip", (req, res) => {
// //     /* */
// // })
// // app.get("/trips", (req, res) => {
// //     /* */
// // })
// // app.post("/expense", (req, res) => {
// //     /* */
// // })
// // app.get("/expenses", (req, res) => {
// //     /* */
// // })
// // //mongo
// // // const { MongoClient, ServerApiVersion } = require('mongodb');
// // // const fs = require('fs');
// // // const pemPath = 'X509-cert-6367317136346900232.pem'

// // // const publicKey = fs.readFileSync(pemPath, { encoding: "utf8" });

// // // const credentials = 'X509-cert-6367317136346900232.pem'
// // const username = encodeURIComponent('jppmongocert');
// // const clusterUrl = "mongodb+srv://clusterjpp.gsgxy.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";
// // const clientPEMFile = encodeURIComponent(publicKey);

// // // const client = new MongoClient('mongodb+srv://clusterjpp.gsgxy.mongodb.net/ec?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
// // //     sslKey: credentials,
// // //     sslCert: credentials,
// // //     serverApi: ServerApiVersion.v1
// // // });
// // // async function run() {
// // //     try {
// // //         await client.connect();
// // //         const database = client.db("ec");
// // //         const collection = database.collection("product");
// // //         const docCount = await collection.countDocuments({});
// // //         console.log(docCount);
// // //         // perform actions using client
// // //     } finally {
// // //         // Ensures that the client will close when you finish/error
// // //         await client.close();
// // //     }
// // //     // https://data.mongodb-api.com/app/data-egnyx/endpoint/data/beta
// // // }
// // // run().catch(console.dir);
// // //ognom
// // app.listen(3000, () => console.log("Server ready"))
// // // app.get('/',  (req, res)=> {res.send('hi..')})
// // // app.get('/', (req, res) => {  res.sendFile(__dirname + '/index.html')  /* Note: __dirname is the path to your current working directory. Try logging it and see what you get!   // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.*/})

// const express = require('express');
// const bodyParser= require('body-parser');
// const app = express();
// app.use(bodyParser.urlencoded({extended: true}))
// let db;
// const dbpw='uQ4JbakPy6SNZW7S'
// const dbun='jppuser'
// // const MongoClient = require('mongodb').MongoClient
// // MongoClient.connect('link-to-mongodb', (err, database) => {  // ... start the server})
// ////
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://jppuser:${dbpw}@clusterjpp.gsgxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// const dbName='ec'
// async function m (){
//     console.log('entered m()');
//     await client.connect();
//     console.log('Connected successfully to server');
//      db = client.db(dbName);
//     const collection = db.collection('user');
//     const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
//     console.log('Inserted documents =>', insertResult);
//     console.log(client.db('ec').collection('product').find())

//     return 'done.';

// }

// // client.connect(async (err,database) => {
//     // if (err) return console.log(err)

// //   const collection =  client.db("ec").collection("user");
// //   perform actions on the collection object
// //   await collection.insertOne( {"name":"jahsdfkjhasdd"})
// //   db = await database
// //   app.listen(3000, () => {
//     //   console.log('listening on 3000')
//     // })
// //   client.close();;
// // });

// // MongoClient.connect(
// //     `mongodb+srv://jppuser:${dbpw}@clusterjpp.gsgxy.mongodb.net/ec?retryWrites=true&w=majority`,
// //      (err, database) => {  
// //          if (err) return console.log(err)
// //            db = database 
// //             app.listen(3000, () => {  
// //                   console.log('listening on 3000') 
// //                  })
// //                 })
// //  ;

// ////

// // app.get('/', (req, res) => {  res.send('<form action="/quotes" method="POST">  <input type="text" placeholder="name" name="name">  <input type="text" placeholder="quote" name="quote">  <button type="submit">Submit</button></form>')})
// // // app.post('/quotes', (req, res) => {  console.log(req.body);res.send('ok')})
// // app.post('/quotes', (req, res) => {
// //     db.collection('quotes').save(req.body, (err, result) => {
// //         if (err) return console.log(err)
// //         console.log('saved to database')  
// //         res.redirect('/')  
// //     })
// // })





// app.listen(3000, function() {  
//     console.log('listening on 3000');
// m().then(console.log) 
//  .catch(console.error)
//  .finally(() => client.close());
// })
// // http.get("http://example.com", {
// //     lookup: myCustomLookupFunction
// // });




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.vj9dy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
async function run() {
    try {
      await client.connect();
      const database = client.db("insertDB");
      const haiku = database.collection("haiku");
      // create a document to insert
      const doc = {
        title: "Record of a Shriveled Datum",
        content: "No bytes, no problem. Just insert a document, in MongoDB",
      }
      const result = await haiku.insertOne(doc);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);

  // create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
    run().catch(console.dir);

  res.send("<h1>Hello World!</h1>")
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));