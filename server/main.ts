import { createApp } from "./app.ts";

const PORT = 8000;

const app = createApp();
console.log(`Server running on http://localhost:${PORT}`);
await app.listen({ port: PORT });
