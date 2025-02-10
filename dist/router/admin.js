"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = __importDefault(require("../controller/adminController"));
const admin_validator_1 = __importDefault(require("../middleware/validator/admin.validator"));
const jwt_1 = require("../middleware/jwt");
const adminRouter = (0, express_1.Router)();
adminRouter
    .post('/login', admin_validator_1.default.login, adminController_1.default.login)
    .get('/whoami', (0, jwt_1.verifyToken)(), adminController_1.default.whoami)
    .put('/', (0, jwt_1.verifyToken)(), admin_validator_1.default.updateAdmin, adminController_1.default.updateAdmin);
exports.default = adminRouter;
//# sourceMappingURL=admin.js.map