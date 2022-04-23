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




// const { MongoClient, ServerApiVersion } = require('mongodb');
// const path = require('path');

// const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.vj9dy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// async function run() {
//     try {
//       await client.connect();
//       const database = client.db("insertDB");
//       const haiku = database.collection("haiku");
//       // create a document to insert
//       const doc = {
//         title: "Record of a Shriveled Datum",
//         content: "No bytes, no problem. Just insert a document, in MongoDB",
//       }
//       const result = await haiku.insertOne(doc);
//       console.log(`A document was inserted with the _id: ${result.insertedId}`);
//     } finally {
//       await client.close();
//     }
//   }
//   run().catch(console.dir);

//   // create an express app
const express = require("express")
const { MongoClient,ObjectId } = require('mongodb')
const app = express()
const bodyParser = require('body-parser')
const _ = require('underscore');

// // use the express-static middleware
app.use(express.static("public"))
app.use(bodyParser.json());
// // define the first route
// // app.get("/", function (req, res) {
// //     run().catch(console.dir);

// //   res.send("<h1>Hello World!</h1>")
// // })
// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../fontend/build')));

// // Handle GET requests to /api route
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//   });

//   // All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
//   });

// // start the server listening for requests
app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));







// const client = new MongoClient('mongodb://localhost/');

// let db, users, brands, products, orders;
// async function run() {
//   const client = await MongoClient.connect('mongodb://localhost/', { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//   });

//   try {
//     // await client.connect();
//     db = client.db('jppTeam5p1');
//     users = db.collection("users");
//     brands = db.collection("brands");
//     products = db.collection("products");
//     orders = db.collection("orders");

//     // create a document to insert
//     const doc = {
//       title: "Record of a Shriveled Datum",
//       content: "No bytes, no problem. Just insert a document, in MongoDB",
//     }
//     const result = await users.insertOne(doc);
//     console.log(`A document was inserted with the _id: ${result.insertedId}`);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);
//////
// GET /
app.get('/', function (_req, res) {
  res.send(`
  <h1 style='color:red'>
  <p>Team 5 JPP P1</p>
  <p>services provided by the api</p>
  <ul style='color:blue;'>
  <li>
  <a href='/api/brand'>
  GET /api/brand/
  </a>
  </li>
  <li>

  <a href='/api/brand'>
  GET /api/brand/:id
  </a>
  </li>
  <li>

  <a href='/api/brand'>
  DELETE /api/brand/:id
  </a>
  </li>
  <li>

  <a href='/api/brand'>
  POST /api/brand
  </a>
  </li>
  </ul>

  </h1>
  `)
})
var assert = require('assert');
const url = 'mongodb://localhost/'
// GET /api/brand/
// app.get('/api/brand/', async (_req, res) => {
//   // (async () => {
//   //   return MongoClient.connect(url, {
//   //     useNewUrlParser: true,
//   //     useUnifiedTopology: true,
//   //   }, (err, client) => {
//   //     assert.equal(null, err);
//   //     console.log("Connected correctly to server");
//   //     const db = client.db('jppTeam5p1');

//   //     const col = db.collection('brands');
//   //     // Insert a single document
//   //     col.insertMany([{ a: 1 }, { a: 2 }, { a: 2 }], function (err, r) {
//   //       assert.equal(null, err);
//   //       assert.equal(3, r.insertedCount);

//   //       // Update a single document
//   //       col.updateOne({ a: 1 }, { $set: { b: 1 } }, function (err, r) {
//   //         assert.equal(null, err);
//   //         assert.equal(1, r.matchedCount);
//   //         assert.equal(1, r.modifiedCount);

//   //         // Update multiple documents
//   //         col.updateMany({ a: 2 }, { $set: { b: 1 } }, function (err, r) {
//   //           assert.equal(null, err);
//   //           assert.equal(2, r.matchedCount);
//   //           assert.equal(2, r.modifiedCount);

//   //           // Upsert a single document
//   //           col.updateOne({ a: 3 }, { $set: { b: 1 } }, {
//   //             upsert: true
//   //           }, function (err, r) {
//   //             assert.equal(null, err);
//   //             assert.equal(0, r.matchedCount);
//   //             assert.equal(1, r.upsertedCount);
//   //             client.close();
//   //           });
//   //         });
//   //       }); 
//   //     });
//   //   });

//   // })();
//   (async () => {
//     MongoClient.connect(url, (err, client) => {
//       assert.equal(null, err);
//       console.log("Connected correctly to server 2");

//       const db = client.db('jppTeam5p1');

//       const col = db.collection('brands');
//       // Insert a single document
//       // col.insertMany([{a:1}, {a:1}, {a:1}], function(err, r) {
//       //   assert.equal(null, err);
//       //   assert.equal(3, r.insertedCount);

//       // Get first documents from cursor using each
//       let resutls = [];
//       col.find({}).limit(200).forEach(function (doc) {
//         if (doc) {
//           // Got a document
//           console.log(doc)
//           // res.json(doc);  
//           resutls.push(doc)

