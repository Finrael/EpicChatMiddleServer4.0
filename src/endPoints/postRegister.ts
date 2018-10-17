
import express, { json } from 'express';
import bodyParser from 'body-parser';
const app = express();
import User from '../db/models/registerSchema';
const router = express.Router();
import serverConst from '../server/serverConstant'
import fetch from 'node-fetch'
router.post('/register', async(req,res)=>{
    // console.log('req.body in postregister.ts', req.body)
    const response = await fetch('http://localhost:5001/api/registerUser',
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
// res.send(response)
const response2 = await fetch('http://localhost:5002/api/addUserExtraInfo',
{
    method: 'post', body: JSON.stringify(
        {
            username: req.body.username, email:req.body.email,
            password: req.body.password, language: req.body.language
        }),
    headers: { 'Content-Type': 'application/json' }
  
});
if (response2.status !== 200) { throw Error('error'); }
else {
console.log('passed properly from postRegister.ts')
}
res.end()
})

// router.post('/register', (req, res) => {

//     let post = new User({
//         username: req.body.username,
//         email: req.body.email,
//         contacts: [],
//         language:req.body.language,
//     });
//     post.setPassword(req.body.password, function (err, user) {
//         if (err) {
//             return res.status(500).end("Could not set password");
//         }
//         user.save(function (err: any) {
//             if (err) {
//                 res.status(500).end("server error while saving");
//                 console.error(err);
//                 throw err;
//             } else {
//                 console.log('save name successfull')
//                 res.end();
//             }
//         })
//     });
//     // console.log('postRegister is in: ', req.body);
// // res.end();
// });
 

export default router;
