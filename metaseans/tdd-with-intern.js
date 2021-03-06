<!DOCTYPE html>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>TDD with Intern.js and gun</title>
<meta name="author" content="MetaSean">
<meta name="description" content="Builds a very basic chat app using Intern.js for TDD and gun for data">
<meta name="keywords" content="tdd, gun, chat">
<link href="../css/bootstrap.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/hljs-github.css" rel="stylesheet">
<link href="../css/theme-2012.css" rel="stylesheet">
<link href="../css/theme-2012-common.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-article.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-presentation.css" rel="alternate stylesheet" data-dztheme="presentation">
<link href="../css/template.css" rel="alternate stylesheet" data-dztheme="presentation">

<section class="cover"><h1 id="test-driven-development-with-intern-js-and-gun">Test Driven Development with Intern.js and gun</h1>
</section>

<section><blockquote>
<p>&quot;Experience is a hard teacher because she gives the test first, the lesson afterwards.&quot;<br>~Vernon Saunders Law</p>
</blockquote>
</section>

<section><h2 id="lesson-goal" a="lesson-goal">Lesson Goal</h2>

<p class="list incremental">This lesson will setup a new application using <strong>Intern.js</strong> and <strong>BrowserStack</strong> for TDD.</p>
<div class="toc well">
<ul class="nav nav-list">
<li class="nav-header">Table of contents</li>
<li><a href="#lesson-goal">Lesson Goal</a></li>
<li><a href="#why-do-tdd">Why do TDD?</a></li>
<li><a href="#assumptions">Assumptions</a></li>
<li><a href="#start-a-basic-app">Start a basic app</a></li>
<li><a href="#provide-your-initial-npm-package-json-details">Provide your initial npm package.json details</a></li>
<li><a href="#install-intern">Install Intern</a></li>
<li><a href="#set-up-file-structure">Set up file structure</a></li>
<li><a href="#copy-then-open-the-intern-config-file-code-intern-js-code">Copy then open the intern config file <code>intern.js</code></a></li>
<li><a href="#point-config-to-app-directory">Point config to app directory</a></li>
<li><a href="#verify-initial-test-setup">Verify initial test setup</a></li>
<li><a href="#setup-local-functional-testing">Setup local functional testing</a></li>
<li><a href="#modify-the-code-tunnel-code-config-option">Modify the <code>tunnel</code> config option</a></li>
<li><a href="#modify-the-code-environment-code-config-option">Modify the <code>environment</code> config option</a></li>
<li><a href="#start-the-chromedriver">Start the chromedriver</a></li>
<li><a href="#verify-the-local-functional-test-set-up">Verify the local functional test set-up</a></li>
<li><a href="#review-test-results">Review test results</a></li>
<li><a href="#set-up-browserstack">Set-up BrowserStack</a></li>
<li><a href="#verify-the-remote-functional-test-set-up">Verify the remote functional test set-up</a></li>
<li><a href="#add-additional-browsers">Add additional browsers</a></li>
<li><a href="#prepare-to-test-locally">Prepare to Test Locally</a></li>
<li><a href="#test-locally">Test Locally</a></li>
<li><a href="#create-first-functional-test-file">Create first functional test file</a></li>
<li><a href="#create-first-functional-test">Create first functional test</a></li>
<li><a href="#hello-world-red">Hello World: Red</a></li>
<li><a href="#hello-world-local">Hello World - Local</a></li>
<li><a href="#hello-world-browserstack">Hello World - BrowserStack</a></li>
<li><a href="#conclusion">Conclusion</a></li>
</ul>
</div>
</section>

<section><h2 id="why-do-tdd-" a="why-do-tdd">Why do TDD?</h2>

<p class="incremental">You should use TDD for many reasons, including:</p>
<ul>
<li>immediate feedback</li>
<li>confident refactoring</li>
<li>less time debugging</li>
<li>tests as documentation</li>
<li>verification across platforms and browsers</li>
</ul>
</section>

