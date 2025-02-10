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
const blogDao_1 = __importDefault(require("../dao/blogDao"));
const blogTypeDao_1 = __importDefault(require("../dao/blogTypeDao"));
const addBlogType = (blogType) => __awaiter(void 0, void 0, void 0, function* () {
    blogType.articleCount = 0;
    const data = yield blogTypeDao_1.default.addBlogType(blogType);
    return data;
});
const findAllBlogType = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield blogTypeDao_1.default.findAllBlogType();
    data.sort((a, b) => a.order - b.order);
    return data;
});
const findOneBlogType = (typeId) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield blogTypeDao_1.default.findOneBlogType(typeId);
    return data;
});
const updateBlogType = (blogType) => __awaiter(void 0, void 0, void 0, function* () {
    const typeId = blogType[0];
    const data = blogType[1];
    const result = yield blogTypeDao_1.default.updateBlogType(typeId, data);
    return result;
});
const delBlogType = (typeId) => __awaiter(void 0, void 0, void 0, function* () {
    // 删除该分类  以后 受到影响的文章数
    const count = yield blogDao_1.default.blogCountByBlogType(typeId);
    // 执行删除 分类操作
    yield blogTypeDao_1.default.delBlogType(typeId);
    // 返回 受到影响的文章数量
    return count;
});
exports.default = {
    addBlogType,
    findAllBlogType,
    findOneBlogType,
    updateBlogType,
    delBlogType,
};
//# sourceMappingURL=blogTypeService.js.map