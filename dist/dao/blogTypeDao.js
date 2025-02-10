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
const logger_1 = __importDefault(require("../utils/logger"));
const addBlogType = (blogType) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.blogType.create({
        data: blogType,
        // select: {
        //   id: true,
        //   name: true,
        //   articleCount: true,
        //   order: true,
        // },
    });
});
const findAllBlogType = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.blogType.findMany({ where: {} });
});
const findOneBlogType = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.blogType.findFirst({ where: { id } });
});
const updateBlogType = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.blogType.update({ where: { id }, data });
});
const delBlogType = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.blogType.findFirst({ where: { id } });
    if (!data)
        throw new Error('该博客分类不存在');
    yield prisma_1.default.blog.updateMany({ where: { categoryId: id }, data: { categoryId: null } });
    return yield prisma_1.default.blogType.delete({ where: { id } });
});
// 根据id新增对应的文章博客分类
const addBlogToType = (typeId) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.blogType.findFirst({ where: { id: typeId } });
    if (data) {
        yield prisma_1.default.blogType.updateMany({
            where: { id: typeId },
            data: { articleCount: { increment: 1 } },
        });
        return;
    }
});
// 对 文章的分类 id 进行 文章数量的自减操作 该操作 是删除文章时候 使用
const delArticleCount = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield prisma_1.default.blogType.findFirst({
        where: { id: categoryId },
        select: { articleCount: true },
    });
    if (!category) {
        throw new Error('分类不存在');
    }
    if (category.articleCount <= 0) {
        throw new Error('articleCount 已经是 0，无需减少');
    }
    // 执行减一操作
    const result = yield prisma_1.default.blogType.updateMany({
        where: { id: categoryId },
        data: { articleCount: { increment: -1 } },
    });
    logger_1.default.warn(`成功减少 articleCount，更新记录数：${result.count}`);
    return result;
});
// 当文章 进行了修改对应的分类 就需要对分类 统计文章数量 进行自减
const delArticleNum = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.blogType.update({ where: { id: categoryId }, data: { articleCount: { decrement: 1 } } });
});
// 新修改的文章分类 那么对应的 文章数量 就需要 增加
const addArticleNum = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.blogType.update({ where: { id: categoryId }, data: { articleCount: { increment: 1 } } });
});
exports.default = {
    addBlogType,
    findAllBlogType,
    findOneBlogType,
    updateBlogType,
    delBlogType,
    addBlogToType,
    delArticleCount,
    delArticleNum,
    addArticleNum,
};
//# sourceMappingURL=blogTypeDao.js.map