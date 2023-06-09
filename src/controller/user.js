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
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    static listUsers(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.body = 'ListUsers controller';
        });
    }
    static showUserDetail(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.body = `ShowUserDetail controller with ID = ${ctx.params.id}`;
        });
    }
    static updateUser(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.body = `UpdateUser controller with ID = ${ctx.params.id}`;
        });
    }
    static deleteUser(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.body = `DeleteUser controller with ID = ${ctx.params.id}`;
        });
    }
}
exports.default = UserController;
