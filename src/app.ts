import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser';
import { logger } from './middleware/logger'
import jwt from 'koa-jwt';
import { JWT_SECRET } from './constants';
import { protectedRouter, unprotectedRouter } from './routers'
import { errorHandler } from './middleware/error-handler'


const app = new Koa()

// 注册中间件
app.use(cors())
app.use(bodyParser())
app.use(logger())
app.use(errorHandler())


app.use(unprotectedRouter.routes()).use(unprotectedRouter.allowedMethods())

app.use(jwt({ secret: JWT_SECRET }))

app.use(protectedRouter.routes()).use(protectedRouter.allowedMethods());

app.listen(3000, () => {
    console.log('listen at 3000 success!')
})