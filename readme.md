# viteを使用したBootstrapの環境構築

## 概要

## 各種パッケージについて

## Node.jsバージョン管理について

- **`.node-version` ファイル**
`nodenv` や `nvm`、`asdf` などのバージョン管理ツールがこのファイルを参照し、指定された Node.js バージョンへ自動で切り替えます。

- **`.prototools` ファイル**
`proto`バージョン管理ツールがこのファイルを参照し、指定された Node.js バージョンへ自動で切り替えます。

- **`.browserslistrc` ファイル**
サポート対象ブラウザの指定。ファイル分け管理しやすくしています。

- **`package.json` の `"engines"` フィールド**
npm や yarn でパッケージをインストールする際、バージョンが要件を満たしていない場合は警告やエラーが表示されます。また、デプロイ時や CI 環境でも、適切なバージョンの Node.js/npm を使用しているかチェックできます。

ディフォルトのブートストラップのprefixは-bs
