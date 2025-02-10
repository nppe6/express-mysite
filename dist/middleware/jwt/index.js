"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const md5_1 = __importDefault(require("md5"));
const commonRes_1 = __importDefault(require("../../utils/commonRes"));
const generateToken = (payload, loginInfo = 1) => {
    // Bearer 是约定熟成 的一个前缀
    // payload 是传入函数内容 一般为用户的一些信息  密钥  加密方式 以及 token时效性
    return ('Bearer ' +
        jsonwebtoken_1.default.sign(payload, (0, md5_1.default)(config_1.default.get('secret_key')), {
            algorithm: 'HS512',
            expiresIn: 60 * 60 * 24 * loginInfo,
        }));
};
exports.generateToken = generateToken;
const verifyToken = (required = true) => {
    return (req, res, next) => {
        // 拿到token 信息
        let token = req.headers.authorization;
        token = token ? token.split(' ')[1] : null;
        // 判断是否有token
        if (token) {
            // 对 token 信息进行校验  需要拿到的token以及密钥 以及加密的方式
            jsonwebtoken_1.default.verify(token, (0, md5_1.default)(config_1.default.get('secret_key')), { algorithms: ['HS512'] }, (err, info) => {
                if (err) {
                    return commonRes_1.default.error(res, null, 'token失效或已过期！', 402);
                }
                else {
                    console.log('校验通过');
                    req.userInfo = info;
                    next();
                }
            });
        }
        else if (required) {
            return commonRes_1.default.error(res, null, 'token失效或已过期！', 402);
        }
        else {
            next();
        }
    };
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=index.js.map