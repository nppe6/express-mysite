"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const settingController_1 = __importDefault(require("../controller/settingController"));
const jwt_1 = require("../middleware/jwt");
const settingRouter = (0, express_1.Router)();
settingRouter.get('/', settingController_1.default.findAllSetting).put('/', (0, jwt_1.verifyToken)(), settingController_1.default.updateSetting);
exports.default = settingRouter;
//# sourceMappingURL=setting.js.map