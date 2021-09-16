<template><h1 id="storage" tabindex="-1"><a class="header-anchor" href="#storage" aria-hidden="true">#</a> Storage</h1>
<h2 id="rclone" tabindex="-1"><a class="header-anchor" href="#rclone" aria-hidden="true">#</a> rclone</h2>
<p>[ <a href="https://rclone.org/" target="_blank" rel="noopener noreferrer">rclone<OutboundLink/></a> ]</p>
<p>rclone is nearly the best universal way to copy / sync the files among your local and the cloud drives.</p>
<h3 id="target-site" tabindex="-1"><a class="header-anchor" href="#target-site" aria-hidden="true">#</a> Target Site</h3>
<ul>
<li>OneDrive</li>
<li>Google Drive</li>
<li>Amazon S3</li>
<li>Backblaze</li>
<li>...</li>
<li>etc.</li>
</ul>
<h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3>
<h4 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h4>
<p>Read <RouterLink to="/docs/preparation/windows.html">Windows Preparation</RouterLink>. Then download <code>rclone.exe</code> from <a href="https://rclone.org/downloads/" target="_blank" rel="noopener noreferrer">Download Page<OutboundLink/></a> and put it in your <code>$PATH</code> folder.</p>
<h4 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h4>
<p><code>rclone</code> can be installed by using a script</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> https://rclone.org/install.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3>
<p>The configuration part is extremely complicated so I won't write it here, just follow the official guide listed below</p>
<ul>
<li>For OneDirve click <a href="https://rclone.org/onedrive/" target="_blank" rel="noopener noreferrer">HERE<OutboundLink/></a></li>
<li>For Google Drive clike <a href="https://rclone.org/drive/" target="_blank" rel="noopener noreferrer">HERE<OutboundLink/></a></li>
</ul>
<h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3>
<p>Once you are done with the configuration, you can start uploading to or downloading from the remote.</p>
<p>I will take OneDrive as the example since it has some special config to do.</p>
<p>For download</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>rclone copy -P <span class="token string">"&lt;your remote drive>"</span><span class="token builtin class-name">:</span><span class="token string">"&lt;remote folder>"</span> <span class="token string">"&lt;your local destination>"</span> --onedrive-encoding <span class="token string">"Slash"</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>For upload</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>rclone copy -P <span class="token string">"&lt;your local destination>"</span> <span class="token string">"&lt;your remote drive>"</span><span class="token builtin class-name">:</span><span class="token string">"&lt;remote folder>"</span> --onedrive-encoding <span class="token string">"Slash"</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="@source/storage/rclone/rclone-0001.jpg" alt="Result"></p>
<p><code>copy</code>: Copy mode will check the files first before downloading, skipping all files that is identically the same.</p>
<p><code>-P</code>: Show progress when transferring, without the flag rclone will run with no info shown.</p>
<p><code>--onedrive-encoding &quot;Slash&quot;</code>: A special flag that let the rclone only converts filenames with <code>/</code> in it, it is important so it won't mess with <code>#</code>.</p>
</template>
