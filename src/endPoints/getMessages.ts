 // imports
 import express, { json } from 'express';
 import cookieParser from 'cookie-parser';
 import bodyParser from 'body-parser';
//  import User from '../db/models/messageSchema';
 import passport from 'passport';
 const router = express.Router();
 import jwt, { verify } from 'jsonwebtoken';
 import JWTSECRET from '../constants';
 import passportJWT from 'passport-jwt';
 import message from '../db/models/messageSchema';
import {Types, Schema} from "mongoose";
import axios from 'axios'

 router.post('/getMessages',async(req,res)=>{
    //  console.log('messageS:', req.body.convId)
    axios.post('http://localhost:5002/api/getMessages',{},{headers:{cookie: req.headers.cookie, convId: req.body.convId}}).then(
     async function(response){
        // console.log('connected succesfully to authenticate', response.data)


        res.json(response.data)
      }
    ).catch(function(error){
      console.log('failed to connect axios into convId')
    }).then(function(){
      console.log('got into the .then')
      
    
    })
 });
 export default router;