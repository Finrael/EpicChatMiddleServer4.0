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
const socket_io_1 = __importDefault(require("socket.io"));
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const configFile_1 = require("./configFile");
// import * as mongoose1 from 'mongoose'
const router = express_1.default.Router();
function Config(server) {
    let aux;
    exports.io = socket_io_1.default(server);
    exports.io.use((socket, next) => __awaiter(this, void 0, void 0, function* () {
        yield axios_1.default.post(configFile_1.notificationServer_Api_Adress + '/getConversationId', {}, { headers: { cookie: socket.request.headers.cookie } }).then(function (response) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('connected succesfully to authenticate', '----------------------');
                console.log('this is the lenght of the data', response.data.contacts.length);
                // console.log('conversation data', UserData!.contacts[0].conversationId, '--------------------------------')
                for (let i = 0; response.data.contacts.length > i; i++) {
                    aux = response.data.contacts[i].conversationId.toString();
                    socket.join(aux);
                    console.log('this is aux', aux);
                }
                socket.join(response.data._id);
                next();
            });
        }).catch(function (error) {
            console.log('failed to connect axios into convId');
        });
        //    console.log('this*******************', socket.request.headers.cookie)
    }));
    exports.io.on('connection', (socket) => {
        // socket.on('ss',(data)=>{console.log('Socket component online')
        exports.io.emit('This is for some reason an event', 'this is to be send');
    });
}
exports.Config = Config;
