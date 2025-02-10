"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const error_back_1 = __importDefault(require("./error.back"));
const banner = (0, error_back_1.default)([
    (0, express_validator_1.body)('midImg').notEmpty().withMessage('不能为空 ~').bail(),
    (0, express_validator_1.body)('bigImg').notEmpty().withMessage('不能为空 ~').bail(),
    (0, express_validator_1.body)('title').notEmpty().withMessage('标题不能为空 ~').bail(),
    (0, express_validator_1.body)('description').notEmpty().withMessage('说明不能为空 ~').bail(),
]);
exports.default = {
    banner,
};
//# sourceMappingURL=banner.validator.js.map