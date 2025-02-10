"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerConf = void 0;
const about_1 = __importDefault(require("../about"));
const admin_1 = __importDefault(require("../admin"));
const banner_1 = __importDefault(require("../banner"));
const blog_1 = __importDefault(require("../blog"));
const blogtype_1 = __importDefault(require("../blogtype"));
const captcha_1 = __importDefault(require("../captcha"));
const message_1 = __importDefault(require("../message"));
const project_1 = __importDefault(require("../project"));
const setting_1 = __importDefault(require("../setting"));
const upload_1 = __importDefault(require("../upload"));
exports.routerConf = [
    { path: '/admin', router: admin_1.default },
    { path: '/res', router: captcha_1.default },
    { path: '/banner', router: banner_1.default },
    { path: '/uploads', router: upload_1.default },
    { path: '/blogtype', router: blogtype_1.default },
    { path: '/blog', router: blog_1.default },
    { path: '/project', router: project_1.default },
    { path: '/message', router: message_1.default },
    { path: '/comment', router: message_1.default },
    { path: '/setting', router: setting_1.default },
    { path: '/about', router: about_1.default },
];
//# sourceMappingURL=index.js.map