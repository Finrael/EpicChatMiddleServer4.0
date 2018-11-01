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
const node_fetch_1 = __importDefault(require("node-fetch"));
const configFile_1 = require("../configFile");
router.post('/register', (req, res) => __awaiter(this, void 0, void 0, function* () {
    // console.log('req.body in postregister.ts', req.body)
    const response = yield node_fetch_1.default(configFile_1.authenticationServer_Api_Adress + '/registerUser', {
        method: 'post', body: JSON.stringify({
            username: req.body.username, email: req.body.email,
            password: req.body.password, language: req.body.language
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.status !== 200) {
        throw Error('error');
    }
    else {
        console.log('passed properly from postRegister.ts');
    }
    const user = yield response.json();
    // res.send(response)
    console.log('------------------------', user.user, '////////////////////////');
    const response2 = yield node_fetch_1.default(configFile_1.notificationServer_Api_Adress + '/addUserExtraInfo', {
        method: 'post', body: JSON.stringify({ _id: user.user,
            username: req.body.username, email: req.body.email,
            password: req.body.password, language: req.body.language,
            id: user.user,
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response2.status !== 200) {
        throw Error('error');
    }
    else {
        console.log('passed properly from postRegister.ts');
    }
    res.end();
}));
exports.default = router;
