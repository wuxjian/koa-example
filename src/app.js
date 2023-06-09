"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const cors_1 = __importDefault(require("@koa/cors"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const logger_1 = require("./middleware/logger");
const koa_jwt_1 = __importDefault(require("koa-jwt"));
const constants_1 = require("./constants");
const routers_1 = require("./routers");
const error_handler_1 = require("./middleware/error-handler");
const app = new koa_1.default();
// 注册中间件
app.use((0, cors_1.default)());
app.use((0, koa_bodyparser_1.default)());
app.use((0, logger_1.logger)());
app.use((0, error_handler_1.errorHandler)());
app.use(routers_1.unprotectedRouter.routes()).use(routers_1.unprotectedRouter.allowedMethods());
app.use((0, koa_jwt_1.default)({ secret: constants_1.JWT_SECRET }));
app.use(routers_1.protectedRouter.routes()).use(routers_1.protectedRouter.allowedMethods());
app.listen(3000, () => {
    console.log('listen at 3000 success!');
});
