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
 import message from '../db/models/messageSchema';
import {Types, Schema} from "mongoose";
import  {io} from '../SocketConfig'
import axios from 'axios'
 router.use('/message',async(req,res)=>{
//  console.log('from authenticate getProfile ',req.user);
// console.log('messageS:', req.body.convId)
axios.post('http://localhost:5002/api/message',{},{headers:{cookie: req.headers.cookie, convId: req.body.convId, textMessage: req.body.textMessage}}).then(
 async function(response){
    console.log('connected succesfully to authenticate', response.data)

     io.to(response.data.convId).emit('newMessage',response.data.message )

    res.json(response.data.message)
  }
).catch(function(error){
  console.log('failed to connect axios into convId')
}).then(function(){
  console.log('got into the .then')
  

})
});
///////////////////////////////////////////////////////////////
//  const creationDate = new Date()
//  const newMessage = {
//     messageText: req.body.textMessage,
//     messageTime:creationDate,
//     messageOriginator:{_Id:req.user!._id, name:req.user!.username},
//     conversationId: new Types.ObjectId(req.body.convId),
//  }
//  const generateMessage = await message.create(newMessage);
// //  console.log(generateMessage)
//  res.json(generateMessage);
//  io.to(req.body.convId).emit('newMessage',generateMessage )

//  console.log('it whent int to /message', req.body.convId)

// res.json(newMessage)
//  });
 export default router;