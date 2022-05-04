const express = require("express")
const { MongoClient, ObjectId } = require('mongodb')
const app = express()
const bodyParser = require('body-parser')
const _ = require('underscore');
const path = require('path');
require('dotenv').config();
app.use(express.static(path.join(__dirname, '../frontend/build')));
const username = encodeURIComponent(`${process.env.MONGO_UN}`);
const password = encodeURIComponent(`${process.env.MONGO_PW}`);
const servername = encodeURIComponent(`${process.env.MONGO_SRV}`);
const url = `mongodb+srv://${username}:${password}@${servername}/myFirstDatabase?retryWrites=true&w=majority`;
var assert = require('assert');



app.use(bodyParser.json());
app.get('/', (req, res) => {
  if (process.env.LOCALHOST == "false")
    res.sendFile(path.join(__dirname + '../frontend/build/index.html'));
  else
    res.sendFile(path.join(__dirname + '../frontend/index.html'));

});

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
app.get('/api/brand/', async (_req, res) => {
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('brand');
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
      const col = db.collection('brand');
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
      const col = db.collection('brand');
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
      const col = db.collection('brand');
      col.insertOne({ ...body }, (err, r) => {
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
  const kw = req.query.keyword;
  (async () => {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to server 2");
      const db = client.db('jppTeam5p1');
      const col = db.collection('products');
      let resutls = [];
      col.find(kw!=='' ? { "title": { $search: kw } } : {}).limit(500).forEach(function (doc) {
      // col.find(kw !== '' ? [{ '$search': { 'index': 'default', 'text': { 'query': 'wd', 'path': { 'wildcard': '*' } } } }] : {}).limit(500).forEach(function (doc) {
        if (doc) {
          // console.log(doc)
          resutls.push(doc)
        }
      }).finally(e => {
        if (!!resutls) {
          // console.log(resutls);
          res.json({ products: resutls, pages: 1, page: 1 });
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
          console.log("find doc", doc)
          result = doc
          return result
          // res.json(doc);
          // client.close();
        } else {
          res.status(404).send();
          client.close();
          return false;
        }
      }).then(e => {
        if (!!result) {
          console.log("here", result)
          if (!result.review)
            result = { ...result, review: [] }
          result = { ...result, review: [...result.review, { ...body.review }] }
          col.replaceOne({ "_id": new ObjectId(`${req.params.id}`) }, { ...result }).then((e) => { res.json(e); client.close() })
        } else {
          res.status(404).send();
          client.close();
          return false;

        }
      }).catch(e => {
        res.status(404).send();
        client.close();
        return false;
      })
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
          console.log("find doc", doc)
          result = doc
          return result
          // res.json(doc);
          // client.close();
        } else {
          res.status(404).send();
          client.close();
          return false;
        }
      }).then(e => {
        if (!!result) {
          console.log("here", result)
          if (!result.productData)
            result = { ...result, productData: [] }
          result = { ...result, productData: [...result.productData, { ...body.productData }] }
          col.replaceOne({ "_id": new ObjectId(`${req.params.id}`) }, { ...result }).then((e) => { res.json(e); client.close() })
        } else {
          res.status(404).send();
          client.close();
          return false;

        }
      }).catch(e => {
        res.status(404).send();
        client.close();
        return false;
      })
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
          console.log("find doc", doc)
          result = doc
          return result
          // res.json(doc);
          // client.close();
        } else {
          res.status(404).send();
          client.close();
          return false;
        }
      }).then(e => {
        if (!!result) {
          console.log("here", result)
          if (!result.productData)
            result = { ...result, productData: [] }
          result = { ...result, productData: [...result.productData, { ...body.productData }] }
          col.replaceOne({ "_id": new ObjectId(`${req.params.id}`) }, { ...result }).then((e) => { res.json(e); client.close() })
        } else {
          res.status(404).send();
          client.close();
          return false;

        }
      }).catch(e => {
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
          console.log("find doc", doc)
          result = doc
          return result
          // res.json(doc);
          // client.close();
        } else {
          res.status(404).send();
          client.close();
          return false;
        }
      }).then(e => {
        if (!!result) {
          console.log("here", result)
          if (!result.paymentResult)
            result = { ...result, paymentResult: [] }
          result = { ...result, paymentResult: [...result.paymentResult, { ...body.paymentResult }] }
          col.replaceOne({ "_id": new ObjectId(`${req.params.id}`) }, { ...result }).then((e) => { res.json(e); client.close() })
        } else {
          res.status(404).send();
          client.close();
          return false;

        }
      }).catch(e => {
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
          console.log("find doc", doc)
          result = doc
          return result
          // res.json(doc);
          // client.close();
        } else {
          res.status(404).send();
          client.close();
          return false;
        }
      }).then(e => {
        if (!!result) {
          console.log("here", result)
          if (!result.status)
            result = { ...result, status: "delivered" }
          col.replaceOne({ "_id": new ObjectId(`${req.params.id}`) }, { ...result }).then((e) => { res.json(e); client.close() })
        } else {
          res.status(404).send();
          client.close();
          return false;

        }
      }).catch(e => {
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
app.listen(process.env.PORT || 3001,
  () => console.log("Server is running..."));

//////////app.js///////
// const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
// const bodyParser = require('body-parser');

const UserModel = require('./model/model');

// mongoose.connect('mongodb://127.0.0.1:27017/passport-jwt', { useMongoClient: true });
// mongoose.connect("mongodb://127.0.0.1:27017/passport-jwt", {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// });
// mongoose.set("useCreateIndex", true);
// mongoose.connection.on('error', error => console.log(error) );
// mongoose.Promise = global.Promise;

require('./auth/auth');

const routes = require('./routes/routes');
const secureRoute = require('./routes/secure-routes');

// const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

// Plug in the JWT strategy as a middleware so only verified users can access this route.
app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

// Handle errors.
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

// app.listen(3002, () => {
  // console.log('Server started.')
// });