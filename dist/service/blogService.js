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
const messageDao_1 = __importDefault(require("../dao/messageDao"));
const tool_1 = require("../utils/tool");
// 添加博客
const addBlog = (newBlogInfo) => __awaiter(void 0, void 0, void 0, function* () {
    // 先将 toc 转成字符串
    newBlogInfo = (0, tool_1.handleTOC)(newBlogInfo);
    // 接下来就是将处理好的  toc转成字符串格式
    newBlogInfo.toc = JSON.stringify(newBlogInfo.toc);
    // 初始化文章其他信息
    newBlogInfo.scanNumber = 0; // 阅读量初始化 为 0,
    newBlogInfo.commentNumber = 0; // 评论数初始化 为 0
    const data = yield blogDao_1.default.addBlog(newBlogInfo);
    // 这一步操作就是 当我文章添加了 对应的文章分类也应该需要增加
    if (data.categoryId) {
        yield blogTypeDao_1.default.addBlogToType(data.categoryId);
    }
    return data;
});
// 根据分页查询文章数据
const findBlogByPage = (pageInfo) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    // { page: '1', limit: '10', category: '1' }
    const parsedQuery = {
        page: Number((_a = pageInfo.page) !== null && _a !== void 0 ? _a : 1),
        limit: Number((_b = pageInfo.limit) !== null && _b !== void 0 ? _b : 10),
        keyword: (_c = pageInfo.keyword) !== null && _c !== void 0 ? _c : '',
        categoryId: pageInfo.categoryId ? Number(pageInfo.categoryId) : undefined, // 保持可选性
    };
    const data = yield blogDao_1.default.findBlogByPage(parsedQuery);
    // 这里有一个坑 就是转换的时候 会转换不出成对象 这里需要双重转换才可以
    const parsedRows = data.rows.map((item) => {
        const plainItem = JSON.parse(JSON.stringify(item)); // 转换为普通对象
        return Object.assign(Object.assign({}, plainItem), { toc: JSON.parse(JSON.parse(plainItem.toc || '""')) });
    });
    return Object.assign(Object.assign({}, data), { rows: parsedRows });
});
// 根据id 获取博客文章
const findOneBlog = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const id = data[0];
    const auth = data[1];
    const result = yield blogDao_1.default.findBlogById(id);
    if (result) {
        // 首先需要将 toc 转成一个正常的数组
        JSON.parse(JSON.stringify(result));
        result.toc = JSON.parse(JSON.parse(result.toc) || '""');
        // 根据前端判断是否 需要 将浏览数 增加
        if (!auth) {
            yield blogDao_1.default.addScanNum(result.id);
        }
        return result;
    }
    else {
        throw new Error('查询文章不存在');
    }
});
// 修改单个 博客文章
const updateBlog = (blog) => __awaiter(void 0, void 0, void 0, function* () {
    const blogId = blog[0];
    let data = blog[1];
    // 修改首先需要 判断 文章的内容正文是否有改变 有改变就需要重新 处理 Toc目录
    if (data.htmlContent) {
        // 进入 这里 表示输入的正文 是有改变的
        // 先将 toc 转成字符串
        data = (0, tool_1.handleTOC)(data);
        // 接下来就是将处理好的  toc转成字符串格式
        data.toc = JSON.stringify(data.toc);
    }
    // 这里 涉及到一个问题 就是 文章分类 有没有 修改 有的 话 之前的 就需要 自减
    // 新的文章分类 就要对应自增
    const oldBlogInfo = yield blogDao_1.default.findBlogById(blogId);
    if (data.categoryId !== (oldBlogInfo === null || oldBlogInfo === void 0 ? void 0 : oldBlogInfo.categoryId)) {
        // 如果进入了 这里就是表示 文章的分类进行了 修改 那么对应的文章前后 数量就都需要做修改
        // 旧的 分类 文章统计就是 自减
        if (oldBlogInfo === null || oldBlogInfo === void 0 ? void 0 : oldBlogInfo.categoryId) {
            yield blogTypeDao_1.default.delArticleNum(oldBlogInfo.categoryId);
        }
        // 新的分类 文章数 统计就是增加
        yield blogTypeDao_1.default.addArticleNum(data.categoryId);
    }
    const result = yield blogDao_1.default.updateBlog(blogId, data);
    return result;
});
// 删除博客文章
const delBlog = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    // 第一步 根据 id 查询 对应的文章 信息
    const data = yield blogDao_1.default.findBlogById(blogId);
    if (!data)
        throw new Error('该文章 id 信息不存在 ');
    // 第二步 需要对 对应的文章分类的文章数量 进行自减
    if (data.categoryId) {
        yield blogTypeDao_1.default.delArticleCount(data.categoryId);
    }
    // 第三步 就是该文章下的 所有评论一并进行删除
    yield messageDao_1.default.delMessageByBlogId(blogId);
    // 第四步 删除博客文章返回数据
    const result = yield blogDao_1.default.delBlog(blogId);
    return result;
});
exports.default = {
    addBlog,
    findBlogByPage,
    findOneBlog,
    updateBlog,
    delBlog,
};
//# sourceMappingURL=blogService.js.map