<section><blockquote>
<p>&quot;If it&#39;s worth building, it&#39;s worth testing.  If it&#39;s not worth testing, why are you wasting your time working on it?&quot;<br>~Scott W. Ambler </p>
</blockquote>

<ul class="useful-links">
<li><a href="https://devver.wordpress.com/2008/07/07/tips-for-unit-testing/">https://devver.wordpress.com/2008/07/07/tips-for-unit-testing/</a> </li>
<li><a href="http://thewindev.net/why-tdd-makes-me-a-happy-developer/">http://thewindev.net/why-tdd-makes-me-a-happy-developer/</a></li>
<li><a href="http://www.agiledata.org/essays/tdd.html">http://www.agiledata.org/essays/tdd.html</a></li>
</ul>
</section>

<section><h2 id="assumptions" a="assumptions">Assumptions</h2>

<ul class="incremental">
<li>familiarity with the terminal or command line (bash)</li>
<li>node.js or io.js installed</li>
<li>npm installed</li>
</ul>
</section>

<section><h2 id="start-a-basic-app" a="start-a-basic-app">Start a basic app</h2>
<pre data-language="bash"><code class="language-bash">mkdir chatapp
<span class="hljs-built_in">cd</span> chatapp
npm init</code></pre>

</section>

<section><h2 id="provide-your-initial-npm-package-json-details" a="provide-your-initial-npm-package-json-details">Provide your initial npm package.json details</h2>
<pre data-language="bash"><code class="language-bash">name: (chatapp)
version: <span class="hljs-number">0.0</span>.<span class="hljs-number">1</span>
description: an app <span class="hljs-keyword">for</span> rapid-fire chatting
entry point: (index.js) 
<span class="hljs-built_in">test</span> <span class="hljs-built_in">command</span>: ./node_modules/.bin/intern-client config=tests/intern
git repository: YourGitHubName/chat-app
keywords: demo, chat, intern.js, gun
author: YourName
license: (Zlib OR MIT OR Apache-<span class="hljs-number">2.0</span>)
About to write to /Volumes/.../Users/.../projects/chatapp/package.json:
...
Is this ok? (yes) </code></pre>

</section>

<section><h2 id="install-intern" a="install-intern">Install Intern</h2>
<pre data-language="bash"><code class="language-bash">sudo npm install intern --save-dev</code></pre>


<p class="list incremental">You will be prompted for your password.  </p>
</section>

<section><h2 id="set-up-file-structure" a="set-up-file-structure">Set up file structure</h2>
<pre data-language="bash"><code class="language-bash">mkdir tests  // <span class="hljs-keyword">for</span> tests
mkdir app    // <span class="hljs-keyword">for</span> deployment code</code></pre>

</section>

<section><h2 id="copy-then-open-the-intern-config-file-intern-js-" a="copy-then-open-the-intern-config-file-code-intern-js-code">Copy then open the intern config file <code>intern.js</code></h2>
<pre data-language="bash"><code class="language-bash">cp node_modules/intern/tests/example.intern.js tests/intern.js</code></pre>


<pre data-language="bash"><code class="language-bash">// Open <span class="hljs-built_in">test</span>/intern.js <span class="hljs-keyword">in</span> a text editor such as Sublime or Textmate, e.g.
subl tests/intern.js</code></pre>

</section>

<section><h2 id="point-config-to-app-directory" a="point-config-to-app-directory">Point config to app directory</h2>
<pre data-language="javascript"><code class="language-javascript"><span class="hljs-comment">// edit </span>
packages: [ { name: <span class="hljs-string">'myPackage'</span>, location: <span class="hljs-string">'.'</span> } ]
<span class="hljs-comment">// to</span>
packages: [ { name: <span class="hljs-string">'ChatApp'</span>, location: <span class="hljs-string">'app'</span> } ]</code></pre>

</section>

<section><h2 id="verify-initial-test-setup" a="verify-initial-test-setup">Verify initial test setup</h2>
<pre data-language="bash"><code class="language-bash">./node_modules/.bin/intern-client config=tests/intern

// verify the <span class="hljs-built_in">test</span> <span class="hljs-built_in">command</span> response is
<span class="hljs-number">0</span>/<span class="hljs-number">0</span> tests failed</code></pre>


