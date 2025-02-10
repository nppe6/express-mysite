"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_1 = require("../middleware/jwt");
const blogController_1 = __importDefault(require("../controller/blogController"));
const blog_validator_1 = __importDefault(require("../middleware/validator/blog.validator"));
const blogRouter = express_1.default.Router();
blogRouter
    .post('/', (0, jwt_1.verifyToken)(), blog_validator_1.default.createBlog, blogController_1.default.addBlog)
    .get('/', blogController_1.default.findBlogByPage)
    .get('/:blogId', blogController_1.default.findOneBlog)
    .put('/:blogId', (0, jwt_1.verifyToken)(), blog_validator_1.default.createBlog, blogController_1.default.updateBlog)
    .delete('/:blogId', (0, jwt_1.verifyToken)(), blogController_1.default.delBlog);
exports.default = blogRouter;
//# sourceMappingURL=blog.js.map