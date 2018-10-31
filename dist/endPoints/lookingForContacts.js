"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const axios_1 = __importDefault(require("axios"));
const configFile_1 = require("../configFile");
router.use('/getContacts', (req, res) => {
    // console.log('into facade axios version', req.body.emailToLookFor)
    const emailToFilter = req.body.emailToLookFor;
    axios_1.default.post(configFile_1.notificationServer_Api_Adress + '/getContacts', {}, { headers: { cookie: req.headers.cookie, emailToLookFor: emailToFilter } }).then(function (response) {
        console.log('connected succesfully to authenticate', response.data);
        res.json(response.data);
    }).catch(function (error) {
        console.log('failed to connect axios into athenticate');
    }).then(function () {
        console.log('got into the .then');
    });
    //  console.log('getContacts log', req.user);
    //  console.log('req body',req.body.emailToLookFor)
    //  const query:any = User.find({email:req.body.query},{_id:1, email:1, name:1} )
    //  const query:any = User.find({email:new RegExp(req.body.emailToLookFor)},{_id:1, email:1, name:1} )
    //  query.exec((err:any,docs:any)=>{
    // if (err){
    //     return res.status(500).end('db error')
    // }
    // console.log(docs)
    // res.json(docs);
    // });
});
exports.default = router;
