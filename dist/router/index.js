"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const module_1 = require("./module");
const API_PREFIX = config_1.default.get('api_url');
function routes(app) {
    app.get('/', (req, res) => {
        res.status(200).send('hello MR.Xiao');
    });
    module_1.routerConf.forEach((route) => {
        app.use(`${API_PREFIX}${route.path}`, route.router);
    });
}
exports.default = routes;
//# sourceMappingURL=index.js.map