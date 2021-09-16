<template><h1 id="preparation" tabindex="-1"><a class="header-anchor" href="#preparation" aria-hidden="true">#</a> Preparation</h1>
<h2 id="windows-preparation" tabindex="-1"><a class="header-anchor" href="#windows-preparation" aria-hidden="true">#</a> Windows Preparation</h2>
<p>Windows does not require a very complicated guide to prepare.</p>
<h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> $PATH</h3>
<p>First of all, you should set up a <code>$PATH</code> folder to tell Windows where to find your programs/tools.</p>
<p>Run the Command Prompt ( or cmd ) as administrator. Then paste the following into the console:</p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>setx <span class="token operator">/</span>M PATH <span class="token string">"%PATH%;&lt;REPLACE THIS WITH THE PATH TO YOUR DIRECTORY>"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>The <code>REPLACE THIS WITH THE PATH TO YOUR DIRECTORY</code> section should be the folder where your tools are in. Example cases would be <code>J:\Youtube Downloads</code> or <code>F:\Video Archive</code> .</p>
<h3 id="environment" tabindex="-1"><a class="header-anchor" href="#environment" aria-hidden="true">#</a> Environment</h3>
<p>The required packages can be found in each section, and require just downloading the installer from the official site. Windows does not have many problems with user permissions so it's easier for new users to understand.</p>
<p>Most of the commands are done in CLI, a GUI is not recommended as it can update slowly and can cause questions outside the scope of this guide.</p>
<h2 id="ubuntu-preparation" tabindex="-1"><a class="header-anchor" href="#ubuntu-preparation" aria-hidden="true">#</a> Ubuntu Preparation</h2>
<h3 id="why-using-a-server" tabindex="-1"><a class="header-anchor" href="#why-using-a-server" aria-hidden="true">#</a> Why using a server</h3>
<p>Virtual servers run in server rooms with stable conditions and usually faster Internet connection speeds since these are mostly used by businesses. It also has the advantage of allowing you to run jobs without monitoring them or worrying about interrupting them compared to a local set-up. They are also cheaper to purchase and maintain.</p>
<p>And most of all, Linux servers are usually <strong>cheaper</strong> than Windows servers since Linux does not require license fee.</p>
<h3 id="enviroment-preparation" tabindex="-1"><a class="header-anchor" href="#enviroment-preparation" aria-hidden="true">#</a> Enviroment Preparation</h3>
<h4 id="upgrade-the-system" tabindex="-1"><a class="header-anchor" href="#upgrade-the-system" aria-hidden="true">#</a> Upgrade the system</h4>
<p>Jobs are running on <a href="https://lightsail.aws.amazon.com/" target="_blank" rel="noopener noreferrer">Amazon Lightsail<OutboundLink/></a>, using Ubuntu 20.04 LTS.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> upgrade -y
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Install the required components</p>
<h4 id="ffmpeg" tabindex="-1"><a class="header-anchor" href="#ffmpeg" aria-hidden="true">#</a> FFmpeg</h4>
<p>For ffmpeg, it might require a higher version to deal with vp9 video/audio muxing, read <a href="https://ubuntuhandbook.org/index.php/2021/05/install-ffmpeg-4-4-ppa-ubuntu-20-04-21-04/" target="_blank" rel="noopener noreferrer">this article<OutboundLink/></a> to find out how to install ffmpeg 4.4 or higher.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository ppa:savoury1/ffmpeg4 <span class="token comment"># Add PPA</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ffmpeg
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h4>
<p>Tools like <code>minyami</code> and <code>kkr</code> are written in Javascript and can be installed by using <code>npm</code>. Avoid installing <code>npm</code> by using <code>sudo apt install npm</code> as this causes permission problems, using <a href="https://github.com/tj/n" target="_blank" rel="noopener noreferrer"><code>tj/n</code><OutboundLink/></a> to install and manage Node.js instead.</p>
<p>This can be done in one line using the official script:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -L https://git.io/n-install <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>The script should install the latest LTS version Node.js for you. If not you can manually install it by typing <code>n lts</code> .</p>
<p>Type <code>npm version</code> to see if it's properly installed.</p>
<h3 id="other-packages" tabindex="-1"><a class="header-anchor" href="#other-packages" aria-hidden="true">#</a> Other packages</h3>
<p>Most software used in downloading are not yet listed. Please check every method for details.</p>
<p>Instructions on their usage can be found on their respective chapters.</p>
<p>For any other questions, please read the README.md in the original repos.</p>
</template>
