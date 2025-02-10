"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const error_back_1 = __importDefault(require("./error.back"));
const prisma_1 = __importDefault(require("../../model/prisma"));
const blogType = (0, error_back_1.default)([
    (0, express_validator_1.body)('name')
        .notEmpty()
        .withMessage('文章类型不能为空 ~')
        .custom((val) => __awaiter(void 0, void 0, void 0, function* () {
        const blogType = yield prisma_1.default.blogType.findFirst({ where: { name: val } });
        if (blogType) {
            return Promise.reject('该文章类型已存在');
        }
    }))
        .bail(),
    (0, express_validator_1.body)('order').notEmpty().withMessage('排序等级不能为空 ~').toInt(), // 将字符串转换为整数,
]);
exports.default = {
    blogType,
};
//# sourceMappingURL=blogType.validator.js.map