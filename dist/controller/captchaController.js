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
const captchaService_1 = __importDefault(require("../service/captchaService"));
const getCaptcha = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // 生成验证码
    const captcha = yield captchaService_1.default.getCaptcha();
    req.session.captcha = captcha.text;
    // 设置响应头
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(captcha.data);
});
exports.default = {
    getCaptcha,
};
//# sourceMappingURL=captchaController.js.map