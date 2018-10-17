"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const router = express_1.default.Router();
const axios_1 = __importDefault(require("axios"));
// router.post('/logIn', passport.authenticate('local', { session: false }),async (req, res) => {
//     const { _id, email,username } = req.user!;
//     // console.log('req user from login', req.user)
//     const languageFromProfile = await User.findOne({_id: req.user}, { contacts:1})
//     const token = jwt.sign({ _id, email, username, languageFromProfile }, JWTSECRET, { expiresIn: "24h" });
//     res.cookie('CookieUser', token);
// });
router.post('/logIn', (req, res) => __awaiter(this, void 0, void 0, function* () {
    // console.log('into facade axios version////////////////',req.body)
    yield axios_1.default.post('http://localhost:5001/api/logIn', { email: req.body.email, password: req.body.password }).then(function (response) {
        // console.log('connected succesfully', response.data)
        res.cookie('CookieUser', response.data);
        // res.end()
    }).catch(function (error) {
        console.log('failed to connect axios///////////////////////////', error, '/////////////////////////////');
    }).then(function () {
        console.log('got into the .then');
    });
    res.end();
}));
////////////////////////////// version with note fetch
// router.post('/logIn',async (req,res)=>{
//     console.log('into facade')
//     // const response = await fetch( serverConstant+'/api/logIn', {
//     //     method: 'post',
//     //     // credentials: 'include',
//     //     headers: { 'Content-Type': 'application/json' },
//     //     body:JSON.stringify(req.body)
//     // });
//     // let postData:any=req.body;
//     const options = {
//         hostname: 'http://localhost:5001',
//         port: 5001,
//         path: '/api/logIn',
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         //   'Content-Length': Buffer.byteLength(postData)
//         }
//       };
//       const req2 = http.request(options, (res2) => {
//         console.log(res2)
//         res2.pipe(res)
//     //     console.log(`STATUS: ${res.statusCode}`);
//     //     console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//     //     res.setEncoding('utf8');
//     //     res.on('data', (chunk) => {
//     //       console.log(`BODY: ${chunk}`);
//     //     });
//     //     res.on('end', () => {
//     //       console.log('No more data in response.');
//     //     });
//     //   });  
//     //   req.on('error', (e) => {
//     //     console.error(`problem with request: ${e.message}`);
//       });
//     //   // write data to request body
//     //   req2.write(postData);
//     //   req2.end();
//     })
exports.default = router;
