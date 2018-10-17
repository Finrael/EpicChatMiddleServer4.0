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
 
 router.post ('/setLanguage', async (req,res)=>{
    // console.log('into facade axios version',req.body.language)
    axios.post('http://localhost:5002/api/setLanguage',{},{headers:{cookie: req.headers.cookie, language: req.body.language}}).then(
      function(response){
        console.log('connected succesfully to get contacts', response.data)
        res.json(response.data)
      }
    ).catch(function(error){
      console.log('failed to connect axios into athenticate')
    }).then(function(){
      console.log('got into the .then')
      
    
    })
    
  })
  
 export default router;