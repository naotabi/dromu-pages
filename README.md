# dromu-pages

「どろむ / Dromu」の、App Store Connect提出用の公開ページ（プライバシーポリシー・サポート）です。GitHub Pagesでそのままホスティングできる、素の HTML/CSS/JS のみの構成になっています（ビルド不要）。

## 構成

- `index.html` — トップページ（プライバシー・サポートへのリンク）
- `privacy.html` — プライバシーポリシー（日本語・英語、右上のボタンで切り替え）
- `support.html` — サポート・よくある質問（日本語・英語）
- `style.css` / `script.js` — 共通のスタイルと言語切り替え用スクリプト

## 公開前にやること（必須）

`privacy.html` と `support.html` の中にある `REPLACE_ME@example.com` を、実際に使う問い合わせ用メールアドレスに置き換えてください（各ファイル内に2箇所ずつ、日英で1箇所ずつ）。テキストエディタ（TextEdit、VS Codeなど）で開いて、検索・置換（⌘+F / ⌘+Option+F）で直接書き換えるのが簡単です。

## GitHub Desktopでリポジトリを作ってPagesを有効化する手順

### 1. ローカルリポジトリを作る

1. GitHub Desktopを開く
2. メニューバー「File」→「Add Local Repository...」
3. 「Choose...」でこの `dromu-pages` フォルダを選択
4. 「This directory does not appear to be a Git repository. Would you like to create a repository here instead?」と出るので、青い **「create a repository」** のリンクをクリック
5. 「Create a New Repository」画面が開く。Nameは `dromu-pages` のまま、Local Pathも自動でこのフォルダになっているはず。Git Ignore・Licenseは両方「None」でOK（すでに `.gitignore` が入っています）
6. 右下「Create Repository」をクリック

### 2. 最初のコミットをする

1. 左側にファイル一覧（index.html、privacy.htmlなど）がチェック付きで並んでいるのを確認
2. 左下のSummary欄に一言入力（例：「初回公開」）
3. 青い「Commit to main」ボタンをクリック

### 3. GitHubに公開する

1. 上部中央の「Publish repository」ボタンをクリック
2. Name（`dromu-pages`のまま）を確認し、「Keep this code private」のチェックを外す（**GitHub Pagesを無料で使うにはPublicにする必要があります**）
3. 「Publish Repository」をクリック

これでGitHub上にリポジトリが作られ、ファイルがアップロードされます。

### 4. GitHub Pagesを有効化する

1. GitHub Desktopの上部メニュー「Repository」→「View on GitHub」（またはブラウザでGitHubのリポジトリページを開く）
2. リポジトリページ上部の「Settings」タブ →左メニューの「Pages」
3. 「Build and deployment」の「Source」で「Deploy from a branch」を選び、Branchを `main` / `/ (root)` にして「Save」
4. 数分待つと、同じ画面に公開URLが表示されます（形式は `https://【あなたのGitHubユーザー名】.github.io/dromu-pages/`）

### その後の更新について

文面を直したくなったら、ファイルを編集して保存 →GitHub Desktopに戻ると変更が自動的に表示されるので、Summaryを書いて「Commit to main」→「Push origin」（上部のボタン）を押せば、公開ページにも反映されます。

## App Store Connectへの入力例

公開できたら、以下のURLをそれぞれの欄に入力してください。

- プライバシーポリシーURL：`https://【ユーザー名】.github.io/dromu-pages/privacy.html`
- サポートURL：`https://【ユーザー名】.github.io/dromu-pages/index.html`（または `support.html` を直接指定してもOK）

## 内容の元になった資料

`AppStoreConnect掲載準備_Dromu_20260825.md`（§5・§6）と同じ文面です。文面自体を後から変える場合は、両方のファイルを更新することを忘れないでください。
