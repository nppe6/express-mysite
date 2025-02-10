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
// 获取关于我们url
const findAbout = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.about.findFirst({ where: {} });
});
// 设置关于我们url
const updateAbout = (newAboutInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield findAbout();
    if (!data)
        throw new Error('服务器错误数据查询失败 !');
    return yield prisma_1.default.about.update({ where: { id: data.id }, data: newAboutInfo });
});
exports.default = {
    findAbout,
    updateAbout,
};
//# sourceMappingURL=aboutDao.js.map