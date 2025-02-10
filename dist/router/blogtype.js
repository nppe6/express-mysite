"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_1 = require("../middleware/jwt");
const blogType_validator_1 = __importDefault(require("../middleware/validator/blogType.validator"));
const blogTypeController_1 = __importDefault(require("../controller/blogTypeController"));
const blogtypeRouter = express_1.default.Router();
blogtypeRouter
    .post('/', (0, jwt_1.verifyToken)(), blogType_validator_1.default.blogType, blogTypeController_1.default.addBlogType)
    .get('/', blogTypeController_1.default.findAllBlogType)
    .get('/:typeId', blogTypeController_1.default.findOneBlogType)
    .put('/:typeId', (0, jwt_1.verifyToken)(), blogType_validator_1.default.blogType, blogTypeController_1.default.updateBlogType)
    .delete('/:typeId', (0, jwt_1.verifyToken)(), blogTypeController_1.default.delBlogType);
exports.default = blogtypeRouter;
//# sourceMappingURL=blogtype.js.map