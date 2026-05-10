// Cloudflare Pages Function — runs on the edge.
// `request.cf` carries geo info that Cloudflare's network attaches
// to each request automatically. No build setup needed: any file
// under /functions/api/* becomes a route.
export const onRequestGet = (ctx: { request: Request }) => {
  const cf = (ctx.request as Request & { cf?: Record<string, unknown> }).cf ?? {}
  return new Response(
    JSON.stringify({
      city: cf.city ?? null,
      country: cf.country ?? null,
      colo: cf.colo ?? null,
    }),
    {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store',
      },
    },
  )
}
