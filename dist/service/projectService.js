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
const projectDao_1 = __importDefault(require("../dao/projectDao"));
// 获取所有项目
const findAllDemo = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projectDao_1.default.findAllDemo();
    // 接下来就是 将 描述转换会成 数组的格式
    result.forEach((item) => (item.description = JSON.parse(item.description)));
    return result;
});
// 添加项目
const addDemo = (newDemoInfo) => __awaiter(void 0, void 0, void 0, function* () {
    // 首先就是 描述 我们传递 过来是一个数组 这时候我们需要转成字符串
    newDemoInfo.description = JSON.stringify(newDemoInfo.description);
    const result = yield projectDao_1.default.addDemo(newDemoInfo);
    return [result];
});
// 修改项目
const updateDemo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const id = data[0];
    const newDemoInfo = data[1];
    if (newDemoInfo.description) {
        // 对描述信息 由数组 转成字符串
        newDemoInfo.description = JSON.stringify(newDemoInfo.description);
    }
    const result = yield projectDao_1.default.updateDemo(id, newDemoInfo);
    // 接下来拿到数据 再将 描述转换会成 数组的格式
    result.description = JSON.parse(result.description);
    return result;
});
// 删除项目
const delDemo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projectDao_1.default.delDemo(id);
    return result;
});
exports.default = {
    findAllDemo,
    addDemo,
    updateDemo,
    delDemo,
};
//# sourceMappingURL=projectService.js.map