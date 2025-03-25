import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
  app.use(
    "/api/proxy",
    createProxyMiddleware({
      target: "https://f9ff.top",
      changeOrigin: true,
      pathRewrite: { "^/api/proxy": "" },
      headers: {
        "X-Frame-Options": "ALLOWALL",
      },
    })
  );
}
