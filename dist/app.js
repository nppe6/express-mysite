"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const logger_1 = __importDefault(require("./utils/logger"));
const config_1 = __importDefault(require("config"));
const middleware_1 = __importDefault(require("./middleware"));
const app = (0, express_1.default)();
// 挂载中间件
(0, middleware_1.default)(app);
const PORT = config_1.default.get('port');
app.listen(PORT, () => {
    logger_1.default.info(`App is running at http://127.0.0.1:${PORT}`);
    (0, router_1.default)(app);
});
//# sourceMappingURL=app.js.map