<p class="note">The <code>intern-client</code> command runs unit tests locally.</p>
</section>

<section><h2 id="setup-local-functional-testing" a="setup-local-functional-testing">Setup local functional testing</h2>
<ul>
<li>Download and install the appropriate Chrome driver (Selenium) for your system from <a href="https://sites.google.com/a/chromium.org/chromedriver/downloads">https://sites.google.com/a/chromium.org/chromedriver/downloads</a> </li>
</ul>
</section>

<section><h2 id="modify-the-tunnel-config-option" a="modify-the-code-tunnel-code-config-option">Modify the <code>tunnel</code> config option</h2>

<ul class="incremental">
<li>In <code>intern.js</code> comment replace the following line:<pre data-language="javascript"><code class="language-javascript">tunnel: <span class="hljs-string">'SauceLabsTunnel'</span>,</code></pre></li>
<li>with:<pre data-language="javascript"><code class="language-javascript">tunnel: <span class="hljs-string">'NullTunnel'</span>,</code></pre>

</li>
</ul>
</section>

<section><h2 id="modify-the-environment-config-option" a="modify-the-code-environment-code-config-option">Modify the <code>environment</code> config option</h2>

<ul class="incremental">
<li>In <code>intern.js</code> remove all of the existing environment entries.</li>
<li>Then add the appropriate local Chrome configuration.<pre data-language="javascript"><code class="language-javascript">environments: [
  { browserName: <span class="hljs-string">'chrome'</span>, version: <span class="hljs-string">'34'</span>, platform: <span class="hljs-string">'MAC'</span>} 
  <span class="hljs-comment">// or platform: 'Windows'</span>
],</code></pre>

</li>
</ul>

<ul class="useful-links">
<li><a href="https://www.browserstack.com/automate/node#setting-os-and-browser">BrowserStack: Setting your operating system, browser, and screen resolution</a></li>
</ul>
</section>

<section><h2 id="start-the-chromedriver" a="start-the-chromedriver">Start the chromedriver</h2>
<p>From the command line run</p>
<pre data-language="bash"><code class="language-bash">chromedriver --port=<span class="hljs-number">4444</span> --url-base=wd/hub</code></pre>


<ul class="notes">
<li>This terminal or command line window will now be running the server.  A new terminal or command line window will be needed to run subsequent commands against this server.</li>
<li><code>ctl-c</code> (Mac) to stop the server.</li>
</ul>
</section>

<section><h2 id="verify-the-local-functional-test-set-up" a="verify-the-local-functional-test-set-up">Verify the local functional test set-up</h2>

<ul class="incremental">
<li>From the command line run:<pre data-language="bash"><code class="language-bash">node_modules/.bin/intern-runner config=tests/intern</code></pre></li>
<li>When this command is run, a chromium based test browser is being created, so a window may be visible during portions of the test.</li>
</ul>

<p class="note">This command uses <code>intern-runner</code> instead of <code>intern-client</code>.</p>
</section>

<section><h2 id="review-test-results" a="review-test-results">Review test results</h2>
<pre data-language="bash"><code class="language-bash">Listening on <span class="hljs-number">0.0</span>.<span class="hljs-number">0.0</span>:<span class="hljs-number">9000</span>
Starting tunnel...
Initialised chrome <span class="hljs-number">43.0</span>.<span class="hljs-number">2357.132</span> on Mac OS X
No unit <span class="hljs-built_in">test</span> coverage <span class="hljs-keyword">for</span> chrome <span class="hljs-number">43.0</span>.<span class="hljs-number">2357.132</span> on Mac OS X
chrome <span class="hljs-number">43.0</span>.<span class="hljs-number">2357.132</span> on Mac OS X: <span class="hljs-number">0</span>/<span class="hljs-number">0</span> tests failed

TOTAL: tested <span class="hljs-number">1</span> platforms, <span class="hljs-number">0</span>/<span class="hljs-number">0</span> tests failed</code></pre>

</section>

