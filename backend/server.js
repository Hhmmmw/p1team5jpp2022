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

const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.vj9dy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
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
const { MongoClient, ObjectId } = require('mongodb')
const app = express()
const bodyParser = require('body-parser')
const _ = require('underscore');
const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend/build')));


// // use the express-static middleware
// app.use(express.static("public"))
app.use(bodyParser.json());
app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname+'../frontend/build/index.html'));
});
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
// app.get('/', function (_req, res) {
//   res.send(`
//   <h1 style='color:red'>
//   <p>Team 5 JPP P1</p>
//   <p>services provided by the api</p>
//   <ul style='color:blue;'>
//   <li>
//   <a href='/api/brand'>
//   GET /api/brand/
//   </a>
//   </li>
//   <li>

//   <a href='/api/brand'>
//   GET /api/brand/:id
//   </a>
//   </li>
//   <li>

//   <a href='/api/brand'>
//   DELETE /api/brand/:id
//   </a>
//   </li>
//   <li>

//   <a href='/api/brand'>
//   POST /api/brand
//   </a>
//   </li>
//   </ul>

//   </h1>
//   `)
// })
var assert = require('assert');
const url =uri;// 'mongodb://localhost/'
app.get('/api/brand/', async (_req, res) => {
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('brands');
      let resutls = [];
      col.find({}).limit(200).forEach(function (doc) {
        if (doc) {
          console.log(doc)
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
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('brands');
      try {
        col.find({ "_id": new ObjectId(`${req.params.id}`) }).limit(200).forEach(function (doc) {
          if (doc) {
            // Got a document
            console.log(doc)
            res.json(doc);
            client.close();
          }
        })
      } catch (e) {
        res.status(404).send();
        client.close();
        return false;
      }
    });
  })();
});
// DELETE /api/brand/:id
app.delete('/api/brand/:id', function (req, res) {
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('brands');
      col.findOneAndDelete({ "_id": new ObjectId(`${req.params.id}`) }).then(function (doc) {
        if (doc) {
          console.log(doc)
          res.json(doc);
          client.close();
        }
      })
        .catch(() => {
          res.status(404).send();
          client.close();
          return false;
        }).finally(() => {
          client.close();
        })
    });
  })();
});
// POST /api/brand
app.post('/api/brand', function (req, res) {
  const body = _.pick(req.body, 'brandValues');//, 'config');
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('brands');
      col.insertOne(body, (err, r) => {
        assert.equal(null, err);
        assert.equal(true, r.acknowledged);
        res.json(r.insertedId);
        console.log(r.insertedId)
        client.close();
      })
    });
  })();
});
////////
//////
// GET /api/products?keyword=
app.get('/api/products', async (req, res) => {
  const kw = req.query.keyword
    (async () => {
      MongoClient.connect(url, (err, client) => {
        assert.equal(null, err);
        console.log("Connected correctly to server 2");
        const db = client.db('jppTeam5p1');
        const col = db.collection('products');
        let resutls = [];
        col.find(kw ? {} : { "$**": kw }).limit(200).forEach(function (doc) {
          if (doc) {
            console.log(doc)
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
// GET /api/products/:id
app.get('/api/products/:id', async (req, res) => {
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('products');
      try {
        col.find({ "_id": new ObjectId(`${req.params.id}`) }).limit(200).forEach(function (doc) {
          if (doc) {
            // Got a document
            console.log(doc)
            res.json(doc);
            client.close();
          }
        })
      } catch (e) {
        res.status(404).send();
        client.close();
        return false;
      }
    });
  })();
});


// POST /api/products
app.post('/api/products', function (req, res) {
  const body = _.pick(req.body, 'productValues');//, 'config');
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('products');
      col.insertOne(body, (err, r) => {
        assert.equal(null, err);
        assert.equal(true, r.acknowledged);
        res.json(r.insertedId);
        console.log(r.insertedId)
        client.close();
      })
    });
  })();
});
// POST /api/products/:id/reviews
app.post('/api/products/:id/reviews', function (req, res) {
  const body = _.pick(req.body, 'review');//, 'config');
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('products');
      let result;
      // try {
        col.find({ "_id": new ObjectId(`${req.params.id}`) }).limit(200).forEach(function (doc) {
          if (doc) {
            // Got a document
            console.log("find doc",doc)
            result=doc
            return result
            // res.json(doc);
            // client.close();
          }else{
            res.status(404).send();
            client.close();
            return false;  
          }
        }).then(e=>{
          if(!!result){
            console.log("here",result)
            if(!result.review)
            result={...result,review:[]}
            result={...result,review:[...result.review,{...body.review}]}
            col.replaceOne({ "_id": new ObjectId(`${req.params.id}`) },{...result}).then((e)=>{res.json(e);client.close()})
          }else{
            res.status(404).send();
            client.close();
            return false;
  
          }
        }).catch(e=>{
          res.status(404).send();
          client.close();
          return false;
        })
      // } catch (e) {
      
      // }
      
    }); 
  })();
});
// })
// PUT /api/products/:id
//not implemetned
app.put('/api/products/:id', function (req, res) {
  const body = _.pick(req.body, 'productData');//, 'config');
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('products');
      let result;
      // try {
        col.find({ "_id": new ObjectId(`${req.params.id}`) }).limit(200).forEach(function (doc) {
          if (doc) {
            // Got a document
            console.log("find doc",doc)
            result=doc
            return result
            // res.json(doc);
            // client.close();
          }else{
            res.status(404).send();
            client.close();
            return false;  
          }
        }).then(e=>{
          if(!!result){
            console.log("here",result)
            if(!result.productData)
            result={...result,productData:[]}
            result={...result,productData:[...result.productData,{...body.productData}]}
            col.replaceOne({ "_id": new ObjectId(`${req.params.id}`) },{...result}).then((e)=>{res.json(e);client.close()})
          }else{
            res.status(404).send();
            client.close();
            return false;
  
          }
        }).catch(e=>{
          res.status(404).send();
          client.close();
          return false;
        })
      // } catch (e) {
      
      // }
      
    }); 
  })();
});


