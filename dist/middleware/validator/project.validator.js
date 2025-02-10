"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const error_back_1 = __importDefault(require("./error.back"));
const project = (0, error_back_1.default)([
    (0, express_validator_1.body)('name').notEmpty().withMessage('项目名称不能为空 ~').bail(),
    (0, express_validator_1.body)('description').notEmpty().withMessage('描述不能为空 ~').bail(),
    (0, express_validator_1.body)('github').notEmpty().withMessage('项目地址不能为空 ~').bail(),
    (0, express_validator_1.body)('url').notEmpty().withMessage('项目地址不能为空 ~').bail(),
    (0, express_validator_1.body)('thumb').notEmpty().withMessage('缩略图不能为空 ~').bail(),
    (0, express_validator_1.body)('order')
        .notEmpty()
        .withMessage('排序字段不能为空 ~')
        .bail() // 检查是否为空
        .isNumeric()
        .withMessage('排序字段必须是大于等于 0 的整数 ~') // 检查是否为整数
        .toInt(), // 将字符串转换为整数
]);
exports.default = {
    project,
};
//# sourceMappingURL=project.validator.js.map