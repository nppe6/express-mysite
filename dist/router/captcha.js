"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const captchaController_1 = __importDefault(require("../controller/captchaController"));
const captchaRouter = (0, express_1.Router)();
captchaRouter.get('/captcha', captchaController_1.default.getCaptcha);
exports.default = captchaRouter;
//# sourceMappingURL=captcha.js.map