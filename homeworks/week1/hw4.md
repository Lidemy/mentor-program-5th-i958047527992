## 跟你朋友介紹 Git
## 什麼是 Git?
Git 呢，是一個可以進行版本控制的軟體。可以讓使用者比較好地，去記錄自己開發軟體的流程。因為它不難又方便，所以被許多軟體工程師所使用。

簡單來說， Git 就像是你把你現在正在開發的東西，放進一個資料夾裡面，每當你要修改裡面的東西，它會幫你存成另一個資料夾，保留原本的所有檔案，加上你修改的東西，以此來確保每一個資料夾內的東西，都是可以正常運作的。

除此之外，Git 還會儲存最新版本號、整個迭代的演進、允許檔案不加入版本控制等方便的功能。
## 怎麼使用 Git?
首先呢，先到這個[網站](https://git-scm.com/)把 Git 給下載下來。Mac 的話，則是在 Terminal 的介面，打`git --version`來安裝。
接著打開 Git Bash 就可以開始操作啦~
## Git 基本操作
* 用 `cd` 決定好要進行版本控制的資料夾之後，在 CLI 打入 `git init` 表示你要在這進行版本控制的初始化。
* 用 `git status` 可以確認版本控制的現狀。
* 而在你想要版本控制的檔案，你要用 `git add <檔案名>` 來把該檔案加入要版本控制的 staged 追蹤狀態。如果你有很多檔案都要納入的話，建議用 `git add .` 來把所有納入版本控制追蹤狀態的麾下。
* 在加入完要版本控制的檔案之後，可以用 `git commit` 把用 `git add` 變成 staged 追蹤狀態的檔案，提交成一個新版本。在輸入完的當下，會進入 vim 介面讓你打 commit 的訊息。我建議用 `git commit -m <message>` 的方式來附加訊息，甚至更進一步，可以用 `git commit -am <message>` 來免除 `git add` 的麻煩。
* 最後則是可以用 `git log` 來看整個版本控制的歷史紀錄。
## GitHub 一起來
GitHub 是一個可以與 Git 一起使用的儲存空間，可以把本地端的資料上傳至 GitHub 上保存，不過要先創建帳號，並且新開一個 repository 。
創完後，應該會出現下列，要輸入到 Git 的程式碼：
```
git remote add origin 你 repository 的位置
git branch -M main
git push -u origin main
```
順利的話，就能開始進行以下的操作啦。
* 若要把自己本地端的檔案上傳到 GitHub ，要用`git push origin main` 把在本地端 main 分支的檔案上傳。
* 有上傳，就有下載，所以假設你的檔案是與別人共同協作，並且經由其他人修改過，你想下載就用 `git pull origin main`。
* 另外，有時候看到別人的作品，想要下載下來使用的話，則要用 `git clone site*` 其中 site 是別人 repository 的位置。

以上就是簡單的 Git 與 GitHub 的操作，更細一點點的東西，可以看我為 Git 寫的[筆記](https://hackmd.io/KbAF72VfQxuQ1nbCfLE8-A?view)。