import { defineConfig } from "tsup"

export default defineConfig({
	entry: {
		client: "src/client/index.ts",
		server: "src/server/index.ts",
	},
	format: "esm",
})
