"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firedumCreateUser = exports.firedumUpdate = exports.firedumAdd = void 0;
var firedumAdd_1 = __importDefault(require("./functions/firedumAdd"));
exports.firedumAdd = firedumAdd_1.default;
var firedumUpdate_1 = __importDefault(require("./functions/firedumUpdate"));
exports.firedumUpdate = firedumUpdate_1.default;
var firebaseCreateUser_1 = __importDefault(require("./functions/firebaseCreateUser"));
exports.firedumCreateUser = firebaseCreateUser_1.default;
//# sourceMappingURL=index.js.map