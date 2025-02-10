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
const settingDao_1 = __importDefault(require("../dao/settingDao"));
// 获取全局配置
const findAllSetting = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield settingDao_1.default.findAllSetting();
    return result;
});
// 修改全局配置
const updateSetting = (newSetting) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield settingDao_1.default.updateSetting(newSetting);
    return result;
});
exports.default = {
    updateSetting,
    findAllSetting,
};
//# sourceMappingURL=settingService.js.map