<section><h2 id="set-up-browserstack" a="set-up-browserstack">Set-up BrowserStack</h2>

<ul class="incremental">
<li>Create an account at <a href="https://www.browserstack.com">https://www.browserstack.com</a>. </li>
<li>After logging in, expand the left hand side labeled &quot;Username and Access Keys&quot;</li>
<li>In &quot;intern.js&quot; add the following block, with your username and key:<pre data-language="javascript"><code class="language-javascript">tunnel: <span class="hljs-string">'NullTunnel'</span>,
tunnel: <span class="hljs-string">'BrowserStackTunnel'</span>,
tunnelOptions: {
  username: <span class="hljs-string">'YOUR-USERNAME'</span>,
  accessKey: <span class="hljs-string">'YOUR-ACCESSKEY'</span>
},</code></pre>

</li>
</ul>
</section>

<section><h2 id="verify-the-remote-functional-test-set-up" a="verify-the-remote-functional-test-set-up">Verify the remote functional test set-up</h2>

<ul class="incremental">
<li>From the command line re-run:<pre data-language="bash"><code class="language-bash">node_modules/.bin/intern-runner config=tests/intern</code></pre></li>
<li>After setting up the tunnel, when this command is run, a chromium based test browser is being created on the tunneled provider&#39;s machines.</li>
<li>Verify the test command response ends with:<pre data-language="bash"><code class="language-bash">TOTAL: tested <span class="hljs-number">1</span> platforms, <span class="hljs-number">0</span>/<span class="hljs-number">0</span> tests failed; fatal error occurred</code></pre>

</li>
</ul>
</section>

<section><h2 id="add-additional-browsers" a="add-additional-browsers">Add additional browsers</h2>

<ul class="incremental">
<li>Visit <a href="https://www.browserstack.com/automate/node#setting-os-and-browser">https://www.browserstack.com/automate/node#setting-os-and-browser</a></li>
<li>Configure at least two more recent browsers (e.g. OS X Firefox, and Windows IE)</li>
<li>Add the config to your &quot;intern.js&quot; <code>environments</code> array.  Quotes <em>may</em> be removed from each key.<pre data-language="javascript"><code class="language-javascript">environments: [
  ,{ browserName: <span class="hljs-string">'chrome'</span>, version: <span class="hljs-string">'34'</span>, platform: <span class="hljs-string">'MAC'</span>}
  ,{ browser : <span class="hljs-string">'IE'</span>, browser_version : <span class="hljs-string">'11.0'</span>, 
      os : <span class="hljs-string">'Windows'</span>, os_version : <span class="hljs-string">'8.1'</span>,
      resolution : <span class="hljs-string">'1024x768'</span> }
  ,{ browser : <span class="hljs-string">'Firefox'</span>, browser_version : <span class="hljs-string">'39.0'</span>,
      os : <span class="hljs-string">'OS X'</span>, os_version : <span class="hljs-string">'Yosemite'</span>,
      resolution : <span class="hljs-string">'1920x1080'</span> }
],</code></pre></li>
<li>Modify
<pre data-language="javascript"><code class="language-javascript"><span class="hljs-comment">// from</span>
maxConcurrency: <span class="hljs-number">3</span>,
<span class="hljs-comment">// to</span>
maxConcurrency: <span class="hljs-number">4</span></code></pre>,</li>
</ul>

<p class="note"><em>At this point</em> if you get a <code>TypeError: undefined is not a function</code> logged to the console, do not worry.</p>
</section>

<section><h2 id="prepare-to-test-locally" a="prepare-to-test-locally">Prepare to Test Locally</h2>

