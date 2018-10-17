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
router.post('/register', (req, res) => __awaiter(this, void 0, void 0, function* () {
    // console.log('req.body in postregister.ts', req.body)
    const response = yield node_fetch_1.default('http://localhost:5001/api/registerUser', {
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
    // res.send(response)
    const response2 = yield node_fetch_1.default('http://localhost:5002/api/addUserExtraInfo', {
        method: 'post', body: JSON.stringify({
            username: req.body.username, email: req.body.email,
            password: req.body.password, language: req.body.language
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
exports.default = router;
