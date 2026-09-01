# MiMart

**React、TypeScript、Vite**を使用して制作した、レスポンシブ対応の英語・日本語対応ECサイトです。

Reactのコンポーネント設計、状態管理、データフロー、レスポンシブUIの実装を学ぶことを目的として制作しました。

**サイト:** https://dicey44.github.io/mini-ecommerce-site/

## 機能

* 🛍️ 外部APIから取得した商品の一覧表示
* 🔎 商品検索
* 🏷️ カテゴリー・価格による商品フィルター
* ↕️ 価格による商品並び替え
* 🛒 ショッピングカート
* 🌐 英語・日本語の切り替え
* 📱 レスポンシブデザイン
* ⚠️ API通信中のローディング表示・エラー処理
* 💻 React + TypeScriptによる開発

## 使用技術

* **React**
* **TypeScript**
* **Vite**
* **CSS**
* **Context API**
* **REST API**
* **GitHub Pages**

## Reactの設計

MiMartでは、複数のコンポーネントから使用する必要がある状態をReact Contextで管理しています。

### Cart Context

ショッピングカートに関する状態と処理を`CartContext`で管理しています。

* 商品をカートに追加
* 商品をカートから削除
* 商品の数量を管理
* カート内の商品の合計数量を管理
* カートの開閉状態を管理

また、カスタムフック`useCart`を作成し、各コンポーネントからCart Contextを簡単に利用できるようにしています。

### Language Context

`LanguageContext`を使用して、現在選択されている言語を管理しています。

英語と日本語の切り替えに対応しており、翻訳データはコンポーネントとは別に管理することで、UIのコードをできるだけシンプルにしています。

## プロジェクト構成

```text
src/
├── assets/
├── services/
├── types/
├── App.tsx
├── Cart.tsx
├── CartContext.tsx
├── CartItemComp.tsx
├── Footer.tsx
├── HomeBanner.tsx
├── LanguageContext.tsx
├── Navbar.tsx
├── ProductCard.tsx
├── ProductGrid.tsx
└── translations.ts
```

## 学んだこと

このプロジェクトでは、特にReactのデータフローとアプリケーション構造について学ぶことを目的としました。

制作を通して、以下の内容を実践しました。

* React Hooksを使用した状態管理
* コンポーネント間のPropsによるデータ受け渡し
* Propsのバケツリレーが複雑になった場合の設計
* React Contextを使用した共有状態の管理
* 再利用可能なカスタムフックの作成
* TypeScriptによる型定義と状態管理
* APIから取得したデータの表示
* 商品検索・フィルター・並び替えの実装
* CSSによるレスポンシブデザイン
* 英語・日本語に対応したUIの構築
* GitHub Pagesへのデプロイ

## ローカル環境での実行

リポジトリをクローンして、依存関係をインストールします。

```bash
git clone https://github.com/dicey44/mini-ecommerce-site.git
cd mini-ecommerce-site
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

Viteが表示するローカルURLからアプリケーションを確認できます。

## ビルド

本番用のビルドを作成する場合：

```bash
npm run build
```

## デプロイ

GitHub Pagesを使用してデプロイしています。

```bash
npm run deploy
```

## 今後の改善案

* カート情報の永続化
* 商品フィルター機能のさらなる整理
* 商品詳細ページの追加
* チェックアウト機能の追加
* アクセシビリティのさらなる改善
* 多言語対応の拡張
