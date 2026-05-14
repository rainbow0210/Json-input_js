# Json-input_js

# Japanese
## 概要
このリポジトリは、HTML と純粋な JavaScript（Vanilla JS）の `fetch` を用いてローカルの JSON ファイルを読み込み、DOM に動的に要素を追加して表示するサンプル集です。`index.html` からサンプルページを選択して、`json-input_html/json/data.json` および `json-input_html/json/data1.json` の内容を表示できます。
## 使用技術
- 言語: JavaScript
- マークアップ: HTML
- ライブラリ/フレームワーク: なし（Vanilla JS）
- データ: JSON（静的ファイル）
- その他: 静的ファイルとして配布
## 使い方
### 前提条件
- モダンブラウザ（`fetch` をサポート）
- ローカルで開発する場合は、静的ファイルを配信する軽量な HTTP サーバを利用することを推奨します（`file://` 経由だと `fetch` が制限される場合があります）。
### インストール方法
```bash
git clone https://github.com/username/Json-input_js.git
cd Json-input_js
```
### 基本的な使い方
1. 単純にファイルをブラウザで開く（環境によっては `fetch` 制限により動作しない場合があります）。
2. 簡易サーバを起動して動作させる（推奨）。例:
```bash
# Node.js がある場合
npx http-server .

# Python 3 がある場合
python -m http.server 8000
```
その後ブラウザで `http://localhost:8080`（`http-server` の場合）または `http://localhost:8000` を開いて `index.html` を選択してください。
## 主な機能
- JSON ファイルを `fetch` で取得し、`h1`/`h2`/`p`/`a` 要素を動的に生成して表示します。
- 複数のサンプルページ（`json_input.html`, `json_input1.html`）を用意し、それぞれ異なる JSON を読み込みます。
## 設定
- 特別な設定は不要です。静的ファイルを配信するサーバを用意してください。
## APIリファレンス / ドキュメント
- サンプルの実装は `json-input_html/script/script.js` および `json-input_html/script/script1.js` を参照してください。
- 参考サイト: JSON ファイルを JavaScript でロードする - https://www.delftstack.com/ja/howto/javascript/load-json-file-in-javascript/
## ライセンス
Unlicense license

# English
## Overview
This repository is a collection of samples that demonstrate loading local JSON files using HTML and vanilla JavaScript `fetch`, then dynamically creating and inserting DOM elements. From `index.html` you can select sample pages that display the contents of `json-input_html/json/data.json` and `json-input_html/json/data1.json`.
## Tech Stack
- Language: JavaScript
- Markup: HTML
- Libraries/Frameworks: None (Vanilla JS)
- Data: JSON (static files)
- Other: Static file distribution
## Usage
### Prerequisites
- A modern browser that supports `fetch`.
- When running locally, it is recommended to serve the files via a simple HTTP server (`fetch` may be restricted using `file://`).
### Installation
```bash
git clone https://github.com/username/Json-input_js.git
cd Json-input_js
```
### Basic Usage
1. Open `index.html` directly in a browser (may not work in all environments due to `fetch` restrictions).
2. Recommended: run a simple server and open the served page. Examples:
```bash
# With Node.js
npx http-server .

# With Python 3
python -m http.server 8000
```
Then open `http://localhost:8080` (for `http-server`) or `http://localhost:8000` and select `index.html`.
## Main Features
- Load JSON via `fetch` and dynamically add `h1`, `h2`, `p`, and `a` elements to the DOM.
- Provide two sample pages (`json_input.html`, `json_input1.html`) that load different JSON files.
## Configuration
- No special configuration required. Use a static file server if needed.
## API Reference / Documentation
- See `json-input_html/script/script.js` and `json-input_html/script/script1.js` for implementation details.
- Reference: Load JSON file in JavaScript - https://www.delftstack.com/ja/howto/javascript/load-json-file-in-javascript/
## License
Unlicense license