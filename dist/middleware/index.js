"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_session_1 = __importDefault(require("express-session"));
const config_1 = __importDefault(require("config"));
function initMiddleware(app) {
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false })); // 解析传入的数据格式
    // 跨域 以及 日志信息打印
    app.use((0, cors_1.default)());
    app.use((0, morgan_1.default)('dev'));
    // session 配置
    app.use((0, express_session_1.default)({
        secret: config_1.default.get('session_secret'),
        resave: true,
        saveUninitialized: true,
    }));
}
exports.default = initMiddleware;
//# sourceMappingURL=index.js.map