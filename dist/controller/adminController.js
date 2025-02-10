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
const commonRes_1 = __importDefault(require("../utils/commonRes"));
const silentHandle_1 = __importDefault(require("../utils/silentHandle"));
const adminService_1 = __importDefault(require("../service/adminService"));
// 登录controller
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // 首先是验证码 逻辑进行验证
    if (req.body.captcha.toLowerCase() !== ((_a = req.session.captcha) === null || _a === void 0 ? void 0 : _a.toLowerCase())) {
        return commonRes_1.default.error(res, null, '验证码错误', 401);
    }
    // 下面是验证码逻辑正确后
    const [e, user] = yield (0, silentHandle_1.default)(adminService_1.default.login, req.body);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, user, { message: '登录成功' });
});
// 恢复登录 controller
const whoami = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.userInfo, { exp, iat, loginPwd } = _a, data = __rest(_a, ["exp", "iat", "loginPwd"]);
    return (0, commonRes_1.default)(res, data);
});
// 更新用户信息接口
const updateAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, user] = yield (0, silentHandle_1.default)(adminService_1.default.updateAdmin, req.body);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, user, { message: '修改信息成功' });
});
exports.default = {
    login,
    whoami,
    updateAdmin,
};
//# sourceMappingURL=adminController.js.map