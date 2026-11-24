import { Application, Router } from "@oak/oak";

// Builds the app without starting it, so tests can use it without opening a port.
export function createApp(): Application {
  const router = new Router();

  router.get("/api/health", (ctx) => {
    ctx.response.body = { status: "ok" };
  });

  const app = new Application();
  app.use(router.routes());
  app.use(router.allowedMethods());
  return app;
}
