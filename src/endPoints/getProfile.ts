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
import coockieParser from 'cookie-parser'
router.use('/authenticate', async(req,res)=>{
// console.log('from authenticate getProfile ',req.user);
// debugger
// console.log('ON REQ.COOKIES',req.cookies)
// req.headers= req.cookies
// console.log(req.signedCookies)

await axios.post('http://localhost:5001/api/authenticate',{},{headers:{cookie: req.headers.cookie}}).then(function (response){
// console.log('dsf///////////////////////////////')

// console.log('ddddddddddddddddddddd',response.data,'dddddddddddddddddddddddddddddd')
const toSend = {name:response.data.username, email:response.data.email, contacts:response.data.contacts, language:response.data.language}
res.json(toSend)
}).catch(function (error){
console.log ('//////////////////////error on axios on get profile');
res.json({d:false})
})
// const dataFromProfile = await User.findOne({_id: req.user}, {username:1, email:1, contacts:1, language:1})
// // console.log('datafromProfile', dataFromProfile)
// res.json(dataFromProfile);
// 
});
export default router;