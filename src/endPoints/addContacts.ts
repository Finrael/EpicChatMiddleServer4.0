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
import conversation from '../db/models/conversationSchema';
import moment from 'moment';
import axios from 'axios'
import {notificationServer_Api_Adress} from '../configFile'

router.post('/addContacts' , async (req, res) => {
    const selectedToAdd= req.body.userToAdd;
    const requestingUser= req.body.email;
    // console.log('selected user', selectedToAdd, 'requesting user',requestingUser)
    axios.post(notificationServer_Api_Adress+'/addContacts',{},{headers:{cookie: req.headers.cookie,usertoadd:selectedToAdd, email:requestingUser }}).then(
        function(response){
          // console.log('connected succesfully to authenticate', response.data)
          res.send('response.data')
        }
      ).catch(function(error){
        console.log('failed to connect axios into athenticate')
      }).then(function(){
        console.log('got into the .then')
        
      
      })
});


export default router