<ul class="incremental">
<li>In <code>intern.js</code> comment out the BrowserStack related configs<pre data-language="javascript"><code class="language-javascript">    tunnel: <span class="hljs-string">'NullTunnel'</span>,
<span class="hljs-comment">//    tunnel: 'BrowserStackTunnel',</span>
<span class="hljs-comment">//    tunnelOptions: {</span>
<span class="hljs-comment">//        username: 'YOUR-USERNAME',</span>
<span class="hljs-comment">//        accessKey: 'YOUR-ACCESSKEY'</span>
<span class="hljs-comment">//    },</span></code></pre></li>
<li>And comment out all but the local environments:<pre data-language="javascript"><code class="language-javascript">environments: [
  ,{ browserName: <span class="hljs-string">'chrome'</span>, version: <span class="hljs-string">'34'</span>, platform: <span class="hljs-string">'MAC'</span>}
  <span class="hljs-comment">// ,{ browser : 'IE', browser_version : '11.0', </span>
  <span class="hljs-comment">//     os : 'Windows', os_version : '8.1',</span>
  <span class="hljs-comment">//     resolution : '1024x768' }</span>
  <span class="hljs-comment">// ,{ browser : 'Firefox', browser_version : '39.0',</span>
  <span class="hljs-comment">//     os : 'OS X', os_version : 'Yosemite',</span>
  <span class="hljs-comment">//     resolution : '1920x1080' }</span>
],</code></pre>

</li>
</ul>
</section>

<section><h2 id="test-locally" a="test-locally">Test Locally</h2>

<ul class="incremental">
<li>From the command line run:<pre data-language="bash"><code class="language-bash">node_modules/.bin/intern-runner config=tests/intern</code></pre></li>
<li>Verify the test command response ends with:<pre data-language="bash"><code class="language-bash">TOTAL: tested <span class="hljs-number">1</span> platforms, <span class="hljs-number">0</span>/<span class="hljs-number">0</span> tests failed; fatal error occurred</code></pre>

</li>
</ul>
</section>

<section><h2 id="create-first-functional-test-file" a="create-first-functional-test-file">Create first functional test file</h2>

<ul class="incremental">
<li>Create functional test directory<pre data-language="bash"><code class="language-bash">mkdir tests/functional</code></pre></li>
<li>Create and open <code>tests/functional/index.js</code>, e.g.<pre data-language="bash"><code class="language-bash">subl tests/functional/index.js </code></pre></li>
<li>Add test file to <code>intern.js</code> functionalSuite&#39;s array<pre data-language="javascript"><code class="language-javascript"><span class="hljs-comment">// from</span>
functionalSuites: [ <span class="hljs-comment">/* 'myPackage/tests/functional' */</span> ],
<span class="hljs-comment">// to</span>
functionalSuites: [ <span class="hljs-string">'tests/functional/index'</span> ],</code></pre>

</li>
</ul>
</section>

<section><h2 id="create-first-functional-test" a="create-first-functional-test">Create first functional test</h2>

<ul class="incremental">
<li><p>Add the first test</p>
<pre data-language="javascript"><code class="language-javascript">define(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">require</span>) </span>{
  <span class="hljs-keyword">var</span> registerSuite = <span class="hljs-built_in">require</span>(<span class="hljs-string">'intern!object'</span>);
  <span class="hljs-keyword">var</span> assert = <span class="hljs-built_in">require</span>(<span class="hljs-string">'intern/chai!assert'</span>);

  registerSuite({
      name: <span class="hljs-string">'index'</span>,
          <span class="hljs-string">'chat index'</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
              <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.remote
                  .get(<span class="hljs-built_in">require</span>.toUrl(<span class="hljs-string">'index.html'</span>))
                  .setFindTimeout(<span class="hljs-number">5000</span>)
                  .findByTagName(<span class="hljs-string">'body'</span>)
                  .getVisibleText()
                  .then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">text</span>) </span>{
                      assert.strictEqual(text, <span class="hljs-string">'Hello, World!'</span>,
                          <span class="hljs-string">'Greeting should be displayed when the page is loaded'</span>);
                  });
      }
  });
});</code></pre>

</li>
</ul>

<ul class="useful-links">
<li><a href="* https://theintern.github.io/leadfoot/Command.html#methods">Leadfoot testing commands</a></li>
</ul>
</section>

<section><h2 id="hello-world-red" a="hello-world-red">Hello World: Red</h2>

