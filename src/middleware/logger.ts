import Koa from 'koa'

export const logger = () => {
    return async (ctx: Koa.Context, next: () => Promise<void>) => {
        let startTime = new Date().getTime()
        await next()
        let endTime = new Date().getTime()
        console.log(`${ctx.method} ${ctx.url} ${ctx.status} - ${endTime - startTime}ms`)
    }
}
