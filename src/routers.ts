import Router from '@koa/router';

import AuthController from './controller/auth'

import UserController from './controller/user'

const unprotectedRouter = new Router();

// auth 相关的路由
unprotectedRouter.get('/auth/login', AuthController.login);
unprotectedRouter.get('/auth/register', AuthController.register);


const protectedRouter = new Router();

// users 相关的路由
protectedRouter.get('/users', UserController.listUsers);
protectedRouter.get('/users/:id', UserController.showUserDetail);
protectedRouter.put('/users/:id', UserController.updateUser);
protectedRouter.delete('/users/:id', UserController.deleteUser);

export  {
    unprotectedRouter, protectedRouter
};