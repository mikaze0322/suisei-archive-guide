<template><h1 id="rget" tabindex="-1"><a class="header-anchor" href="#rget" aria-hidden="true">#</a> rget</h1>
<p>[ <a href="https://github.com/wasamas/rget" target="_blank" rel="noopener noreferrer">rget<OutboundLink/></a> ]</p>
<p>This is a project mainly focused on recording radio stations, but here we use it to solve the <a href="http://hibiki-radio.jp/" target="_blank" rel="noopener noreferrer">Hibiki Radio Station<OutboundLink/></a> .</p>
<h2 id="target-site" tabindex="-1"><a class="header-anchor" href="#target-site" aria-hidden="true">#</a> Target Site</h2>
<ul>
<li>Hibiki Radio Station</li>
<li>etc.</li>
</ul>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3>
<p>Check <a href="https://rubyinstaller.org/" target="_blank" rel="noopener noreferrer">Ruby official site<OutboundLink/></a> to download the installer and install it.</p>
<h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h3>
<p>Install <code>ruby-full</code> first</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ruby-full
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Then you can install <code>rget</code> by using <code>gem</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> gem <span class="token function">install</span> rget
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>This program has only tested on Ubuntu, Windows users are advised to be careful in its usage.</p>
</div>
<p>For example, Suisei has been on RAS' radio program, so here's how to add the template</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># save a template of the radio program config</span>
rget yaml https://hibiki-radio.jp/description/ras/detail <span class="token operator">>></span> ~/.rget
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>If we are downloading the archive, type the command to output a raw <code>.ts</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>rget ras --no-mp3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>If <code>rget</code> kept response error related with <code>PATH</code>, then edit <code>~/.rget</code> and set <code>path: .</code> this should fix the problem.</p>
</template>
