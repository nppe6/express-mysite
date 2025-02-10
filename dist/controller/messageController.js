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
const commonRes_1 = __importDefault(require("../utils/commonRes"));
const silentHandle_1 = __importDefault(require("../utils/silentHandle"));
const messageService_1 = __importDefault(require("../service/messageService"));
// 添加留言或评论
const addMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, message] = yield (0, silentHandle_1.default)(messageService_1.default.addMessage, req.body);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, message, { message: '添加成功' });
});
// 分页获取留言或评论
const findMessageByPage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, message] = yield (0, silentHandle_1.default)(messageService_1.default.findMessageByPage, req.query);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, message, { message: '获取成功' });
});
// 删除留言或评论
const delMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, message] = yield (0, silentHandle_1.default)(messageService_1.default.delMessage, Number(req.params.messageId));
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, null, { message: '删除成功' });
});
exports.default = {
    addMessage,
    findMessageByPage,
    delMessage,
};
//# sourceMappingURL=messageController.js.map