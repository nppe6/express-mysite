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
// 获取所有项目
const findAllDemo = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.demo.findMany({ where: {} });
});
// 添加项目
const addDemo = (newDemoInfo) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.demo.create({ data: newDemoInfo });
});
// 修改项目
const updateDemo = (id, newDemoInfo) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.demo.update({ where: { id }, data: newDemoInfo });
});
// 删除项目
const delDemo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.demo.findFirst({ where: { id } });
    if (!data)
        throw new Error('删除的项目 id 不存在');
    return yield prisma_1.default.demo.delete({ where: { id } });
});
exports.default = {
    findAllDemo,
    addDemo,
    updateDemo,
    delDemo,
};
//# sourceMappingURL=projectDao.js.map