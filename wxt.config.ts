import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: "Refined ChatGPT",
    host_permissions: ["*://chat.openai.com/*", "*://chatgpt.com/*"],
  },
});
