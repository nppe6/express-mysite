"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploadController_1 = __importDefault(require("../controller/uploadController"));
const jwt_1 = require("../middleware/jwt");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const upload = (0, multer_1.default)({ dest: path_1.default.resolve(__dirname, '../public/uploads') });
const uploadRouter = express_1.default.Router();
uploadRouter.post('/', (0, jwt_1.verifyToken)(), upload.array('file', 1), uploadController_1.default.upload);
exports.default = uploadRouter;
//# sourceMappingURL=upload.js.map