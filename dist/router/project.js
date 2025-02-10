"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_1 = require("../middleware/jwt");
const project_validator_1 = __importDefault(require("../middleware/validator/project.validator"));
const projectController_1 = __importDefault(require("../controller/projectController"));
const projectRouter = express_1.default.Router();
projectRouter
    .get('/', projectController_1.default.findAllDemo)
    .post('/', (0, jwt_1.verifyToken)(), project_validator_1.default.project, projectController_1.default.addDemo)
    .put('/:demoId', (0, jwt_1.verifyToken)(), project_validator_1.default.project, projectController_1.default.updateDemo)
    .delete('/:demoId', projectController_1.default.delDemo);
exports.default = projectRouter;
//# sourceMappingURL=project.js.map