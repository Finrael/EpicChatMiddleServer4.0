 // imports
 import express, { json } from 'express';
 import cookieParser from 'cookie-parser';
 import bodyParser from 'body-parser';
 import User from '../db/models/registerSchema';
 import passport from 'passport';
 const router = express.Router();
 import jwt, { verify } from 'jsonwebtoken';
 import JWTSECRET from '../constants';
 import passportJWT from 'passport-jwt';
 import axios from 'axios'
 
 router.use('/getContacts',  (req,res)=>{


    // console.log('into facade axios version', req.body.emailToLookFor)
    const emailToFilter= req.body.emailToLookFor
    axios.post('http://localhost:5002/api/getContacts',{},{headers:{cookie: req.headers.cookie, emailToLookFor:emailToFilter}}).then(
      function(response){
        console.log('connected succesfully to authenticate', response.data)
        res.json(response.data)
      }
    ).catch(function(error){
      console.log('failed to connect axios into athenticate')
    }).then(function(){
      console.log('got into the .then')
      
    
    })
//  console.log('getContacts log', req.user);
//  console.log('req body',req.body.emailToLookFor)
//  const query:any = User.find({email:req.body.query},{_id:1, email:1, name:1} )

//  const query:any = User.find({email:new RegExp(req.body.emailToLookFor)},{_id:1, email:1, name:1} )
//  query.exec((err:any,docs:any)=>{
// if (err){
//     return res.status(500).end('db error')
// }
// console.log(docs)
// res.json(docs);
// });

 });
 export default router;