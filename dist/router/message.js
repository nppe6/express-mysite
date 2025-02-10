"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_validator_1 = __importDefault(require("../middleware/validator/message.validator"));
const messageController_1 = __importDefault(require("../controller/messageController"));
const messageRouter = (0, express_1.Router)();
messageRouter
    .post('/', message_validator_1.default.message, messageController_1.default.addMessage)
    .get('/', messageController_1.default.findMessageByPage)
    .delete('/:messageId', messageController_1.default.delMessage);
exports.default = messageRouter;
//# sourceMappingURL=message.js.map