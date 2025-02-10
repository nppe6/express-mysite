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
const settingService_1 = __importDefault(require("../service/settingService"));
// 获取全局配置
const findAllSetting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, setting] = yield (0, silentHandle_1.default)(settingService_1.default.findAllSetting, req.body);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, setting, { message: '获取成功' });
});
// 修改全局配置
const updateSetting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, setting] = yield (0, silentHandle_1.default)(settingService_1.default.updateSetting, req.body);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, setting, { message: '修改成功' });
});
exports.default = {
    updateSetting,
    findAllSetting,
};
//# sourceMappingURL=settingController.js.map