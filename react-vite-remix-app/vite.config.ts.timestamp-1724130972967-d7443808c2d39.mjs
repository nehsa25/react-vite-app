// vite.config.ts
import { vitePlugin as remix } from "file:///C:/src/react-vite-app/react-vite-remix-app/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///C:/src/react-vite-app/react-vite-remix-app/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///C:/src/react-vite-app/react-vite-remix-app/node_modules/vite-tsconfig-paths/dist/index.mjs";
import tailwindcss from "file:///C:/src/react-vite-app/react-vite-remix-app/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///C:/src/react-vite-app/react-vite-remix-app/node_modules/autoprefixer/lib/autoprefixer.js";
var vite_config_default = defineConfig({
  plugins: [
    tailwindcss(),
    autoprefixer(),
    remix({
      ignoredRouteFiles: ["**/*.css"]
    }),
    tsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxzcmNcXFxccmVhY3Qtdml0ZS1hcHBcXFxccmVhY3Qtdml0ZS1yZW1peC1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHNyY1xcXFxyZWFjdC12aXRlLWFwcFxcXFxyZWFjdC12aXRlLXJlbWl4LWFwcFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovc3JjL3JlYWN0LXZpdGUtYXBwL3JlYWN0LXZpdGUtcmVtaXgtYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgdml0ZVBsdWdpbiBhcyByZW1peCB9IGZyb20gXCJAcmVtaXgtcnVuL2RldlwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAndGFpbHdpbmRjc3MnO1xuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdGFpbHdpbmRjc3MoKSxcbiAgICBhdXRvcHJlZml4ZXIoKSxcbiAgICByZW1peCh7XG4gICAgICBpZ25vcmVkUm91dGVGaWxlczogW1wiKiovKi5jc3NcIl0sXG4gICAgfSksXG4gICAgdHNjb25maWdQYXRocygpLFxuICBdLFxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VCxTQUFTLGNBQWMsYUFBYTtBQUM1VixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGtCQUFrQjtBQUV6QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixhQUFhO0FBQUEsSUFDYixNQUFNO0FBQUEsTUFDSixtQkFBbUIsQ0FBQyxVQUFVO0FBQUEsSUFDaEMsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
