<template><h1 id="general-m3u8-stream" tabindex="-1"><a class="header-anchor" href="#general-m3u8-stream" aria-hidden="true">#</a> General .m3u8 stream</h1>
<p>There are a lot of sites that are not officially supported by youtube-dl / yt-dlp, but with an <code>m3u8</code> link can still be downloaded.</p>
<h2 id="target-site" tabindex="-1"><a class="header-anchor" href="#target-site" aria-hidden="true">#</a> Target Site</h2>
<ul>
<li>SPWN</li>
<li>Nissin</li>
<li>...</li>
<li>etc.</li>
</ul>
<h2 id="link-extraction" tabindex="-1"><a class="header-anchor" href="#link-extraction" aria-hidden="true">#</a> Link Extraction</h2>
<p><img src="@source/download/m3u8/m3u8-0001.jpg" alt="step"></p>
<p>After entering the streaming page, press F12 on your keyboard to bring up the developer console for your browser. Click on the &quot;Network&quot; tab on the top (the <b><font color="red">RED</font></b> arrow).</p>
<p>In the &quot;Filter URLs&quot; section, type in <code>m3u8</code>, then <strong>refresh the page</strong>. You should see the main <code>.m3u8</code> link generated (the <b><font color="green">GREEN</font></b> arrow).</p>
<p>If the default resolution isn't 1080p don't worry, keep the developer console open and select 1080p manually and you should be able to see the main <code>.m3u8</code> link generate.</p>
<p>Right click the .m3u8 link (the <b><font color="blue">BLUE</font></b> arrow), and select Copy &gt; Copy URL. <strong>This is the URL to the actual video source, so make sure you write it down somewhere</strong></p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Make sure the actual extracted link looks like cam_v1_.m3u8, or it might not contain audio.</p>
</div>
<h2 id="grab-cookies-txt" tabindex="-1"><a class="header-anchor" href="#grab-cookies-txt" aria-hidden="true">#</a> Grab cookies.txt</h2>
<p><img src="@source/download/m3u8/m3u8-0002.jpg" alt="cookies"></p>
<p>Make sure you have the <code>Get cookies.txt</code> extension installed on your browser (link above). Now click on the plugin icon, and click <code>Export</code> . You can save the <code>cookies.txt</code> file anywhere you like.</p>
<h2 id="download" tabindex="-1"><a class="header-anchor" href="#download" aria-hidden="true">#</a> Download</h2>
<p>Now that you have the <code>.m3u8</code> link and the <code>cookies.txt</code>, we are ready to use <code>youtube-dl</code> to download the video.</p>
<p>Use this template to download the video. Replace the stuff in <code>&quot;&quot;</code> with the appropriate content you got from earlier</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>youtube-dl <span class="token string">"the .m3u8 link"</span> --cookies <span class="token string">"path to cookies.txt"</span> -o <span class="token string">"path to where you want to save the video"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Your command should look something like this</p>
<p><img src="@source/download/m3u8/m3u8-0003.jpg" alt="downloadlink"></p>
<p>Now press enter and the download should start. Wait a bit and you should see the video in the path you specified above.</p>
<h2 id="format-selection" tabindex="-1"><a class="header-anchor" href="#format-selection" aria-hidden="true">#</a> Format Selection</h2>
<p>The naming rule of SPWN's .m3u8 video and audio is different compared to YouTube, so the <code>best</code> or <code>bestaudio+bestvideo</code> option doesn't always work with SPWN and other sites.</p>
<p>Use <code>-F</code> to make sure the format we are going to download first.</p>
<p><img src="@source/download/m3u8/m3u8-0004.jpg" alt="format"></p>
<p>As shown above, there are different formats available.</p>
<p>Since we are going to archive the best format so what we need is <code>5279</code> (best) and <code>program_audio-Fine</code>.</p>
<p>Then type</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>youtube-dl -f <span class="token number">5279</span>+program_audio-Fine <span class="token string">".m3u8 address"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>We shall have the best video and audio downloaded.</p>
</template>
