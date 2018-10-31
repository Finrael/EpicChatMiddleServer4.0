import SocketIO from 'socket.io'
import * as Http from 'http'
import { Socket } from 'net';
import passport from 'passport';
import * as jwt from 'jsonwebtoken'
import user from './db/models/registerSchema';
export let io: SocketIO.Server;
// import * as cookieParser from 'socket.io-cookie-parser'
import JWTSECRET from './constants'
import axios from 'axios'
import express, {json} from 'express'
import { Mongoose, Types } from 'mongoose';
import {notificationServer_Api_Adress} from './configFile'
// import * as mongoose1 from 'mongoose'
const router = express.Router();
export function Config(server: Http.Server) {
    let aux;
    io = SocketIO(server);

    io.use(async(socket, next) => {
      await  axios.post(notificationServer_Api_Adress+'/getConversationId',{}, {headers:{cookie: socket.request.headers.cookie}}).then(

            async function(response){
               console.log('connected succesfully to authenticate',  '----------------------')

                console.log('this is the lenght of the data', response.data.contacts.length)
                // console.log('conversation data', UserData!.contacts[0].conversationId, '--------------------------------')
                        for (let i =0; response.data.contacts.length>i;i++){
                            
                            aux = response.data.contacts[i].conversationId.toString();
                            socket.join(aux)
                            console.log('this is aux',aux);
                        }
                      socket.join(response.data._id)
                      next();   
  
             }
           ).catch(function(error){
             console.log('failed to connect axios into convId')
           })
        //    console.log('this*******************', socket.request.headers.cookie)
    })
                           
    io.on('connection', (socket) => {
        // socket.on('ss',(data)=>{console.log('Socket component online')
        io.emit('This is for some reason an event', 'this is to be send')    
    })   

    }
