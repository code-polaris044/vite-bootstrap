import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default {
	root: resolve(__dirname, "resources"),
	build: {
		outDir: "../public",
		rollupOptions: {
			output: {
				entryFileNames: "assets/js/[name].js",
				chunkFileNames: "assets/js/[name].js",
				assetFileNames: (assetInfo) => {
					if (assetInfo.name && assetInfo.name.endsWith(".css")) {
						return "assets/css/[name][extname]";
					}
					return "assets/[name][extname]";
				},
			},
		},
	},
	plugins: [
		viteStaticCopy({
			targets: [
				{ src: "fonts/*", dest: "assets/fonts" },
				{ src: "img/*", dest: "assets/img" },
			],
		}),
	],
	server: {
		port: 8080,
	},
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: ["import", "mixed-decls", "color-functions", "global-builtin"],
			},
		},
	},
};
