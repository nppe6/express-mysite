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
const prisma_1 = __importDefault(require("../model/prisma"));
// 添加留言或是评论
const addMessage = (newMessage) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.message.create({ data: newMessage });
});
// 分页获取留言或是评论
const findMessageByPage = (pageInfo) => __awaiter(void 0, void 0, void 0, function* () {
    // 这里是根据 blogId进行区分看是 留言还是 评论
    if (pageInfo.blogId) {
        // 两种情况
        // 1、获取 所有的评论 pageInfo.blogId === -1
        // 2、以及 根据某篇文章获取对应的 评论
        if (pageInfo.blogId === -1) {
            const [messages, total] = yield Promise.all([
                prisma_1.default.message.findMany({
                    where: {
                        blogId: {
                            not: null, // 用于查找 blogId 不为 null 的记录
                        },
                    },
                    include: {
                        blog: true, // Prisma 使用模型名称直接嵌套来进行关联查询
                    },
                    skip: (pageInfo.page * 1 - 1) * pageInfo.limit, // 分页：跳过 n 条
                    take: pageInfo.limit * 1, // 取 n 条数据
                }),
                prisma_1.default.message.count({
                    where: {
                        blogId: {
                            not: null, // 用于查找 blogId 不为 null 的记录
                        },
                    },
                }),
            ]);
            return { messages, total };
        }
        else {
            const [messages, total] = yield Promise.all([
                prisma_1.default.message.findMany({
                    where: {
                        blogId: pageInfo.blogId * 1,
                    },
                    orderBy: {
                        createAt: 'desc',
                    },
                    skip: (pageInfo.page * 1 - 1) * pageInfo.limit, // 分页：跳过 n 条
                    take: pageInfo.limit * 1, // 取 n 条数据
                }),
                prisma_1.default.message.count({
                    where: {
                        blogId: pageInfo.blogId * 1,
                    },
                }),
            ]);
            return { messages, total };
        }
    }
    else {
        // 根据分页获取留言
        const [messages, total] = yield Promise.all([
            prisma_1.default.message.findMany({
                where: {
                    blogId: null,
                },
                orderBy: {
                    createAt: 'desc',
                },
                skip: (pageInfo.page * 1 - 1) * pageInfo.limit, // 分页：跳过 n 条
                take: pageInfo.limit * 1, // 取 n 条数据
            }),
            prisma_1.default.message.count({
                where: {
                    blogId: null,
                },
            }),
        ]);
        return { messages, total };
    }
});
// 删除留言或是评论
const delMessage = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.message.findFirst({ where: { id } });
    if (!data)
        throw new Error('服务器错误，删除失败 ');
    return yield prisma_1.default.message.delete({ where: { id } });
});
// 删除评论 这里接收的 是文章的 id  是关联的 blogId
const delMessageByBlogId = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.message.deleteMany({ where: { blogId } });
});
exports.default = {
    addMessage,
    findMessageByPage,
    delMessage,
    delMessageByBlogId,
};
//# sourceMappingURL=messageDao.js.map