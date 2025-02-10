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
const path_1 = __importDefault(require("path"));
const tool_1 = require("../utils/tool");
const messageDao_1 = __importDefault(require("../dao/messageDao"));
const blogDao_1 = __importDefault(require("../dao/blogDao"));
const dir = path_1.default.join(__dirname, '../public/avatar');
// 添加留言或评论
const addMessage = (newMessage) => __awaiter(void 0, void 0, void 0, function* () {
    // 博客id
    newMessage.blogId = newMessage.blogId ? newMessage.blogId : null;
    // 时间戳
    newMessage.createDate = Date.now() + '';
    // 头像随机生成  读取 static/avatar 的头像
    const files = yield (0, tool_1.readDirLength)(dir);
    // 随机一个文件
    const randomIndex = Math.floor(Math.random() * files.length);
    newMessage.avatar = '/static/avatar/' + files[randomIndex];
    // 数据库新增
    const result = yield messageDao_1.default.addMessage(newMessage);
    // 如果是评论 对应的文章 评论数 也是需要增加的
    if (newMessage.blogId) {
        yield blogDao_1.default.addCommentNum(newMessage.blogId);
    }
    return result;
});
// 获取分页留言或评论
const findMessageByPage = (pageInfo) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const parsedQuery = {
        page: Number((_a = pageInfo.page) !== null && _a !== void 0 ? _a : 1),
        limit: Number((_b = pageInfo.limit) !== null && _b !== void 0 ? _b : 10),
        keyword: (_c = pageInfo.keyword) !== null && _c !== void 0 ? _c : '',
        blogId: pageInfo.blogId ? Number(pageInfo.blogId) : undefined, // 保持可选性
    };
    const result = yield messageDao_1.default.findMessageByPage(parsedQuery);
    return { rows: result.messages, total: result.total };
});
// 删除留言或评论
const delMessage = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = messageDao_1.default.delMessage(id);
    return result;
});
exports.default = {
    addMessage,
    findMessageByPage,
    delMessage,
};
//# sourceMappingURL=messageService.js.map