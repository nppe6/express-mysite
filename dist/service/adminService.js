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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const argon2_1 = require("argon2");
const adminDao_1 = __importDefault(require("../dao/adminDao"));
const jwt_1 = require("../middleware/jwt");
// 登录
const login = (loginInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const password = loginInfo.loginPwd;
    loginInfo.loginPwd = yield (0, argon2_1.hash)(loginInfo.loginPwd);
    let adminUser = yield adminDao_1.default.loginDao(loginInfo);
    if (!adminUser)
        throw new Error('用户不存在'); // 抛出错误
    const loginPassword = yield (0, argon2_1.verify)(adminUser.loginPwd, password);
    if (!loginPassword)
        throw new Error('密码输入错误');
    // 这一步是 进行token 过期事件的传递设置的 操作
    let loginPeriod = null;
    if (loginInfo.remember) {
        loginPeriod = Number(loginInfo.remember);
    }
    else {
        loginPeriod = 1;
    }
    // 生成 token
    const token = (0, jwt_1.generateToken)(adminUser, loginPeriod);
    // 提取 将 密码 进行去除出去 生成一个新的对象 进行返回
    const { loginPwd } = adminUser, data = __rest(adminUser, ["loginPwd"]);
    return Object.assign(Object.assign({}, data), { token });
});
// 修改信息
const updateAdmin = (accountInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const password = accountInfo.oldLoginPwd;
    accountInfo.oldLoginPwd = yield (0, argon2_1.hash)(accountInfo.oldLoginPwd);
    const data = yield adminDao_1.default.adminDao(accountInfo);
    if (!data)
        throw new Error('用户信息不存在'); // 抛出错误
    const loginPassword = yield (0, argon2_1.verify)(data.loginPwd, password);
    if (!loginPassword)
        throw new Error('旧密码输入错误');
    // 密码正确 开始修改
    // 组装新的对象信息
    const newPassword = yield (0, argon2_1.hash)(accountInfo.loginPwd);
    const result = yield adminDao_1.default.updateDao({
        name: accountInfo.name,
        loginId: accountInfo.loginId,
        loginPwd: newPassword,
        oldLoginPwd: accountInfo.oldLoginPwd,
    }, data.id);
    return result;
});
exports.default = {
    login,
    updateAdmin,
};
//# sourceMappingURL=adminService.js.map