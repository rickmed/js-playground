import Koa from 'koa'
const app = new Koa()

app.use(async function (ctx, next) {
  return ctx.body = 'returning on mw1'
  console.log('>> one');
  await next();
  console.log('<< one');
});

app.use(async function (ctx, next) {
  console.log('>> two');
  // ctx.body = 'two';
  await next();
  console.log('<< two');
});

app.use(async function (ctx, next) {
  await next();
  if (ctx.path === '/greetme') return ctx.body = 'Hi visitor'
  ctx.body = 'get out of here!'
});

app.listen({ port: 4500 }, function () { return console.log('server started'); })
