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
const blogTypeService_1 = __importDefault(require("../service/blogTypeService"));
// 添加博客分类
const addBlogType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, blogType] = yield (0, silentHandle_1.default)(blogTypeService_1.default.addBlogType, req.body);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, blogType, { message: '添加成功' });
});
// 获取博客分类
const findAllBlogType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, blogType] = yield (0, silentHandle_1.default)(blogTypeService_1.default.findAllBlogType, req.body);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, blogType, { message: '获取成功' });
});
// 获取单个博客分类
const findOneBlogType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, blogType] = yield (0, silentHandle_1.default)(blogTypeService_1.default.findOneBlogType, Number(req.params.typeId));
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, blogType, { message: '获取成功' });
});
// 修改博客分类
const updateBlogType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, blogType] = yield (0, silentHandle_1.default)(blogTypeService_1.default.updateBlogType, [Number(req.params.typeId), req.body]);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, blogType, { message: '修改成功' });
});
// 删除博客分类
const delBlogType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, blogType] = yield (0, silentHandle_1.default)(blogTypeService_1.default.delBlogType, Number(req.params.typeId));
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, blogType, { message: '删除成功' });
});
exports.default = {
    addBlogType,
    findAllBlogType,
    findOneBlogType,
    updateBlogType,
    delBlogType,
};
//# sourceMappingURL=blogTypeController.js.map