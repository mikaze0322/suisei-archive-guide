# rget

[ [rget](https://github.com/wasamas/rget) ]

This is a project mainly focused on recording radio stations, but here we use it to solve the [Hibiki Radio Station](http://hibiki-radio.jp/) .

## 适用站点

- Hibiki Radio Station
- etc.

## 安装

### Windows

Check [Ruby official site](https://rubyinstaller.org/) to download the installer and install it.

### Ubuntu

Install `ruby-full` first

```bash
sudo apt install ruby-full
```

Then you can install `rget` by using `gem`

```bash
sudo gem install rget
```

## 使用

::: danger
This program has only tested on Ubuntu, Windows users are advised to be careful in its usage.
:::

For example, Suisei has been on RAS' radio program, so here's how to add the template

```bash
# save a template of the radio program config
rget yaml https://hibiki-radio.jp/description/ras/detail >> ~/.rget
```

If we are downloading the archive, type the command to output a raw `.ts`

```bash
rget ras --no-mp3
```

If `rget` kept response error related with `PATH`, then edit `~/.rget` and set `path: .` this should fix the problem.
