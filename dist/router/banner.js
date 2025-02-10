"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bannerController_1 = __importDefault(require("../controller/bannerController"));
const banner_validator_1 = __importDefault(require("../middleware/validator/banner.validator"));
const jwt_1 = require("../middleware/jwt");
const bannerRouter = (0, express_1.Router)();
bannerRouter
    .get('/', bannerController_1.default.findBanner)
    .post('/:bannerId', (0, jwt_1.verifyToken)(), banner_validator_1.default.banner, bannerController_1.default.updateBanner);
exports.default = bannerRouter;
//# sourceMappingURL=banner.js.map