"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const code_1 = require("../constants/code");
const logger_1 = __importDefault(require("./logger"));
function commonRes(res, data, options) {
    options = Object.assign({ type: code_1.Code[3000] }, options || {}); // 默认是 success
    const { type, status, message } = options;
    let resStatus = status;
    // 返回状态码
    if (resStatus === undefined) {
        resStatus = type === code_1.Code[3000] ? 200 : 409;
    }
    // 响应参数
    const sendRes = {
        code: code_1.Code[type],
        data,
    };
    message && (sendRes.message = message);
    res.status(resStatus).send(sendRes);
}
commonRes.denied = function (res, data) {
    this(res, data, {
        type: 'denied',
        message: code_1.CodeMessage['denied'],
        status: 401,
    });
};
commonRes.error = function (res, data, message, status) {
    logger_1.default.error(message || code_1.CodeMessage['error']);
    this(res, data, {
        type: 'error',
        message: message || code_1.CodeMessage['error'],
        status: status || 409,
    });
};
exports.default = commonRes;
//# sourceMappingURL=commonRes.js.map