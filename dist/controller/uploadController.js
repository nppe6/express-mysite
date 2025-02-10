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
const uploadService_1 = __importDefault(require("../service/uploadService"));
const upload = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // 上传上来的文件 经过前一个 中间件的处理 默认会将信息存储在 req.files 里面
    // 因为 我前面使用的 是array 的方式 是可以支持一次性传 多个值
    // 但是我限定了 最大值 为 1 所以我们这里直接取第一个数组内容即可
    // console.log(req.files)
    const fileArray = req.files && Array.isArray(req.files) ? req.files[0].originalname.split('.') : undefined;
    if (!fileArray)
        return commonRes_1.default.error(res, null, '未上传任何文件', 401);
    const fileType = fileArray[fileArray.length - 1];
    const [e, uploads] = yield (0, silentHandle_1.default)(uploadService_1.default.upload, [req.files, fileType]);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, uploads, { message: '上传成功' });
});
exports.default = {
    upload,
};
//# sourceMappingURL=uploadController.js.map