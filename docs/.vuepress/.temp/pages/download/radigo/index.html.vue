<template><h1 id="radigo" tabindex="-1"><a class="header-anchor" href="#radigo" aria-hidden="true">#</a> radigo</h1>
<p>[ <a href="https://github.com/yyoshiki41/radigo" target="_blank" rel="noopener noreferrer">radigo<OutboundLink/></a> ]</p>
<p>This is a project mainly focused on archiving radio programs on <a href="https://radiko.jp" target="_blank" rel="noopener noreferrer">radiko.jp<OutboundLink/></a></p>
<h2 id="target-site" tabindex="-1"><a class="header-anchor" href="#target-site" aria-hidden="true">#</a> Target Site</h2>
<ul>
<li>Radiko.jp</li>
</ul>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3>
<p>Read <RouterLink to="/docs/preparation/windows.html">Windows Preparation</RouterLink> . Then download <code>radigo.exe</code> from <a href="https://github.com/yyoshiki41/radigo/releases/" target="_blank" rel="noopener noreferrer">release<OutboundLink/></a> and put it in your <code>$PATH</code> folder.</p>
<h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h3>
<p>Download from <a href="https://github.com/yyoshiki41/radigo/releases/" target="_blank" rel="noopener noreferrer">release<OutboundLink/></a> and</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mv</span> /usr/local/bin/radigo
<span class="token function">sudo</span> <span class="token function">chmod</span> a+rx /usr/local/bin/radigo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Type <code>radigo</code> to see if it works.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h3 id="normal" tabindex="-1"><a class="header-anchor" href="#normal" aria-hidden="true">#</a> Normal</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>radigo rec -a<span class="token operator">=</span><span class="token string">"area ID"</span> -id<span class="token operator">=</span><span class="token string">"program ID"</span> -s<span class="token operator">=</span><span class="token string">"timestamp"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>area ID</code> can be found by copying the links in the footer.</p>
<p><img src="radigo-0001.jpg" alt="footer" title=":size=800rem"></p>
<p>You will get a link like this and <code>JP13</code> is the <code>area ID</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>https://radiko.jp/index/JP13
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>program ID</code> and <code>timestamp</code> were extracted from the url</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>https://radiko.jp/#!/ts/QRR/20210914175500
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>program ID</code> = QRR</p>
<p><code>timestamp</code> = 20210914175500</p>
<h3 id="premium" tabindex="-1"><a class="header-anchor" href="#premium" aria-hidden="true">#</a> Premium</h3>
<p>There are some programs stream outside the area that require a premium subscription to listen to the archive.</p>
<p>First of all you have to sign up and pay for the premium subscription.</p>
<p>If you are using Ubuntu, then the command is written like this:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">RADIKO_MAIL</span><span class="token operator">=</span><span class="token string">"radigo@example.com"</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">export</span> <span class="token assign-left variable">RADIKO_PASSWORD</span><span class="token operator">=</span><span class="token string">"password"</span>
radigo rec -a<span class="token operator">=</span><span class="token string">"area ID"</span> -id<span class="token operator">=</span><span class="token string">"program ID"</span> -s<span class="token operator">=</span><span class="token string">"timestamp"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>You can also hardcode the values into your <code>~/.zshrc</code> or <code>~/.bashrc</code> .</p>
<h2 id="caution" tabindex="-1"><a class="header-anchor" href="#caution" aria-hidden="true">#</a> Caution</h2>
<p>Radiko is not available outside Japan so you will need a Japan IP to extract the link and timestamps.</p>
<p>The IP region affects the program you can hear, e.g. my server's IP is located in Tokyo so I can only archive the programs available in Tokyo without a premium account.</p>
</template>