// DELETE /api/products/:id
app.delete('/api/products/:id', function (req, res) {
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('products');
      col.findOneAndDelete({ "_id": new ObjectId(`${req.params.id}`) }).then(function (doc) {
        if (doc) {
          console.log(doc)
          res.json(doc);
          client.close();
        }
      })
        .catch(() => {
          res.status(404).send();
          client.close();
          return false;
        }).finally(() => {
          client.close();
        })
    });
  })();
});
////
////
// GET /api/category/
app.get('/api/category/', async (req, res) => {
    (async () => {
      MongoClient.connect(url, (err, client) => {
        assert.equal(null, err);
        console.log("Connected correctly to server 2");
        const db = client.db('jppTeam5p1');
        const col = db.collection('category');
        let resutls = [];
        col.find({}).limit(200).forEach(function (doc) {
          if (doc) {
            console.log(doc)
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

// GET /api/category/:id
app.get('/api/category/:id', async (req, res) => {
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('category');
      try {
        col.find({ "_id": new ObjectId(`${req.params.id}`) }).limit(200).forEach(function (doc) {
          if (doc) {
            // Got a document
            console.log(doc)
            res.json(doc);
            client.close();
          }
        })
      } catch (e) {
        res.status(404).send();
        client.close();
        return false;
      }
    });
  })();
});
// DELETE /api/category/:id
app.delete('/api/category/:id', function (req, res) {
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('category');
      col.findOneAndDelete({ "_id": new ObjectId(`${req.params.id}`) }).then(function (doc) {
        if (doc) {
          console.log(doc)
          res.json(doc);
          client.close();
        }
      })
        .catch(() => {
          res.status(404).send();
          client.close();
          return false;
        }).finally(() => {
          client.close();
        })
    });
  })();
});

// POST /api/category
app.post('/api/category', function (req, res) {
  const body = _.pick(req.body, 'categoryValues');//, 'config');
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('category');
      col.insertOne(body, (err, r) => {
        assert.equal(null, err);
        assert.equal(true, r.acknowledged);
        res.json(r.insertedId);
        console.log(r.insertedId)
        client.close();
      })
    });
  })();
});
// PUT /api/category/:id
//not implemetned
app.put('/api/category/:id', function (req, res) {
  const body = _.pick(req.body, 'categoryData');//, 'config');
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('category');
      let result;
      // try {
        col.find({ "_id": new ObjectId(`${req.params.id}`) }).limit(200).forEach(function (doc) {
          if (doc) {
            // Got a document
            console.log("find doc",doc)
            result=doc
            return result
            // res.json(doc);
            // client.close();
          }else{
            res.status(404).send();
            client.close();
            return false;  
          }
        }).then(e=>{
          if(!!result){
            console.log("here",result)
            if(!result.productData)
            result={...result,productData:[]}
            result={...result,productData:[...result.productData,{...body.productData}]}
            col.replaceOne({ "_id": new ObjectId(`${req.params.id}`) },{...result}).then((e)=>{res.json(e);client.close()})
          }else{
            res.status(404).send();
            client.close();
            return false;
  
          }
        }).catch(e=>{
          res.status(404).send();
          client.close();
          return false;
        })
      // } catch (e) {
      
      // }
      
    }); 
  })();
});
///
///
// GET /api/orders/
app.get('/api/orders/', async (req, res) => {
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('orders');
      let resutls = [];
      col.find({}).limit(200).forEach(function (doc) {
        if (doc) {
          console.log(doc)
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
// POST /api/orders
app.post('/api/orders', function (req, res) {
  const body = _.pick(req.body, 'order');//, 'config');
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('orders');
      col.insertOne(body, (err, r) => {
        assert.equal(null, err);
        assert.equal(true, r.acknowledged);
        res.json(r.insertedId);
        console.log(r.insertedId)
        client.close();
      })
    });
  })();
});
// GET /api/orders/:id
app.get('/api/orders/:id', async (req, res) => {
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('orders');
      try {
        col.find({ "_id": new ObjectId(`${req.params.id}`) }).limit(200).forEach(function (doc) {
          if (doc) {
            // Got a document
            console.log(doc)
            res.json(doc);
            client.close();
          }
        })
      } catch (e) {
        res.status(404).send();
        client.close();
        return false;
      }
    });
  })();
});
// PUT /api/orders/:id/pay
//not implemetned
app.put('/api/orders/:id/pay', function (req, res) {
  const body = _.pick(req.body, 'paymentResult');//, 'config');
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('orders');
      let result;
      // try {
        col.find({ "_id": new ObjectId(`${req.params.id}`) }).limit(200).forEach(function (doc) {
          if (doc) {
            // Got a document
            console.log("find doc",doc)
            result=doc
            return result
            // res.json(doc);
            // client.close();
          }else{
            res.status(404).send();
            client.close();
            return false;  
          }
        }).then(e=>{
          if(!!result){
            console.log("here",result)
            if(!result.paymentResult)
            result={...result,paymentResult:[]}
            result={...result,paymentResult:[...result.paymentResult,{...body.paymentResult}]}
            col.replaceOne({ "_id": new ObjectId(`${req.params.id}`) },{...result}).then((e)=>{res.json(e);client.close()})
          }else{
            res.status(404).send();
            client.close();
            return false;
  
          }
        }).catch(e=>{
          res.status(404).send();
          client.close();
          return false;
        })
      // } catch (e) {
      
      // }
      
    }); 
  })();
});
// PUT /api/orders/:id/deliver
//not implemetned
app.put('/api/orders/:id/deliver', function (req, res) {
  // const body = _.pick(req.body, 'paymentResult');//, 'config');
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('orders');
      let result;
      // try {
        col.find({ "_id": new ObjectId(`${req.params.id}`) }).limit(200).forEach(function (doc) {
          if (doc) {
            // Got a document
            console.log("find doc",doc)
            result=doc
            return result
            // res.json(doc);
            // client.close();
          }else{
            res.status(404).send();
            client.close();
            return false;  
          }
        }).then(e=>{
          if(!!result){
            console.log("here",result)
            if(!result.status)
            result={...result,status:"delivered"}
            col.replaceOne({ "_id": new ObjectId(`${req.params.id}`) },{...result}).then((e)=>{res.json(e);client.close()})
          }else{
            res.status(404).send();
            client.close();
            return false;
  
          }
        }).catch(e=>{
          res.status(404).send();
          client.close();
          return false;
        })
      // } catch (e) {
      
      // }
      
    }); 
  })();
});
// GET /api/orders/myorders
app.get('/api/orders/myorders', async (req, res) => {
  //add user here
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('orders');
      let resutls = [];
      col.find({}).limit(200).forEach(function (doc) {
        if (doc) {
          console.log(doc)
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



////
// const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const router = express.Router();
// const bcrypt = require('bcrypt');

// // var Strategy = require('passport-http-bearer').Strategy;
// //
// const findByToken = function(token, cb) {
//   var resutls = [];

//   (async () => {
//     MongoClient.connect(url, (err, client) => {

//       assert.equal(null, err);
//       console.log("Connected correctly to server 2");
//       const db = client.db('jppTeam5p1');
//       const col = db.collection('users');
//       col.find({}).forEach(function (doc) {
//         if (doc) {
//           console.log(doc)
//           resutls.push(doc)
//         }
//       }).finally(e => {
//         if (!!resutls) {
//           res.json(resutls);
//         } else {
//           res.status(404).send();
//           client.close();
//           return false;
//         }
//       });
//     });
//   })();
//   process.nextTick(function() {
//     for (var i = 0, len = results.length; i < len; i++) {
//       var record = results[i];
//       if (record.token === token) {
//         return cb(null, record);
//       }
//     }
//     return cb(null, null);
//   });
// }
// passport.use(new Strategy(
//   function(token, cb) {
//     findByToken(token, function(err, user) {
//       if (err) { return cb(err); }
//       if (!user) { return cb(null, false); }
//       return cb(null, user);
//     });
//   }));
//   app.use(require('morgan')('combined'));

// //// POST /api/users/login
// app.post('/api/users/login',passport.authenticate('bearer', { session: false }), function (req, res) {
//   const {email,password} = _.pick(req.body, {email,password});//, 'config');
//       res.json({ username: req.user.username, email: req.user.emails[0].value });
//   // (async () => { 
//   //   MongoClient.connect(url, (err, client) => {
//   //     assert.equal(null, err);
//   //     console.log("Connected correctly to server 2");
//   //     const db = client.db('jppTeam5p1');
//   //     const col = db.collection('users');
//   //     col.insertOne(body, (err, r) => {
//   //       assert.equal(null, err);
//   //       assert.equal(true, r.acknowledged);
//   //       res.json(r.insertedId);
//   //       console.log(r.insertedId)
//   //       client.close();
//   //     })
//   //   });
//   // })();
//   });
//   //// POST /api/users/login
// app.post('/api/users', function (req, res) {
//   const user=_.pick(req.body, 'user');//, 'config');
//   console.log(user);
//       // res.json({ username: req.user.username, email: req.user.emails[0].value });
//   (async () => { 
//     MongoClient.connect(url, (err, client) => {
//       assert.equal(null, err);
//       console.log("Connected correctly to server 2");
//       const db = client.db('jppTeam5p1');
//       const col = db.collection('users');
//       col.findOne({ "email": user.email }).then(function (doc) {
//         if (doc) {
//           res.status(404).send();
//           client.close();
//           return false;  
//           // Got a document
//           // console.log("find doc",doc)
//           // result=doc
//           // return result
//           // res.json(doc);
//           // client.close();
//         }else{
//           // res.status(404).send();
//           col.insertOne({...user,token:null}, (err, r) => {
//             assert.equal(null, err);
//             assert.equal(true, r.acknowledged);
//             res.json(r.insertedId);
//             console.log(r.insertedId)
//             client.close();
//           })
//           client.close();
//           return false;  
//         }
//       })
     
//     });
//   })();
//   });
//   app.get('/api/users/', async (req, res) => {
//     (async () => {
//       MongoClient.connect(url, (err, client) => {
//         assert.equal(null, err);
//         console.log("Connected correctly to server 2");
//         const db = client.db('jppTeam5p1');
//         const col = db.collection('users');
//         let resutls = [];
//         col.find({}).limit(200).forEach(function (doc) {
//           if (doc) {
//             console.log(doc)
//             resutls.push(doc)
//           }
//         }).finally(e => {
//           if (!!resutls) {
//             res.json(resutls);
//           } else {
//             res.status(404).send();
//             client.close();
//             return false;
//           }
//         });
//       });
//     })();
//   });