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
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const upload = (file) => __awaiter(void 0, void 0, void 0, function* () {
    const files = file[0];
    const fileType = file[1];
    yield promises_1.default.rename(path_1.default.join(__dirname, '../public/uploads/') + files[0].filename, path_1.default.join(__dirname, '../public/uploads/') + files[0].filename + '.' + fileType);
    return files[0].filename + '.' + fileType;
});
exports.default = {
    upload,
};
//# sourceMappingURL=uploadService.js.map