const express = require('express');
const admin = require('firebase-admin')
var firebase = require('firebase-admin');
var key = require('./key');
firebase.initializeApp(key);
const db = admin.firestore();
const bodyparser = require('body-parser');
const app = express();
  
const firebas = require('firebase');
firebas.initializeApp(key);
app.use(bodyparser.json());
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4200'
  }));
  app.use(bodyparser.urlencoded({
    extended: true
  }))
  app.post('/registration',(req,res) => {
      console.log(req.body);
      firebas.auth().createUserWithEmailAndPassword(req.body.Emailid, req.body.password).then(data => {

        db.collection('users').add(req.body).then(() => {
          console.log("oh yeh")
          firebas.auth().currentUser.getIdToken().then(function (idToken) {
            console.log(idToken)
            res.json({
              message: "successfully resgisterd"
            })
          }).catch(function (error) {
            console.log(error)
          });
        }).catch(err => {
          console.log("oh no")
          console.log(err);
        })
      }).catch(err => {
        if (err.message == "The email address is already in use by another account.") {
          res.json({
            message: "already exist"
          })
        }
      })
  })
  app.post('/login',(req,res) => {
    firebas.auth().signInWithEmailAndPassword(req.body.Emailid, req.body.password).then((result) => {
        // console.log(result.credential.toJSON())
        // var a =result.credential.toJSON()
        // console.log(a)
        console.log(result.user.uid)
        result.user.getIdToken().then(token => {
          console.log(token)
          // totalresponse={
          //   uid:result.user.uid,
          //   token:token
          // }
          // res.json(totalresponse)
          // console.log(result.user.providerData)
          db.collection("users").where("Emailid", "==", req.body.Emailid)
            .get()
            .then(function (querySnapshot) {
              //  var a=  querySnapshot.docs.map(d=>d={Emailid:req.body.Emailid});
              //  console.log("in")
              var b = querySnapshot.docs.find(d => d = {
                Emailid: req.body.Emailid
              });
              var c = b.data()
              console.log(c.displayName)
               console.log(c)
              querySnapshot.forEach((data => {
                console.log(data.id)
                const newid = data.id;
                totalresponse = {
                  uid: newid,
                  token: token,
                  displayName: c.displayName,
                }
              }))
    
    
              res.json(totalresponse)
              console.log(result.user.providerData)
            }).catch(err => {console.log(err)});
        })
      }).catch(err => {
        if (err.message == "There is no user record corresponding to this identifier. The user may have been deleted.") {
          res.send({
            message: "there is no user like this"
          });
        }
      });
})









app.post('/test',(req,res) => {
    console.log(req.body);
   

      db.collection('sensordata').add(req.body).then(() => {
        console.log("oh yeh")
      }).catch(err => {
        console.log("oh no")
        console.log(err);
      })
    });

    app.post('/alldata',(req,res) => {
        console.log(req.body);
        
        



        let a = [];
        db.collection("sensordata").where("id", "==", req.body.id)
        .get()
        .then(function (querySnapshot) {
          //  var a=  querySnapshot.docs.map(d=>d={Emailid:req.body.Emailid});
          //  console.log("in")
          var b = querySnapshot.docs.find(d => d = {
            Emailid: req.body.Emailid
          });
          var c = b.data()
          console.log(c.displayName)
           console.log(c)
          querySnapshot.forEach((data => {
            // console.log(data.data())
            a.push(data.data())
          }))
console.log(a);
res.send(a);
        }).catch(err => {console.log(err)});










        });

    


  app.listen(8000, () => console.log('serverstarte on : 8000'));  