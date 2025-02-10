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
const svg_captcha_1 = __importDefault(require("svg-captcha"));
const getCaptcha = () => __awaiter(void 0, void 0, void 0, function* () {
    const captcha = svg_captcha_1.default.create({
        size: 4, // 生成的 字符个数
        ignoreChars: 'iIl10Oo', // 过滤掉的字符
        noise: 6, // 干扰线
        color: true, // 颜色是否打开
    });
    return captcha;
});
exports.default = {
    getCaptcha,
};
//# sourceMappingURL=captchaService.js.map