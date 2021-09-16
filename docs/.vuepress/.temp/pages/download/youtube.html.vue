<template><h1 id="youtube-dl-yt-dlp" tabindex="-1"><a class="header-anchor" href="#youtube-dl-yt-dlp" aria-hidden="true">#</a> youtube-dl / yt-dlp</h1>
<p>[ <a href="https://github.com/ytdl-org/youtube-dl" target="_blank" rel="noopener noreferrer">youtube-dl<OutboundLink/></a> ] [ <a href="https://github.com/yt-dlp/yt-dlp" target="_blank" rel="noopener noreferrer">yt-dlp<OutboundLink/></a> ]</p>
<p>This will be the primary tool to download youtube-dl videos, as well as the generic <code>.m3u8</code>.</p>
<p>If you are using <code>yt-dlp</code> (and I recommend using it most of the time), just replace all <code>youtube-dl</code> with <code>yt-dlp</code> .</p>
<p>The workflow of youtube-dl / yt-dlp:</p>
<blockquote>
<p>Downloaded video and audio → Merged .mp4 file → Write metadata → Write thumbnail</p>
</blockquote>
<h2 id="target-site" tabindex="-1"><a class="header-anchor" href="#target-site" aria-hidden="true">#</a> Target Site</h2>
<ul>
<li>YouTube</li>
<li>TVer</li>
<li>SPWN</li>
<li>...</li>
<li>Any sites on the support list</li>
<li>Any sites using non-encrypted <code>.m3u8</code> stream</li>
</ul>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3>
<p>Read <RouterLink to="/docs/preparation/windows.html">Windows Preparation</RouterLink>. Then download <code>youtube-dl.exe</code> from <a href="https://github.com/ytdl-org/youtube-dl/releases/" target="_blank" rel="noopener noreferrer">release<OutboundLink/></a> and put it in your <code>$PATH</code> folder.</p>
<h3 id="ubuntu-linux" tabindex="-1"><a class="header-anchor" href="#ubuntu-linux" aria-hidden="true">#</a> Ubuntu / Linux</h3>
<p>Install <code>python</code> and the required packages first.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> upgrade -y
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> python3 python3-pip python-is-python3 ffmpeg atomicparsley
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>There are 2 ways to install</p>
<ul>
<li>Install using <code>curl</code></li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
<span class="token function">sudo</span> <span class="token function">chmod</span> a+rx /usr/local/bin/youtube-dl
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>Install using <code>pip3</code></li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> -H pip <span class="token function">install</span> --upgrade youtube-dl
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>If you are using <code>yt-dlp</code> (and I suggest using it for most of the time), just replace all <code>youtube-dl</code> with <code>yt-dlp</code>.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<p>To start the download</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>youtube-dl <span class="token string">"url"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3>
<p>You will need to do further configuration to download a better quality file or for membership-only archives.</p>
<p>For Windows, the config files is located at <code>%APPDATA%\youtube-dl\config.txt</code> or <code>C:\Users\&lt;user name&gt;\youtube-dl.conf</code>.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>-o <span class="token string">'D:\YouTube\(upload_date)s %(title)s.%(ext)s'</span> <span class="token comment"># replace the directory</span>
--embed-thumbnail
--format <span class="token string">'bestvideo+bestaudio/best/mp4'</span>
--merge-output-format mp4
--add-metadata
--cookies <span class="token string">'/home/ubuntu/cookies.txt'</span> <span class="token comment"># replace the directory</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>For Ubuntu, the config file is located at <code>/etc/youtube-dl.conf</code>.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>-o <span class="token string">'/home/ubuntu/raw/(upload_date)s %(title)s.%(ext)s'</span> <span class="token comment"># replace the directory</span>
--embed-thumbnail
--format <span class="token string">'bestvideo+bestaudio/best/mp4'</span>
--merge-output-format mp4
--add-metadata
--cookies <span class="token string">'/home/ubuntu/cookies.txt'</span> <span class="token comment"># replace the directory</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Adding <code>--cookies cookies.txt</code> option helps downloading the member-only contents.</p>
<p>You can also use <code>--format (bestvideo[vcodec=vp9]/bestvideo)+(bestaudio[acodec=opus]/bestaudio)bestvideo+bestaudio/best/mp4</code> to prefer <code>vp9</code> + <code>opus</code>.</p>
<p>To get a <code>cookies.txt</code> using the plugin: [ <a href="https://chrome.google.com/webstore/detail/get-cookiestxt/bgaddhkoddajcdgocldbbfleckgcbcid" target="_blank" rel="noopener noreferrer">Chrome<OutboundLink/></a> ] [ <a href="https://addons.mozilla.org/en-US/firefox/addon/cookies-txt/" target="_blank" rel="noopener noreferrer">Firefox<OutboundLink/></a> ]</p>
<h3 id="manual-quality-select" tabindex="-1"><a class="header-anchor" href="#manual-quality-select" aria-hidden="true">#</a> Manual Quality Select</h3>
<p>You can manually check and select the quality or specify video / sound to download.</p>
<p>To check the available quality use <code>-F</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>youtube-dl -F <span class="token string">"link"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>It will return a list like this</p>
<p><img src="@source/download/youtube-dl-0001.jpg" alt="result"></p>
<p>To download the specific quality use <code>-f &quot;video&quot;+&quot;audio&quot;</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>youtube-dl -f <span class="token number">303</span>+251 <span class="token string">"link"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="general-m3u8-streams" tabindex="-1"><a class="header-anchor" href="#general-m3u8-streams" aria-hidden="true">#</a> General .m3u8 streams</h3>
<p>The usage is basically the same but it will require some steps to extract the link.</p>
<p>Link extraction will be introduced <RouterLink to="/docs/download/m3u8.html">HERE</RouterLink></p>
</template>
