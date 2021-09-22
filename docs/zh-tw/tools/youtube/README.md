# youtube-dl / yt-dlp

[ [youtube-dl](https://github.com/ytdl-org/youtube-dl) ] [ [yt-dlp](https://github.com/yt-dlp/yt-dlp) ]

這兩個工具是下載 YouTube 存檔的主力工具，`yt-dlp` 是 `youtube-dl` 的分歧，更新更為迅速，修補了眾多問題並添加了更多支持的網站。

儘管以下教程仍舊使用 `youtube-dl` ，但由於 `youtube-dl` 目前存在長期未更新、新功能和支持網站添加緩慢、縮圖添加方式過時等問題，推薦切換至 `yt-dlp` 使用。

::: tip 工作流程

分別下載影片、音訊檔 → 使用 FFmpeg 合併為 .mp4 文件 → 輸入 meta → 輸入縮圖

:::

## 適用網站

- YouTube
- TVer
- SPWN
- ...
- 任何其他在程序支持列表中的網站
- 任何使用非加密 `.m3u8` 進行影片串流的網站

## 安裝

### Windows

請閱讀 [Windows 環境準備](/docs/preparation/windows.md) 章節，完成相關準備。隨後從本章起始處的 Github 連結中下載 `.exe` 並放入 `$PATH` 資料夾。

### Ubuntu / Linux

此處需要安裝 Python 環境

::: tip

如果僅使用 `yt-dlp` ，則不用安裝 `AtomicParsley`

:::

```bash
sudo apt update && sudo upgrade -y
sudo apt install python3 python3-pip python-is-python3 ffmpeg atomicparsley
```

接下來有兩種安裝模式

- 透過 `curl` 安裝

```bash
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/
sudo chmod a+rx /usr/local/bin/youtube-dl
```

- 透過 `pip3` 包管理器安裝

```bash
sudo -H pip install --upgrade youtube-dl
```

如果您準備使用 `yt-dlp` ，請參考其教學，修改下載地址。

## 使用

下載僅需輸入以下指令

```bash
youtube-dl "url"
```

### 設置

如果需要默認下載最高畫質的存檔，或是需要下載會員限定影片等，則需要進行進一步設置。以下提供參考配置。

Windows 環境下，配置文件位於 `%APPDATA%\youtube-dl\config.txt` 或 `C:\Users\<user name>\youtube-dl.conf` 。

```bash
-o 'D:\YouTube\(upload_date)s %(title)s.%(ext)s'
--embed-thumbnail
--format 'bestvideo+bestaudio/best/mp4'
--merge-output-format mp4
--add-metadata
--cookies '/home/ubuntu/cookies.txt' # replace the directory
```

Ubuntu 環境下，配置文件位於 `/etc/youtube-dl.conf` 。

```bash
-o '/home/ubuntu/raw/(upload_date)s %(title)s.%(ext)s' # replace the directory
--embed-thumbnail
--format 'bestvideo+bestaudio/best/mp4'
--merge-output-format mp4
--add-metadata
--cookies '/home/ubuntu/cookies.txt' # replace the directory
```

添加 `--cookies cookies.txt` 可以讓程序能夠下載會員限定等存在限制的影片（地域限制除外）。

:::tip

目前 YouTube 提供了 `vp9` 以及 `opus` 格式。

這個组合可以透過更小的文件體積，提供極為近似的畫面以及音質。

:::

如需要默認讀取這個格式组合，可以添加 `--format (bestvideo[vcodec=vp9]/bestvideo)+(bestaudio[acodec=opus]/bestaudio)bestvideo+bestaudio/best/mp4`

這樣在讀取這個组合的同時將其他格式列入備選，防止錯誤。

如果要獲取 `cookies.txt` ，請使用相應的瀏覽器插件: [ [Chrome](https://chrome.google.com/webstore/detail/get-cookiestxt/bgaddhkoddajcdgocldbbfleckgcbcid) ] [ [Firefox](https://addons.mozilla.org/en-US/firefox/addon/cookies-txt/) ]

### 手動選擇品質

除了使用以上配置，程序同樣提供了手動選擇品質的選項。

首先使用 `-F` 檢查可用品質

```bash
youtube-dl -F "link"
```

執行後會回覆下列訊息

![result](./youtube-dl-0001.jpg)

隨後通過添加 `-f "video"+"audio"` 選取對應品質，例如

```bash
youtube-dl -f 303+251 "link"
```

### 抽取 .m3u8 連結

儘管使用方法大致相同，但是讀取步驟會比較複雜。

連結抽取教學將在 [這個章節](/docs/download/m3u8.md) 中進行介紹。
