"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwt_1 = require("../middleware/jwt");
const aboutController_1 = __importDefault(require("../controller/aboutController"));
const about_validator_1 = __importDefault(require("../middleware/validator/about.validator"));
const aboutRouter = (0, express_1.Router)();
aboutRouter
    .get('/', aboutController_1.default.findAbout)
    .post('/', (0, jwt_1.verifyToken)(), about_validator_1.default.about, aboutController_1.default.updateAbout);
exports.default = aboutRouter;
//# sourceMappingURL=about.js.map