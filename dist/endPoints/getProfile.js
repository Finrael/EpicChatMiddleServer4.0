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
// imports
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const axios_1 = __importDefault(require("axios"));
const configFile_1 = require("../configFile");
router.use('/authenticate', (req, res) => __awaiter(this, void 0, void 0, function* () {
    // console.log('from authenticate getProfile ',req.user);
    // debugger
    // console.log('ON REQ.COOKIES',req.cookies)
    // req.headers= req.cookies
    // console.log(req.signedCookies)
    yield axios_1.default.post(configFile_1.authenticationServer_Api_Adress + '/authenticate', {}, { headers: { cookie: req.headers.cookie } }).then(function (response) {
        // console.log('dsf///////////////////////////////')
        // console.log('ddddddddddddddddddddd',response.data,'dddddddddddddddddddddddddddddd')
        const toSend = { name: response.data.username, email: response.data.email, contacts: response.data.contacts, language: response.data.language };
        res.json(toSend);
    }).catch(function (error) {
        console.log('//////////////////////error on axios on get profile');
        res.json({ d: false });
    });
    // const dataFromProfile = await User.findOne({_id: req.user}, {username:1, email:1, contacts:1, language:1})
    // // console.log('datafromProfile', dataFromProfile)
    // res.json(dataFromProfile);
    // 
}));
exports.default = router;
