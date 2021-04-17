## 交作業流程
1. 新開一個並切換到該 branch: `git checkout -b hw1`
2. 把在 homework 資料夾，當周的所有作業都完成。
3. 如果有新增檔案，要用 `git add .` 加進去 git
4. 接著 commit 上本地端新建的 branch：`git commit -am "homework finished"`
5. 把檔案 push 到 GitHub 上：`git push origin hw1`
6. 在 GitHub 上面點擊 Compare & pill request
7. 檢查 merge 與被 merge 的分支是否正確、檢查自己修改的檔案對不對，如果有問題在 comment 發問。
8. 點擊 create pull request。
9. 複製該頁網址，至[學習系統](https://learning.lidemy.com/)的課程總覽頁面。
10. 在該周點選繳交作業，點選自我檢討，修改錯誤的地方，依循第 2~4 步驟，把檔案 commit 並 push 上 GitHub。
11. 回到學習系統的課程總覽，點擊該周的繳交作業，接著把 pull request 完的網址貼上 PR 連結，勾選兩個看過自我檢討並修正的框框，點選送出。
12. 當 GitHub 上面已經完成 pull request 、助教改好作業並 merge 之後，就可以先切換到 master `git checkout master`
13. 把 master 下載下來 `git pull origin master`
14. 接著刪掉 hw1 的分支 `git branch -d hw1`
