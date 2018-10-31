// imports
import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
const router = express.Router();
import jwt, { verify } from 'jsonwebtoken';
import JWTSECRET from '../constants';
import passportJWT from 'passport-jwt';
import conversation from '../db/models/conversationSchema';
import { Types, Schema } from "mongoose";
import axios from 'axios'
import {notificationServer_Api_Adress} from '../configFile'

router.post('/getConversation', async (req, res) => {
// console.log('////////////-------',req.body.convId)
    axios.post(notificationServer_Api_Adress+'/getConversation',{},{headers:{cookie: req.headers.cookie, convId: req.body.convId}}).then(
     async function(response){
        // console.log('connected succesfully to authenticate------------------', response.data)


        res.json(response.data)
      }
    ).catch(function(error){
      console.log('failed to connect axios into athenticate')
    }).then(function(){
      console.log('got into the .then')
      
    
    })
});
export default router;