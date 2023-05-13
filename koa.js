const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  if (ctx.request.url === '/') {
    ctx.body = '<h1>xxx sayfasına hoşgeldiniz</h1>';
  } else if (ctx.request.url === '/hakkimda') {
    ctx.body = '<h1>xxx hakkında</h1>';
  } else if (ctx.request.url === '/iletisim') {
    ctx.body = '<h1>xxx iletişim</h1>';
  } else {
    ctx.status = 404;
    ctx.body = '<h1>Sayfa bulunamadı</h1>';
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
