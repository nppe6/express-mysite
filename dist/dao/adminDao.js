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
const loginDao = (loginInfo) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.admin.findUnique({
        where: {
            loginID: loginInfo.loginId,
        },
        select: {
            id: true,
            name: true,
            loginID: true,
            loginPwd: true,
        },
    });
});
const adminDao = (accountInfo) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.admin.findUnique({
        where: {
            loginID: accountInfo.loginId,
        },
    });
});
const updateDao = (newAccountInfo, id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.admin.update({
        where: {
            id,
        },
        data: {
            name: newAccountInfo.name,
            loginID: newAccountInfo.loginId,
            loginPwd: newAccountInfo.loginPwd,
        },
        select: {
            id: true,
            name: true,
            loginID: true,
        },
    });
});
exports.default = {
    loginDao,
    adminDao,
    updateDao,
};
//# sourceMappingURL=adminDao.js.map