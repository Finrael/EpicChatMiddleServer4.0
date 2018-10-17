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
router.post('/setLanguage', (req, res) => __awaiter(this, void 0, void 0, function* () {
    // console.log('into facade axios version',req.body.language)
    axios_1.default.post('http://localhost:5002/api/setLanguage', {}, { headers: { cookie: req.headers.cookie, language: req.body.language } }).then(function (response) {
        console.log('connected succesfully to get contacts', response.data);
        res.json(response.data);
    }).catch(function (error) {
        console.log('failed to connect axios into athenticate');
    }).then(function () {
        console.log('got into the .then');
    });
}));
exports.default = router;
