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
const createBlog = (0, error_back_1.default)([
    (0, express_validator_1.body)('title')
        .notEmpty()
        .withMessage('文章标题不能为空 ~')
        .isLength({ max: 22 })
        .withMessage('文章标题最多为22个字符 ~')
        .bail(),
    (0, express_validator_1.body)('description').notEmpty().withMessage('描述不能为空 ~').bail(),
    (0, express_validator_1.body)('toc').notEmpty().withMessage('目录不能为空 ~').bail(),
    (0, express_validator_1.body)('htmlContent').notEmpty().withMessage('HTML 内容不能为空 ~').bail(),
    (0, express_validator_1.body)('thumb').notEmpty().withMessage('缩略图不能为空 ~').bail(),
    // body('scanNumber').notEmpty().withMessage('浏览数不能为空 ~').bail(),
    // body('commentNumber').notEmpty().withMessage('评论数不能为空 ~').bail(),
    (0, express_validator_1.body)('categoryId')
        .notEmpty()
        .withMessage('分类 ID不能为空 ~')
        .custom((val) => __awaiter(void 0, void 0, void 0, function* () {
        const categoryId = yield prisma_1.default.blogType.findFirst({ where: { id: val } });
        if (!categoryId) {
            return Promise.reject('该文章类型id不存在');
        }
    }))
        .bail(),
]);
exports.default = {
    createBlog,
};
//# sourceMappingURL=blog.validator.js.map