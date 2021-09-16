<template><h1 id="ubuntu-preparation" tabindex="-1"><a class="header-anchor" href="#ubuntu-preparation" aria-hidden="true">#</a> Ubuntu Preparation</h1>
<h2 id="why-using-a-server" tabindex="-1"><a class="header-anchor" href="#why-using-a-server" aria-hidden="true">#</a> Why using a server</h2>
<p>Virtual servers run in server rooms with stable conditions and usually faster Internet connection speeds since these are mostly used by businesses. It also has the advantage of allowing you to run jobs without monitoring them or worrying about interrupting them compared to a local set-up. They are also cheaper to purchase and maintain.</p>
<p>And most of all, Linux servers are usually <strong>cheaper</strong> than Windows servers since Linux does not require license fee.</p>
<h2 id="enviroment-preparation" tabindex="-1"><a class="header-anchor" href="#enviroment-preparation" aria-hidden="true">#</a> Enviroment Preparation</h2>
<h3 id="upgrade-the-system" tabindex="-1"><a class="header-anchor" href="#upgrade-the-system" aria-hidden="true">#</a> Upgrade the system</h3>
<p>Jobs are running on <a href="https://lightsail.aws.amazon.com/" target="_blank" rel="noopener noreferrer">Amazon Lightsail<OutboundLink/></a>, using Ubuntu 20.04 LTS.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> upgrade -y
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Install the required components</p>
<h3 id="ffmpeg" tabindex="-1"><a class="header-anchor" href="#ffmpeg" aria-hidden="true">#</a> FFmpeg</h3>
<p>For ffmpeg, it might require a higher version to deal with vp9 video/audio muxing, read <a href="https://ubuntuhandbook.org/index.php/2021/05/install-ffmpeg-4-4-ppa-ubuntu-20-04-21-04/" target="_blank" rel="noopener noreferrer">this article<OutboundLink/></a> to find out how to install ffmpeg 4.4 or higher.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository ppa:savoury1/ffmpeg4 <span class="token comment"># Add PPA</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ffmpeg
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h3>
<p>Tools like <code>minyami</code> and <code>kkr</code> are written in Javascript and can be installed by using <code>npm</code>. Avoid installing <code>npm</code> by using <code>sudo apt install npm</code> as this causes permission problems, using <a href="https://github.com/tj/n" target="_blank" rel="noopener noreferrer"><code>tj/n</code><OutboundLink/></a> to install and manage Node.js instead.</p>
<p>This can be done in one line using the official script:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -L https://git.io/n-install <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>The script should install the latest LTS version Node.js for you. If not you can manually install it by typing <code>n lts</code> .</p>
<p>Type <code>npm version</code> to see if it's properly installed.</p>
<h2 id="other-packages" tabindex="-1"><a class="header-anchor" href="#other-packages" aria-hidden="true">#</a> Other packages</h2>
<p>Most software used in downloading are not yet listed. Please check every method for details.</p>
<p>Instructions on their usage can be found on their respective chapters.</p>
<p>For any other questions, please read the README.md in the original repos.</p>
</template>
