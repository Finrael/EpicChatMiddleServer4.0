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
const SocketConfig_1 = require("../SocketConfig");
const axios_1 = __importDefault(require("axios"));
const configFile_1 = require("../configFile");
router.use('/message', (req, res) => __awaiter(this, void 0, void 0, function* () {
    //  console.log('from authenticate getProfile ',req.user);
    // console.log('messageS:', req.body.convId)
    axios_1.default.post(configFile_1.notificationServer_Api_Adress + '/message', {}, { headers: { cookie: req.headers.cookie, convId: req.body.convId, textMessage: req.body.textMessage } }).then(function (response) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('connected succesfully to authenticate', response.data);
            SocketConfig_1.io.to(response.data.convId).emit('newMessage', response.data.message);
            res.json(response.data.message);
        });
    }).catch(function (error) {
        console.log('failed to connect axios into convId');
    }).then(function () {
        console.log('got into the .then');
    });
}));
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
exports.default = router;