<ul class="incremental">
<li>Re-run local test<pre data-language="bash"><code class="language-bash">node_modules/.bin/intern-runner config=tests/intern</code></pre></li>
<li>Review the test total:<pre data-language="bash"><code class="language-bash">TOTAL: tested <span class="hljs-number">1</span> platforms, <span class="hljs-number">1</span>/<span class="hljs-number">1</span> tests failed</code></pre></li>
<li>Review the initial test failure information:<pre data-language="bash"><code class="language-bash">Test main - index - chat index FAILED on chrome <span class="hljs-number">44.0</span>.<span class="hljs-number">2403.155</span> on Mac OS X:
AssertionError: Greeting should be displayed when the page is loaded: expected <span class="hljs-string">'404 Not Found'</span> to equal <span class="hljs-string">'Hello, World!'</span></code></pre>

</li>
</ul>
</section>

<section><h2 id="hello-world-local" a="hello-world-local">Hello World - Local</h2>

<ul class="incremental">
<li>Create and open <code>index.html</code>, at the root level, e.g.<pre data-language="bash"><code class="language-bash">subl index.html</code></pre></li>
<li>Create basic html structure, including &quot;Hello, World!&quot;<pre data-language="html"><code class="language-html"><span class="hljs-doctype">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">title</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">title</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">body</span>&gt;</span>
  Hello, World!
<span class="hljs-tag">&lt;/<span class="hljs-title">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">html</span>&gt;</span></code></pre></li>
<li>Review the test total:<pre data-language="bash"><code class="language-bash">TOTAL: tested <span class="hljs-number">1</span> platforms, <span class="hljs-number">0</span>/<span class="hljs-number">1</span> tests failed</code></pre></li>
<li>GREEN :-)</li>
</ul>
</section>

<section><h2 id="hello-world-browserstack" a="hello-world-browserstack">Hello World - BrowserStack</h2>
<p><pre data-language="bash"><code class="language-bash">Listening on <span class="hljs-number">0.0</span>.<span class="hljs-number">0.0</span>:<span class="hljs-number">9000</span>
Starting tunnel...
BrowserStackLocal v3.<span class="hljs-number">7</span>
Ready
Initialised chrome <span class="hljs-number">34.0</span>.<span class="hljs-number">1847.116</span> on MAC
No unit <span class="hljs-built_in">test</span> coverage <span class="hljs-keyword">for</span> chrome <span class="hljs-number">34.0</span>.<span class="hljs-number">1847.116</span> on MAC
chrome <span class="hljs-number">34.0</span>.<span class="hljs-number">1847.116</span> on MAC: <span class="hljs-number">0</span>/<span class="hljs-number">1</span> tests failed
Initialised firefox <span class="hljs-number">39.0</span>.<span class="hljs-number">3</span> on MAC
No unit <span class="hljs-built_in">test</span> coverage <span class="hljs-keyword">for</span> firefox <span class="hljs-number">39.0</span>.<span class="hljs-number">3</span> on MAC
firefox <span class="hljs-number">39.0</span>.<span class="hljs-number">3</span> on MAC: <span class="hljs-number">0</span>/<span class="hljs-number">1</span> tests failed
Initialised internet explorer <span class="hljs-number">11</span> on WINDOWS
No unit <span class="hljs-built_in">test</span> coverage <span class="hljs-keyword">for</span> internet explorer <span class="hljs-number">11</span> on WINDOWS
internet explorer <span class="hljs-number">11</span> on WINDOWS: <span class="hljs-number">0</span>/<span class="hljs-number">1</span> tests failed</p>
<p>TOTAL: tested <span class="hljs-number">3</span> platforms, <span class="hljs-number">0</span>/<span class="hljs-number">3</span> tests failed</code></pre></p>
<ul>
<li>GREEN :-)</li>
</ul>
<h2 id="conclusion" a="conclusion">Conclusion</h2>
<blockquote>
<p>&quot;Only a fool tests the depth of the water with both feet.&quot;<br>~ African proverb</p>
</blockquote>
<!-- footer -->
<div id="progress-bar"></div>

<script src="../js/dzslides.core.js"></script>
<script src="../js/jquery-1.8.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>



</section>