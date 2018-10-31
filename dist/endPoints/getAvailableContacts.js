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
router.use('/getAvailablecontacts', (req, res) => __awaiter(this, void 0, void 0, function* () {
    axios_1.default.post(configFile_1.notificationServer_Api_Adress + '/getAvailablecontacts', {}, { headers: { cookie: req.headers.cookie } }).then(function (response) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('connected succesfully to authenticate', response.data);
            res.json(response.data);
        });
    }).catch(function (error) {
        console.log('failed to connect axios into athenticate');
    }).then(function () {
        console.log('got into the .then');
    });
    // const listOfAvailableContacts = await User.findOne({_id: response.data._id}, {contacts:1})
    // .populate({
    //     path: 'contacts.contact',
    //     select: 'username  email'
    // })
    //  console.log('req.user: ',req.user)
    //  .populate({
    //      path: 'contacts.conversationId',
    //      select:  'participants creationTime',
    //      populate: {
    //          path: 'participants.participant',
    //          select: 'email, username'
    //      }});
    //  console.log('list from the populate for availablecontacts3:', listOfAvailableContacts)
    // res.json(listOfAvailableContacts);
}));
exports.default = router;
