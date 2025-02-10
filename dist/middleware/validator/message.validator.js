"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const error_back_1 = __importDefault(require("./error.back"));
const message = (0, error_back_1.default)([
    (0, express_validator_1.body)('nickname').notEmpty().withMessage('名称不能为空 ~').bail(),
    (0, express_validator_1.body)('content').notEmpty().withMessage('内容不能为空 ~').bail(),
]);
exports.default = {
    message,
};
//# sourceMappingURL=message.validator.js.map