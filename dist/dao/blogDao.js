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
// 添加文章
const addBlog = (newBlogInfo) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.blog.create({
        data: newBlogInfo,
    });
});
// 根据分页查询文章
const findBlogByPage = (pageInfo) => __awaiter(void 0, void 0, void 0, function* () {
    if (pageInfo.categoryId) {
        // 查看是否有分类 id 有 我们就按照分类查询
        const [blogs, total] = yield Promise.all([
            prisma_1.default.blog.findMany({
                include: {
                    blogType: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
                where: {
                    categoryId: pageInfo.categoryId,
                },
                orderBy: {
                    createAt: 'desc',
                },
                skip: (pageInfo.page * 1 - 1) * pageInfo.limit, // 分页：跳过 n 条
                take: pageInfo.limit * 1, // 取 n 条数据
            }),
            prisma_1.default.blog.count({
                where: {
                    categoryId: pageInfo.categoryId,
                },
            }),
        ]);
        return { rows: blogs, total };
    }
    else {
        // 否则就是按照 全部进行分页查询
        const [blogs, total] = yield Promise.all([
            prisma_1.default.blog.findMany({
                include: {
                    blogType: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
                where: {},
                orderBy: {
                    createAt: 'desc',
                },
                skip: (pageInfo.page * 1 - 1) * pageInfo.limit, // 分页：跳过 n 条
                take: pageInfo.limit * 1, // 取 n 条数据
            }),
            prisma_1.default.blog.count({
                where: {},
            }),
        ]);
        return { rows: blogs, total };
    }
});
// 根据 id 获取博客文章
const findBlogById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.blog.findFirst({
        include: {
            blogType: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
        where: { id },
        orderBy: {
            createAt: 'desc',
        },
    });
});
// 对 浏览数 进行增加处理
const addScanNum = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.blog.update({ where: { id }, data: { scanNumber: { increment: 1 } } });
    return;
});
// 根据 id 对博客文章进行修改
const updateBlog = (id, newBlogInfo) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.blog.update({ where: { id }, data: newBlogInfo });
});
// 删除文章
const delBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.blog.delete({ where: { id } });
});
// 对文章的评论数进行增加
const addCommentNum = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.blog.update({ where: { id }, data: { commentNumber: { increment: 1 } } });
});
// 根据博客分类 id  获取对应的文章数量
const blogCountByBlogType = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.blog.count({
        where: {
            categoryId,
        },
    });
});
exports.default = {
    addBlog,
    findBlogByPage,
    findBlogById,
    addScanNum,
    updateBlog,
    delBlog,
    addCommentNum,
    blogCountByBlogType,
};
//# sourceMappingURL=blogDao.js.map