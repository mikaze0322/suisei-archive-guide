<template><h1 id="minyami" tabindex="-1"><a class="header-anchor" href="#minyami" aria-hidden="true">#</a> minyami</h1>
<p>[ <a href="https://github.com/Last-Order/Minyami" target="_blank" rel="noopener noreferrer">minyami<OutboundLink/></a> ]</p>
<p>This is a tool mainly focued on nicolive timeshift ( stream archive ) and AbemaTV downloading.</p>
<h2 id="target-site" tabindex="-1"><a class="header-anchor" href="#target-site" aria-hidden="true">#</a> Target Site</h2>
<ul>
<li>Nico Live ( timeshift only )</li>
<li>AbemaTV</li>
</ul>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3>
<p>Check <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js official site<OutboundLink/></a> and download the <code>LTS</code> version.</p>
<p>To check if installation is successful, type <code>npm version</code> to see if it returns value.</p>
<h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h3>
<p>See <a href="/docs/preparation/ubuntu?id=nodejs">Preparations</a> to install <code>npm</code> and <code>node.js</code> environment.</p>
<p>Once done with installation, install by <code>npm</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -g minyami
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> Plugin</h3>
<p><code>minyami</code> requires a Chrome extension to extract the replay keys and other values to download.</p>
<p>Chrome extension Link <a href="https://chrome.google.com/webstore/detail/minyami/cgejkofhdaffiifhcohjdbbheldkiaed" target="_blank" rel="noopener noreferrer">Here<OutboundLink/></a> .</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<p>Open a nicolive timeshift link and click the plugin to extract the command you will need for download.</p>
<p><img src="@source/download/minyami-0001.jpg" alt="Plugin"></p>
<p>Click <em>Copy</em> and paste it in your CLI to start download.</p>
<p>It also applies to AbemaTV.</p>
<h2 id="caution" tabindex="-1"><a class="header-anchor" href="#caution" aria-hidden="true">#</a> Caution</h2>
<ul>
<li>
<p>Premium subscription is optional, which will ensure you can extract the highest quality video during busy hours.</p>
</li>
<li>
<p>Channel subscription is optional, which will grant you the full access to the stream.</p>
</li>
<li>
<p>Japan IP is optional, but some programs are not available outside Japan (especially streams with anime playing).</p>
</li>
<li>
<p>There are reports saying Niconico banned some IPs because of abuse, if you find that <code>minyami</code> cannot download, please try another IP.</p>
</li>
</ul>
<p>If you have any questions, please read the <code>README.md</code> in the original repos.</p>
</template>
