"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedRouter = exports.unprotectedRouter = void 0;
const router_1 = __importDefault(require("@koa/router"));
const auth_1 = __importDefault(require("./controller/auth"));
const user_1 = __importDefault(require("./controller/user"));
const unprotectedRouter = new router_1.default();
exports.unprotectedRouter = unprotectedRouter;
// auth 相关的路由
unprotectedRouter.get('/auth/login', auth_1.default.login);
unprotectedRouter.get('/auth/register', auth_1.default.register);
const protectedRouter = new router_1.default();
exports.protectedRouter = protectedRouter;
// users 相关的路由
protectedRouter.get('/users', user_1.default.listUsers);
protectedRouter.get('/users/:id', user_1.default.showUserDetail);
protectedRouter.put('/users/:id', user_1.default.updateUser);
protectedRouter.delete('/users/:id', user_1.default.deleteUser);
