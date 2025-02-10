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
const commonRes_1 = __importDefault(require("../utils/commonRes"));
const projectService_1 = __importDefault(require("../service/projectService"));
// 获取所有项目
const findAllDemo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, demo] = yield (0, silentHandle_1.default)(projectService_1.default.findAllDemo, req.body);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, demo, { message: '获取成功' });
});
// 新增项目
const addDemo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, demo] = yield (0, silentHandle_1.default)(projectService_1.default.addDemo, req.body);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, demo, { message: '添加成功' });
});
// 修改项目
const updateDemo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, demo] = yield (0, silentHandle_1.default)(projectService_1.default.updateDemo, [Number(req.params.demoId), req.body]);
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, demo, { message: '修改成功' });
});
// 删除项目
const delDemo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [e, demo] = yield (0, silentHandle_1.default)(projectService_1.default.delDemo, Number(req.params.demoId));
    return e ? commonRes_1.default.error(res, null, e.message) : (0, commonRes_1.default)(res, null, { message: '删除成功' });
});
exports.default = {
    findAllDemo,
    addDemo,
    updateDemo,
    delDemo,
};
//# sourceMappingURL=projectController.js.map