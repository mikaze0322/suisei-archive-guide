# radigo

[ [radigo](https://github.com/yyoshiki41/radigo) ]

本项目仅用于拉取 [radiko.jp](https://radiko.jp) 的电台存档。

## 适用站点

- Radiko.jp

## 安装

### Windows

阅读 [Windows 环境准备](/docs/preparation/windows.md) 一节，并从[官方源](https://github.com/yyoshiki41/radigo/releases/)下载 `radigo.exe` 并把它放入 `$PATH` 文件夹。

### Ubuntu

Download from [release](https://github.com/yyoshiki41/radigo/releases/) and

```bash
mv /usr/local/bin/radigo
sudo chmod a+rx /usr/local/bin/radigo
```

Type `radigo` to see if it works.

## 使用

### Normal

```bash
radigo rec -a="area ID" -id="program ID" -s="timestamp"
```

`area ID` can be found by copying the links in the footer.

![footer](./radigo-0001.jpg)

You will get a link like this and `JP13` is the `area ID`

```bash
https://radiko.jp/index/JP13
```

`program ID` and `timestamp` were extracted from the url

```
https://radiko.jp/#!/ts/QRR/20210914175500
```

`program ID` = QRR

`timestamp` = 20210914175500

### Premium

There are some programs stream outside the area that require a premium subscription to listen to the archive.

First of all you have to sign up and pay for the premium subscription.

If you are using Ubuntu, then the command is written like this:

```bash
export RADIKO_MAIL="radigo@example.com" && export RADIKO_PASSWORD="password"
radigo rec -a="area ID" -id="program ID" -s="timestamp"
```

You can also hardcode the values into your `~/.zshrc` or `~/.bashrc` .

## Caution

Radiko is not available outside Japan so you will need a Japan IP to extract the link and timestamps.

The IP region affects the program you can hear, e.g. my server's IP is located in Tokyo so I can only archive the programs available in Tokyo without a premium account.