//         }
//       }).finally(e=>{
//         if (!!resutls) {
//           res.json(resutls);
//         } else {
//           res.status(404).send();

//           client.close();
//           return false;
//         }
//       });


//       // });
//     });
//   })();
//   // .then(async e=>{
//   //   const db = await e.db('jppTeam5p1');
//   //   const brands = db.collection("brands");
//   //   var myCursor = await brands.find( );
//   //   var myDocument = myCursor.hasNext() ? myCursor.next() : null;
//   //   if (myDocument) {
//   //       var myName = myDocument; 
//   //       console.log(myName);
//   //   } 
//   //   return e; 

//   // }).then(async e=>{
//   //   // await e.close();
//   // })


//   // try {

//   // await client.connect();


//   // console.log(brands.find({}));
//   // (async()=>brands.find())().then( (brand) =>{
//   //  // // brand.stream()
//   //   res.json(brand);  
//   // }, function (e) {
//   //   res.status(500).send();
//   // });

//   // } finally { 
//   // await client.close();
//   // }
//   ///
// });
// // GET /api/brand/:id
// app.get('/api/brand/:id', async (req, res) => {
//   const brandId = parseInt(req.params.id, 10);

//   brands.find({
//     where: {
//       id: brandId,
//     }
//   }).then(function (brand) {
//     if (!!brand) {
//       res.json(brand.toJSON());
//     } else {
//       res.status(404).send();
//     }
//   }, function (e) {
//     res.status(500).send();
//   });
// }); 
app.get('/api/brand/', async (_req, res) => {
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");

      const db = client.db('jppTeam5p1');

      const col = db.collection('brands');

      // Get first documents from cursor using each
      let resutls = [];
      col.find({}).limit(200).forEach(function (doc) {
        if (doc) {
          // Got a document
          console.log(doc)
          // res.json(doc);  
          resutls.push(doc)
        }
      }).finally(e => {
        if (!!resutls) {
          res.json(resutls);
        } else {
          res.status(404).send();
          client.close();
          return false;
        }
      });
    });
  })();
});
// GET /api/brand/:id
app.get('/api/brand/:id', async (req, res) => {
  // console.log(req.params.id);
  // const brandId = parseInt(req.params.id, 16);
  // console.log(brandId);
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");

      const db = client.db('jppTeam5p1');

      const col = db.collection('brands');

      // Get first documents from cursor using each
      try{
      col.find({"_id":new ObjectId(`${req.params.id}`)}).limit(200).forEach(function (doc) {
        if (doc) {
          // Got a document
          console.log(doc)
          res.json(doc);  
          client.close();

          // resutls.push(doc)
        }
      })
    }catch(e){
        res.status(404).send();
        client.close();
        return false;
    }
    });
  })();
});
// DELETE /api/brand/:id
app.delete('/api/brand/:id', function (req, res) {
   // console.log(req.params.id);
  // const brandId = parseInt(req.params.id, 16);
  // console.log(brandId);
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");

      const db = client.db('jppTeam5p1');

      const col = db.collection('brands');

      // Get first documents from cursor using each
      col.findOneAndDelete({"_id":new ObjectId(`${req.params.id}`)}).then(function (doc) {
        if (doc) {
          // Got a document
          console.log(doc) 
          res.json(doc);  
          client.close();
          // resutls.push(doc) 
        }
      })
    .catch(()=>{
        res.status(404).send();
        client.close();
        return false;
    }).finally(()=>{
        client.close();
    })
    });
  })();
  // // var brandId = parseInt(req.params.id, 10);

  // brands.destroy({
  //   where: {
  //     id: brandId,
  //   }
  // }).then(function (rowsDeleted) {
  //   if (rowsDeleted === 0) {
  //     res.status(404).json({
  //       error: 'No record found with id'
  //     });
  //   } else {
  //     res.status(204).send();
  //   }
  // }, function (e) {
  //   res.status(500).send();
  // });
});
// POST /api/brand
app.post('/api/brand', function (req, res) {
  const body = _.pick(req.body, 'brandValues');//, 'config');
  // console.log(""+body); 
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");

      const db = client.db('jppTeam5p1');

      const col = db.collection('brands');

      // Get first documents from cursor using each
            col.insertOne(body, (err, r)=> {
        assert.equal(null, err);
        assert.equal(true, r.acknowledged);
        
        
      // col.insertOne({"_id":new ObjectId(`${req.params.id}`)}).then(function (doc) {
        // if (doc) {
          // Got a document
          // console.log(doc) 
          res.json(r.insertedId);  
          console.log(r.insertedId)
          client.close();
          // resutls.push(doc) 
        // }
      })
    // .catch(()=>{
    //     res.status(404).send();
    //     client.close();
    //     return false;
    // }).finally(()=>{
    //     client.close();
    // })
    });
  })();
  // brands.create(body).then(function (brand) {
  //   brand.save().then(() => {
  //     res.json(brand.toJSON());
  //   })
  // }, function (e) {
  //   res.status(400).json(e);
  // });
});

  //////
 