"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const error_back_1 = __importDefault(require("./error.back"));
const about = (0, error_back_1.default)([(0, express_validator_1.body)('url').notEmpty().withMessage('地址不能为空')]);
exports.default = {
    about,
};
//# sourceMappingURL=about.validator.js.map