"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const error_back_1 = __importDefault(require("./error.back"));
const login = (0, error_back_1.default)([
    (0, express_validator_1.body)('loginId')
        .notEmpty()
        .withMessage('账号不能为空 ~')
        .bail()
        .isLength({ min: 3 })
        .withMessage('账号最少为3个字符 ~')
        .bail(),
    (0, express_validator_1.body)('loginPwd')
        .notEmpty()
        .withMessage('密码不能为空 ~')
        .bail()
        .isLength({ min: 6 })
        .withMessage('密码最少为6个字符 ~')
        .bail(),
]);
const updateAdmin = (0, error_back_1.default)([
    (0, express_validator_1.body)('name')
        .notEmpty()
        .withMessage('名称不能为空 ~')
        .bail()
        .isLength({ min: 3 })
        .withMessage('名称最少为3个字符 ~')
        .bail(),
    (0, express_validator_1.body)('loginId')
        .notEmpty()
        .withMessage('账号不能为空 ~')
        .bail()
        .isLength({ min: 3 })
        .withMessage('账号最少为3个字符 ~')
        .bail(),
    (0, express_validator_1.body)('loginPwd')
        .notEmpty()
        .withMessage('密码不能为空 ~')
        .bail()
        .isLength({ min: 6 })
        .withMessage('密码最少为6个字符 ~')
        .bail(),
    (0, express_validator_1.body)('oldLoginPwd')
        .notEmpty()
        .withMessage('二次输入密码不能为空 ~')
        .bail()
        .isLength({ min: 6 })
        .withMessage('密码最少为6个字符 ~')
        .bail(),
]);
exports.default = {
    login: login,
    updateAdmin: updateAdmin,
};
//# sourceMappingURL=admin.validator.js.map