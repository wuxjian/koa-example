import Koa from 'koa'

export function errorHandler() {
    return async function (ctx: Koa.Context, next: () => Promise<void>) {
        try {
            await next()
        } catch (err: any) {
            ctx.status = err.status || 500
            ctx.body = {
                message: err.message
            }
        }
    }
}

