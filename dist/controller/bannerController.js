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
const silentHandle_1 = __importDefault(require("../utils/silentHandle"));
const bannerService_1 = __importDefault(require("../service/bannerService"));
const commonRes_1 = __importDefault(require("../utils/commonRes"));
// 获取首页标语列表
const findBanner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, banner] = yield (0, silentHandle_1.default)(bannerService_1.default.findBanner, req.body);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, banner);
});
// 修改单个 id 标语
const updateBanner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bannerId } = req.params;
    const [e, banner] = yield (0, silentHandle_1.default)(bannerService_1.default.updateBanner, [bannerId, req.body]);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, banner, { message: '修改成功' });
});
exports.default = {
    findBanner,
    updateBanner,
};
//# sourceMappingURL=bannerController.js.map