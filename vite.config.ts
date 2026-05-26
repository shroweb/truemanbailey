// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Point the plugin at wrangler.build.json (main: src/server.ts) so it builds
  // the real handler. wrangler.jsonc keeps main: dist/server/index.js for deploy.
  cloudflare: {
    viteEnvironment: { name: "ssr" },
    configPath: "wrangler.build.json",
  },
});
