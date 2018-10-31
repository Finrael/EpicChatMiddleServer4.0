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
 import axios from 'axios';
 import {notificationServer_Api_Adress} from '../configFile'
 router.use('/getAvailablecontacts', async(req,res)=>{

    axios.post(notificationServer_Api_Adress+'/getAvailablecontacts',{},{headers:{cookie: req.headers.cookie}}).then(
     async function(response){
        console.log('connected succesfully to authenticate', response.data)


        res.json(response.data)
      }
    ).catch(function(error){
      console.log('failed to connect axios into athenticate')
    }).then(function(){
      console.log('got into the .then')
      
    
    })
    // const listOfAvailableContacts = await User.findOne({_id: response.data._id}, {contacts:1})
    // .populate({
    //     path: 'contacts.contact',
    //     select: 'username  email'
    // })

    //  console.log('req.user: ',req.user)

    //  .populate({
    //      path: 'contacts.conversationId',
    //      select:  'participants creationTime',
    //      populate: {
    //          path: 'participants.participant',
    //          select: 'email, username'
    //      }});
    //  console.log('list from the populate for availablecontacts3:', listOfAvailableContacts)
    // res.json(listOfAvailableContacts);
 })

 export default router;