
import express, { json } from 'express';
import bodyParser from 'body-parser';
const app = express();
import User from '../db/models/registerSchema';
const router = express.Router();
import serverConst from '../server/serverConstant'
import fetch from 'node-fetch'
import {notificationServer_Api_Adress, authenticationServer_Api_Adress} from '../configFile'
router.post('/register', async(req,res)=>{
    // console.log('req.body in postregister.ts', req.body)
    const response = await fetch(authenticationServer_Api_Adress+'/registerUser',
            {
                method: 'post', body: JSON.stringify(
                    {
                        username: req.body.username, email:req.body.email,
                        password: req.body.password, language: req.body.language
                    }),
                headers: { 'Content-Type': 'application/json' }
            });
        if (response.status !== 200) { throw Error('error'); }
        else {
           console.log('passed properly from postRegister.ts')
        }
    const user = await response.json();
// res.send(response)
console.log('------------------------',user.user,'////////////////////////')
const response2 = await fetch(notificationServer_Api_Adress+'/addUserExtraInfo',
{
    method: 'post', body: JSON.stringify(
        {   _id:user.user,
            username: req.body.username, email:req.body.email,
            password: req.body.password, language: req.body.language,
            id:user.user,
        }),
    headers: { 'Content-Type': 'application/json' }
  
});
if (response2.status !== 200) { throw Error('error'); }
else {
console.log('passed properly from postRegister.ts')
}
res.end()
})



export default router;
