// パスを扱うNode.jsの標準モジュール
import { resolve } from "path";
// 静的ファイル（画像やフォントなど）をコピーするViteプラグイン
import { viteStaticCopy } from "vite-plugin-static-copy";
// Sass（SCSS）の最新コンパイラと、その情報取得API
import { NodePackageImporter, info as sassEmbeddedInfo } from "sass-embedded";

// sass-embedded apiが使用できているか確認
console.log("=== sass-embedded info ===");
console.log(sassEmbeddedInfo);
console.log("==========================");

// HTMLから crossOrigin 属性を削除するカスタムプラグイン
const noCrossOrigin = () => {
	return {
		name: "no-crossorigin",
		transformIndexHtml(html) {
			return html.replace(/ crossorigin/g, "");
		},
	};
};

export default {
	// 出力ファイルのパスを相対パスにする
	base: "./",
	//viteの静的ファイルの置き場所の名前がpublicなの重複解除
	publicDir: false,
	// ビルド設定
	build: {
		sourcemap: true,
		// 画像やフォントなどをbase64埋め込みせず、必ずファイルとして出力
		assetsInlineLimit: 0,
		// ビルド成果物の出力先フォルダ（resourcesの一つ上の "public" フォルダ）
		outDir: "./public",
		// ビルド前に出力先フォルダを空にしない(systemがあるため)
		emptyOutDir: false,
		// modulepreloadポリフィルを無効化
		modulePreload: false,
		// vite内部で使用されているrollup設定オプション
		rollupOptions: {
			input: {
				//既存js
				common: resolve(__dirname, "resources/js/common.js"),
				//新規js Bootstrapカスタム
				script: resolve(__dirname, "resources/js/script.js"),
				//既存css
				commo: resolve(__dirname, "resources/scss/common.scss"),
				contents: resolve(__dirname, "resources/scss/contents.scss"),
				flatpickr: resolve(__dirname, "resources/scss/flatpickr.scss"),
				home: resolve(__dirname, "resources/scss/home.scss"),
				staff: resolve(__dirname, "resources/scss/staff.scss"),
				user: resolve(__dirname, "resources/scss/user.scss"),
				telework: resolve(__dirname, "resources/scss/telework.scss"),
				system: resolve(__dirname, "resources/scss/system/system.scss"),
				//新規css Bootstrapカスタム
				styles: resolve(__dirname, "resources/scss/styles.scss"),
				bootstrap: resolve(__dirname, "resources/scss/bootstrap.scss"),
			},
			output: {
				// JSファイルの出力設定
				entryFileNames: "assets/js/[name].js",
				chunkFileNames: "assets/js/[name].js",
				// CSSファイルの出力設定
				assetFileNames: (assetInfo) => {
					if (assetInfo.name && assetInfo.name.endsWith(".css")) {
						return "assets/css/[name][extname]";
					}
					// return "assets/[name][extname]";
				},
			},
		},
	},
	// プラグインの設定
	plugins: [
		// HTMLから crossOrigin 属性を削除する独自プラグイン追記
		//後ほど対応
		// viteStaticCopy({
		// 	targets: [
		// 		{ src: "fonts/*", dest: "assets/fonts" },
		// 		{ src: "img/*", dest: "assets/img" },
		// 	],
		// }),
		noCrossOrigin(),
	],
	// 開発サーバーの設定
	server: {
		port: 8080,
	}, // 本番用(build後)プレビューサーバー
	preview: {
		port: 5000,
	},
	// CSS（Sass/SCSS）の設定
	css: {
		preprocessorOptions: {
			// 古い書き方の警告を非表示にするリスト
			scss: {
				silenceDeprecations: ["import", "mixed-decls", "color-functions", "global-builtin", "legacy-js-api"],
				// sass-embeddedの使用
				api: "modern-compiler",
				// npmパッケージからSassをimportできるように調整
				importers: [new NodePackageImporter()],
			},
		},
	},
};
