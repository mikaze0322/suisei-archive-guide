<template><h1 id="kkr" tabindex="-1"><a class="header-anchor" href="#kkr" aria-hidden="true">#</a> kkr</h1>
<p>[ <a href="https://github.com/Last-Order/kkr" target="_blank" rel="noopener noreferrer">kkr<OutboundLink/></a> ]</p>
<p>This is the project mainly focused on YouTube live stream recording, especially useful for an unarchived stream.</p>
<h2 id="target-site" tabindex="-1"><a class="header-anchor" href="#target-site" aria-hidden="true">#</a> Target Site</h2>
<ul>
<li>YouTube</li>
</ul>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3>
<p>Check <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js official site<OutboundLink/></a> and download the <code>LTS</code> version.</p>
<p>To check if installation is successful, type <code>npm version</code> to see if it returns value.</p>
<h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h3>
<p>See <a href="/docs/preparation/ubuntu?id=nodejs">Preparations</a> to install <code>npm</code> and <code>node.js</code> environment.</p>
<p>Once done with installation, install by <code>npm</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -g kkr
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kkr -d <span class="token string">"&lt;youtube link>"</span> --live
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>It also supports stream pre-scheduling, which means you can start the recording session before the stream starts and it will automatically start recording when the stream begins.</p>
</template>
