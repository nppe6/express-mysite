"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeMessage = exports.Code = void 0;
var Code;
(function (Code) {
    Code[Code["success"] = 3000] = "success";
    Code[Code["denied"] = 3001] = "denied";
    Code[Code["error"] = 3002] = "error";
})(Code || (exports.Code = Code = {}));
var CodeMessage;
(function (CodeMessage) {
    CodeMessage["success"] = "\u8BF7\u6C42\u6210\u529F";
    CodeMessage["denied"] = "\u65E0\u6743\u9650";
    CodeMessage["error"] = "\u8BF7\u6C42\u5931\u8D25";
})(CodeMessage || (exports.CodeMessage = CodeMessage = {}));
//# sourceMappingURL=code.js.map