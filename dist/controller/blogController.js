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
const silentHandle_1 = __importDefault(require("../utils/silentHandle"));
const commonRes_1 = __importDefault(require("../utils/commonRes"));
const blogService_1 = __importDefault(require("../service/blogService"));
// 添加博客
const addBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, blog] = yield (0, silentHandle_1.default)(blogService_1.default.addBlog, req.body);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, blog, { message: '添加成功' });
});
// 根据分页查询文章数据
const findBlogByPage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, blog] = yield (0, silentHandle_1.default)(blogService_1.default.findBlogByPage, req.query);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, blog, { message: '获取成功' });
});
// 获取单个博客文章数据
const findOneBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqHeaders = req.headers;
    const [e, blog] = yield (0, silentHandle_1.default)(blogService_1.default.findOneBlog, [Number(req.params.blogId), reqHeaders.authorization]);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, blog, { message: '获取成功' });
});
// 修改博客文章
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, blog] = yield (0, silentHandle_1.default)(blogService_1.default.updateBlog, [Number(req.params.blogId), req.body]);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, blog, { message: '修改成功' });
});
// 删除博客文章
const delBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, blog] = yield (0, silentHandle_1.default)(blogService_1.default.delBlog, Number(req.params.blogId));
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, null, { message: '删除成功' });
});
exports.default = {
    addBlog,
    findBlogByPage,
    findOneBlog,
    updateBlog,
    delBlog,
};
//# sourceMappingURL=blogController.js.map