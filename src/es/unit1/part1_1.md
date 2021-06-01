<!DOCTYPE html><html><head>
      <title>part1</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.css">
      
      
      
      
      
      
      
      
      
      <style>
      /**
 * prism.js Github theme based on GitHub's theme.
 * @author Sam Clarke
 */
code[class*="language-"],
pre[class*="language-"] {
  color: #333;
  background: none;
  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.4;

  -moz-tab-size: 8;
  -o-tab-size: 8;
  tab-size: 8;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: .8em;
  overflow: auto;
  /* border: 1px solid #ddd; */
  border-radius: 3px;
  /* background: #fff; */
  background: #f5f5f5;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
  white-space: normal;
  background: #f5f5f5;
}

.token.comment,
.token.blockquote {
  color: #969896;
}

.token.cdata {
  color: #183691;
}

.token.doctype,
.token.punctuation,
.token.variable,
.token.macro.property {
  color: #333;
}

.token.operator,
.token.important,
.token.keyword,
.token.rule,
.token.builtin {
  color: #a71d5d;
}

.token.string,
.token.url,
.token.regex,
.token.attr-value {
  color: #183691;
}

.token.property,
.token.number,
.token.boolean,
.token.entity,
.token.atrule,
.token.constant,
.token.symbol,
.token.command,
.token.code {
  color: #0086b3;
}

.token.tag,
.token.selector,
.token.prolog {
  color: #63a35c;
}

.token.function,
.token.namespace,
.token.pseudo-element,
.token.class,
.token.class-name,
.token.pseudo-class,
.token.id,
.token.url-reference .token.variable,
.token.attr-name {
  color: #795da3;
}

.token.entity {
  cursor: help;
}

.token.title,
.token.title .token.punctuation {
  font-weight: bold;
  color: #1d3e81;
}

.token.list {
  color: #ed6a43;
}

.token.inserted {
  background-color: #eaffea;
  color: #55a532;
}

.token.deleted {
  background-color: #ffecec;
  color: #bd2c00;
}

.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}


/* JSON */
.language-json .token.property {
  color: #183691;
}

.language-markup .token.tag .token.punctuation {
  color: #333;
}

/* CSS */
code.language-css,
.language-css .token.function {
  color: #0086b3;
}

/* YAML */
.language-yaml .token.atrule {
  color: #63a35c;
}

code.language-yaml {
  color: #183691;
}

/* Ruby */
.language-ruby .token.function {
  color: #333;
}

/* Markdown */
.language-markdown .token.url {
  color: #795da3;
}

/* Makefile */
.language-makefile .token.symbol {
  color: #795da3;
}

.language-makefile .token.variable {
  color: #183691;
}

.language-makefile .token.builtin {
  color: #0086b3;
}

/* Bash */
.language-bash .token.keyword {
  color: #0086b3;
}

/* highlight */
pre[data-line] {
  position: relative;
  padding: 1em 0 1em 3em;
}
pre[data-line] .line-highlight-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  display: block;
  width: 100%;
}

pre[data-line] .line-highlight {
  position: absolute;
  left: 0;
  right: 0;
  padding: inherit 0;
  margin-top: 1em;
  background: hsla(24, 20%, 50%,.08);
  background: linear-gradient(to right, hsla(24, 20%, 50%,.1) 70%, hsla(24, 20%, 50%,0));
  pointer-events: none;
  line-height: inherit;
  white-space: pre;
}

pre[data-line] .line-highlight:before, 
pre[data-line] .line-highlight[data-end]:after {
  content: attr(data-start);
  position: absolute;
  top: .4em;
  left: .6em;
  min-width: 1em;
  padding: 0 .5em;
  background-color: hsla(24, 20%, 50%,.4);
  color: hsl(24, 20%, 95%);
  font: bold 65%/1.5 sans-serif;
  text-align: center;
  vertical-align: .3em;
  border-radius: 999px;
  text-shadow: none;
  box-shadow: 0 1px white;
}

pre[data-line] .line-highlight[data-end]:after {
  content: attr(data-end);
  top: auto;
  bottom: .4em;
}html body{font-family:"Helvetica Neue",Helvetica,"Segoe UI",Arial,freesans,sans-serif;font-size:16px;line-height:1.6;color:#333;background-color:#fff;overflow:initial;box-sizing:border-box;word-wrap:break-word}html body>:first-child{margin-top:0}html body h1,html body h2,html body h3,html body h4,html body h5,html body h6{line-height:1.2;margin-top:1em;margin-bottom:16px;color:#000}html body h1{font-size:2.25em;font-weight:300;padding-bottom:.3em}html body h2{font-size:1.75em;font-weight:400;padding-bottom:.3em}html body h3{font-size:1.5em;font-weight:500}html body h4{font-size:1.25em;font-weight:600}html body h5{font-size:1.1em;font-weight:600}html body h6{font-size:1em;font-weight:600}html body h1,html body h2,html body h3,html body h4,html body h5{font-weight:600}html body h5{font-size:1em}html body h6{color:#5c5c5c}html body strong{color:#000}html body del{color:#5c5c5c}html body a:not([href]){color:inherit;text-decoration:none}html body a{color:#08c;text-decoration:none}html body a:hover{color:#00a3f5;text-decoration:none}html body img{max-width:100%}html body>p{margin-top:0;margin-bottom:16px;word-wrap:break-word}html body>ul,html body>ol{margin-bottom:16px}html body ul,html body ol{padding-left:2em}html body ul.no-list,html body ol.no-list{padding:0;list-style-type:none}html body ul ul,html body ul ol,html body ol ol,html body ol ul{margin-top:0;margin-bottom:0}html body li{margin-bottom:0}html body li.task-list-item{list-style:none}html body li>p{margin-top:0;margin-bottom:0}html body .task-list-item-checkbox{margin:0 .2em .25em -1.8em;vertical-align:middle}html body .task-list-item-checkbox:hover{cursor:pointer}html body blockquote{margin:16px 0;font-size:inherit;padding:0 15px;color:#5c5c5c;background-color:#f0f0f0;border-left:4px solid #d6d6d6}html body blockquote>:first-child{margin-top:0}html body blockquote>:last-child{margin-bottom:0}html body hr{height:4px;margin:32px 0;background-color:#d6d6d6;border:0 none}html body table{margin:10px 0 15px 0;border-collapse:collapse;border-spacing:0;display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all}html body table th{font-weight:bold;color:#000}html body table td,html body table th{border:1px solid #d6d6d6;padding:6px 13px}html body dl{padding:0}html body dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:bold}html body dl dd{padding:0 16px;margin-bottom:16px}html body code{font-family:Menlo,Monaco,Consolas,'Courier New',monospace;font-size:.85em !important;color:#000;background-color:#f0f0f0;border-radius:3px;padding:.2em 0}html body code::before,html body code::after{letter-spacing:-0.2em;content:"\00a0"}html body pre>code{padding:0;margin:0;font-size:.85em !important;word-break:normal;white-space:pre;background:transparent;border:0}html body .highlight{margin-bottom:16px}html body .highlight pre,html body pre{padding:1em;overflow:auto;font-size:.85em !important;line-height:1.45;border:#d6d6d6;border-radius:3px}html body .highlight pre{margin-bottom:0;word-break:normal}html body pre code,html body pre tt{display:inline;max-width:initial;padding:0;margin:0;overflow:initial;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}html body pre code:before,html body pre tt:before,html body pre code:after,html body pre tt:after{content:normal}html body p,html body blockquote,html body ul,html body ol,html body dl,html body pre{margin-top:0;margin-bottom:16px}html body kbd{color:#000;border:1px solid #d6d6d6;border-bottom:2px solid #c7c7c7;padding:2px 4px;background-color:#f0f0f0;border-radius:3px}@media print{html body{background-color:#fff}html body h1,html body h2,html body h3,html body h4,html body h5,html body h6{color:#000;page-break-after:avoid}html body blockquote{color:#5c5c5c}html body pre{page-break-inside:avoid}html body table{display:table}html body img{display:block;max-width:100%;max-height:100%}html body pre,html body code{word-wrap:break-word;white-space:pre}}.markdown-preview{width:100%;height:100%;box-sizing:border-box}.markdown-preview .pagebreak,.markdown-preview .newpage{page-break-before:always}.markdown-preview pre.line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}.markdown-preview pre.line-numbers>code{position:relative}.markdown-preview pre.line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:1em;font-size:100%;left:0;width:3em;letter-spacing:-1px;border-right:1px solid #999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.markdown-preview pre.line-numbers .line-numbers-rows>span{pointer-events:none;display:block;counter-increment:linenumber}.markdown-preview pre.line-numbers .line-numbers-rows>span:before{content:counter(linenumber);color:#999;display:block;padding-right:.8em;text-align:right}.markdown-preview .mathjax-exps .MathJax_Display{text-align:center !important}.markdown-preview:not([for="preview"]) .code-chunk .btn-group{display:none}.markdown-preview:not([for="preview"]) .code-chunk .status{display:none}.markdown-preview:not([for="preview"]) .code-chunk .output-div{margin-bottom:16px}.scrollbar-style::-webkit-scrollbar{width:8px}.scrollbar-style::-webkit-scrollbar-track{border-radius:10px;background-color:transparent}.scrollbar-style::-webkit-scrollbar-thumb{border-radius:5px;background-color:rgba(150,150,150,0.66);border:4px solid rgba(150,150,150,0.66);background-clip:content-box}html body[for="html-export"]:not([data-presentation-mode]){position:relative;width:100%;height:100%;top:0;left:0;margin:0;padding:0;overflow:auto}html body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{position:relative;top:0}@media screen and (min-width:914px){html body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{padding:2em calc(50% - 457px + 2em)}}@media screen and (max-width:914px){html body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{padding:2em}}@media screen and (max-width:450px){html body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{font-size:14px !important;padding:1em}}@media print{html body[for="html-export"]:not([data-presentation-mode]) #sidebar-toc-btn{display:none}}html body[for="html-export"]:not([data-presentation-mode]) #sidebar-toc-btn{position:fixed;bottom:8px;left:8px;font-size:28px;cursor:pointer;color:inherit;z-index:99;width:32px;text-align:center;opacity:.4}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] #sidebar-toc-btn{opacity:1}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc{position:fixed;top:0;left:0;width:300px;height:100%;padding:32px 0 48px 0;font-size:14px;box-shadow:0 0 4px rgba(150,150,150,0.33);box-sizing:border-box;overflow:auto;background-color:inherit}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc::-webkit-scrollbar{width:8px}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc::-webkit-scrollbar-track{border-radius:10px;background-color:transparent}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc::-webkit-scrollbar-thumb{border-radius:5px;background-color:rgba(150,150,150,0.66);border:4px solid rgba(150,150,150,0.66);background-clip:content-box}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc a{text-decoration:none}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc ul{padding:0 1.6em;margin-top:.8em}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc li{margin-bottom:.8em}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc ul{list-style-type:none}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .markdown-preview{left:300px;width:calc(100% -  300px);padding:2em calc(50% - 457px -  150px);margin:0;box-sizing:border-box}@media screen and (max-width:1274px){html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .markdown-preview{padding:2em}}@media screen and (max-width:450px){html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .markdown-preview{width:100%}}html body[for="html-export"]:not([data-presentation-mode]):not([html-show-sidebar-toc]) .markdown-preview{left:50%;transform:translateX(-50%)}html body[for="html-export"]:not([data-presentation-mode]):not([html-show-sidebar-toc]) .md-sidebar-toc{display:none}
/* Please visit the URL below for more information: */
/*   https://shd101wyy.github.io/markdown-preview-enhanced/#/customize-css */
@media print {
  .markdown-preview.markdown-preview h1,
  .markdown-preview.markdown-preview h2,
  .markdown-preview.markdown-preview h3 {
    color: #ff0000;
  }
}

      </style>
    </head>
    <body for="html-export">
      <div class="mume markdown-preview  ">
      <h1 class="mume-header" id="9-using-vue-in-markdown-by-vicente-badge-textdefault-theme-verticaltop">9. Using Vue in Markdown by Vicente <badge text="default theme" vertical="top"></badge></h1>

<ul>
<li><a href="#9-using-vue-in-markdown-by-vicente-badge-textdefault-theme-verticaltop">9. Using Vue in Markdown by Vicente <badge text="default theme" vertical="top"></badge></a>
<ul>
<li><a href="#badge-textnew-typeerror91-browser-api-access-restrictions"><badge text="new!" type="error">9.1. Browser API Access Restrictions</badge></a></li>
<li><a href="#92-browser-api-access-restrictions">9.2. Browser API Access Restrictions</a>
<ul>
<li><a href="#921-third-level-heading">9.2.1 Third level heading</a></li>
</ul>
</li>
<li><a href="#93-browser-api-access-restrictions">9.3. Browser API Access Restrictions</a></li>
<li><a href="#94-browser-api-access-restrictions">9.4. Browser API Access Restrictions</a></li>
<li><a href="#95-browser-api-access-restrictions">9.5. Browser API Access Restrictions</a></li>
<li><a href="#96-browser-api-access-restrictions">9.6. Browser API Access Restrictions</a></li>
<li><a href="#97-browser-api-access-restrictions">9.7. Browser API Access Restrictions</a></li>
</ul>
</li>
</ul>
<h2 class="mume-header" id="badge-textnew-typeerror91-browser-api-access-restrictions"><badge text="new!" type="error">9.1. Browser API Access Restrictions</badge></h2>

<p>Because VuePress applications are server-rendered in Node.js when generAAating static builds, any Vue usage must conform to the <a href="https://ssr.vuejs.org/en/universal.html">universal code requirements</a>. In short, make sure to only access Browser / DOM APIs in <code>beforeMount</code> or <code>mounted</code> hooks.</p>
<p><img src="../images/clases.png" alt="Diagrama de clases de ProcessBuilder y Process" title="Diagrama de clases de Process y ProcessBuilder"></p>
<p>Pasaremos los datos necesarios para construir un objeto ISBN al constructor de Libro (en nuestro caso una cadena con el isbn) y ser&#xE1; este quien lo cree. En el fondo esto es lo que sucede con un tipo valor como DateTime por su &apos;naturaleza&apos;.<br>
De esta manera, adem&#xE1;s, el objeto Isbn13 que estoy creando desaparecer&#xE1; junto con el libro.</p>
<p>If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in <code>&lt;ClientOnly&gt;</code> component: &#x2764;&#xFE0F;</p>
<pre data-role="codeBlock" data-info="php" class="language-php"><span class="token comment"># Post Here Code Example</span>
<span class="token keyword">function</span> <span class="token function">base</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">print</span> <span class="token string double-quoted-string">&quot;hola&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</pre><pre data-role="codeBlock" data-info="java" class="language-java"># <span class="token class-name">Post</span> <span class="token class-name">Here</span> <span class="token class-name">Code</span> <span class="token class-name">Example</span>
</pre><pre data-role="codeBlock" data-info="yaml as=&quot;yaml&quot; code_block=&quot;true&quot; class=&quot;line-numbers&quot; highlight=&quot;5,8-10,12&quot;" class="language-yaml line-numbers" data-line="5,8-10,12"><span class="token punctuation">---</span>
<span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /Logo_PSP.png
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> VuePress &amp; Markdown
<span class="token key atrule">actionText</span><span class="token punctuation">:</span> Access course &#x2192;
<span class="token key atrule">actionLink</span><span class="token punctuation">:</span> /unit1/
<span class="token key atrule">features</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Feature 1 T&#xED;tulo
  <span class="token key atrule">details</span><span class="token punctuation">:</span> Feature 1 Description
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Feature 2 Title
  <span class="token key atrule">details</span><span class="token punctuation">:</span> Feature 2 Description
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Feature 3 Title
  <span class="token key atrule">details</span><span class="token punctuation">:</span> Feature 3 Description
<span class="token key atrule">footer</span><span class="token punctuation">:</span> Made by Vicente Mart&#xED;nez with &#x2764;&#xFE0F;
<span class="token punctuation">---</span>

<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span><div class="line-highlight-wrapper">



<div aria-hidden="true" class="line-highlight" data-range="5" data-start="5">
</div></div><div class="line-highlight-wrapper">






<div aria-hidden="true" class="line-highlight" data-range="8-10" data-start="8" data-end="10">


</div></div><div class="line-highlight-wrapper">










<div aria-hidden="true" class="line-highlight" data-range="12" data-start="12">
</div></div></pre><div class="pagebreak"> </div>
<p><!--?xml version="1.0" encoding="UTF-8" standalone="no"?-->

<!-- Generated by graphviz version 2.40.1 (20161225.0304)
 -->
<!-- Title: A Pages: 1 -->
<svg width="62pt" height="188pt" viewBox="0.00 0.00 62.00 188.00" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 184)">
<title>A</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-184 58,-184 58,4 -4,4"/>
<!-- S -->
<g id="node1" class="node">
<title>S</title>
<ellipse fill="none" stroke="#000000" cx="27" cy="-162" rx="27" ry="18"/>
<text text-anchor="middle" x="27" y="-157.8" font-family="Times,serif" font-size="14.00" fill="#000000">S</text>
</g>
<!-- X -->
<g id="node2" class="node">
<title>X</title>
<ellipse fill="none" stroke="#000000" cx="27" cy="-90" rx="27" ry="18"/>
<text text-anchor="middle" x="27" y="-85.8" font-family="Times,serif" font-size="14.00" fill="#000000">X</text>
</g>
<!-- S&#45;&gt;X -->
<g id="edge1" class="edge">
<title>S-&gt;X</title>
<path fill="none" stroke="#000000" d="M27,-143.8314C27,-136.131 27,-126.9743 27,-118.4166"/>
<polygon fill="#000000" stroke="#000000" points="30.5001,-118.4132 27,-108.4133 23.5001,-118.4133 30.5001,-118.4132"/>
</g>
<!-- Y -->
<g id="node3" class="node">
<title>Y</title>
<ellipse fill="none" stroke="#000000" cx="27" cy="-18" rx="27" ry="18"/>
<text text-anchor="middle" x="27" y="-13.8" font-family="Times,serif" font-size="14.00" fill="#000000">Y</text>
</g>
<!-- X&#45;&gt;Y -->
<g id="edge2" class="edge">
<title>X-&gt;Y</title>
<path fill="none" stroke="#000000" d="M27,-71.8314C27,-64.131 27,-54.9743 27,-46.4166"/>
<polygon fill="#000000" stroke="#000000" points="30.5001,-46.4132 27,-36.4133 23.5001,-46.4133 30.5001,-46.4132"/>
</g>
</g>
</svg>
</p><p><img src="../images/viz_cross_relation.png" alt></p>
<table>
<thead>
<tr>
<th style="text-align:center"><img src="../images/viz_cross_relation.png" alt></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><em>Cross-Relation</em></td>
</tr>
</tbody>
</table>
<figure>
    <img src="data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNjlweCIgaGVpZ2h0PSIxNTNweCIgdmlld0JveD0iMCAwIDI2OSAxNTMiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI2OSAxNTMiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSIyNjkiIGhlaWdodD0iMTUzIiB4PSIwIiB5PSIwIgogICAgaHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFRMEFBQUNaQ0FBQUFBQVErVEExQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4KQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUFtSkxSMFFBLzRlUHpMOEFBQUFKY0VoWgpjd0FBQUdBQUFBQmdBUEJyUXM4QUFBQUhkRWxOUlFmbEJBMFRBUTV0ZEYvakFBQVJwRWxFUVZSNDJ1MWRlVUJUVjlZL0w4bURDQ0pSCmRnZ29GQVJaUk1XNkFLSzJVSzJvMWJwVU85cldxcmkwVmR1eDJqclRhaDJ0dFg1T280NzFzMU8xclg0ZHhWMVU3T0NLZ0NJdUlJdVcKZ0ZUWkRJc1M5aVhKblQ5Q0lDSEpmZThtZnFVdjQrK3Z2SHZQT2UvbGwzUGZQZmZlYzI4b0JNL1JBVjUzUDhBZkNzL1owTVp6TnJRaAo2TzRIZVBab2xaVTBLT3FBMzR0eWRuWDZMMmFqSVQwckwvczNtVmFKdGJ0L1NGQllFTVhTQUdVcGZZb3k3Y3lWbXdxWDRDQmZzYXVuCnJaVXRvQm9rZTF4YWtwZWIxK3c0NnFYSlh2OUZiQ1QvMzBsWndOaW9LSGREUEdVbFg3NGlENXYrbGh1ekhjUjkxRzRMaENGZjNzZUoKdENUR09kTFRrcGdzY1orTk9vbUxjTzR0WnJtVytHaHFVTHpLb3RsUTd1d2pXdnVVcFhER1JDcmlqZ1d6Y1hNb3Zab3RGd2dobEJFaApXRlpyb1d5b050Tmo4Z2hWOWpuNUdXOVdYR2JqNlRpckxTcGlyZkpvNjI4dGtJM2lZTThNVS9TVTY2blZSa2prYml6NllJeDltdGdVClJkNW4zdk1ydnpjWW5uS1dEZGs0NS9NaUUzWG5PRXpwczhWUUJYOWRkMzh0MDlBUzNYclJ3V1J0UDkrUEhZWVpLT2VxYjN3aXZVMDQKUHRYQjdNS1ZrWVAwaXprNlRra2FkK0JOc3d5b29zc3pyUzJFRFdXby8xRXpUUlFIL08wanZVSnV6bjN0azI0MlhobEJxYkdvQUdmQwpjOFhHR2d0aFEvS09yL0hLVkFUaENDRnBvRjhFenNacXhZLzZoZDBkUTVtQ2EzQVRXdy9oQ0NHRXBQaHZ0ekJFcjRpVHZuRTRLSXlOCm1POVoySWFwZmlmN1h0Y2lUcktSOGpJN3VWZkRWMkJxaC9kTXRRUTJXakpIc3BRTUJzeWJsRC9zdWlXdzhialZsNlZrSUVneHRiN0YKbHNCR05aZ2VrMnZEc2FwckNSZlphQVpybHBKNTRJZXBGVFpaQWhzTzhJU2w1SGVBYTFQVmpwYkFoaVBJMkFrbWdnUlhMYk1JTmh6RQp0MWpKRlV3SVg0NnJ6d2kxQkRaZ1pDb0xvWUpGZnVGWU9WbWhYa2ZOU1RaaXpzc3h0UkVVcEZFVTVRZFNQR2xIZTRaM0xlTGtpTDdXCjdlK0x6TGN5WlBDZXJrV2M5STFlTXlVS3M0MWN2TE5RcjR5VHZnRy9CVWdXbTJrQ3ZlaVdvRmZJU2QrQWZrcy9mMnltaWYvTjNLUmYKeUUzZmdJWXdyM05tL1pDNXcxWitZVEZzd00ySTFldk5VSytPZEx4a1lMbUFxK3NwN3VLVmpzTk0xbTRZWDVOb2I2Q2NxK3NwTUUrMgpqRnBxb3E1OFNtR0tvWndvN3JJQm42RDNTemV3VGZiVFFlbUU2Z3Y5RFZkMTk0eXZHZmlKamlrM1FlMkNXK0JESTFYYzdHSFZtSHNsCmYyZ1NxVkx6cHpGanJ4dE5sK3p1SDlnc1BKMEd2bWxFR3FkZnNOdGp2SmJMYkZUOU9FVUl2WHQrV3NWYUkrMFZtRldLcWVjc0d3VmIKSTNoOEFRVEt2M2F5Vy9XQWpZWXk4UlVZZFJrcndrMDJjdGFHQU0wREFFRVdRdlZiUEhqamp6UXlxQlI5NlUyOWRJRkJpSHRzTkNjdApjd1lyOVV1UHZ3a2hoRkRiOGZGOG0ybjdTNHlwS0RJMmhvSERoL2NaYlhNdk12OWhIbC9aL3BFT3ZjNXYvMWh4NHVqbFZwK293VUVoCnpqclN5b0xzblBUVU90ZlhwbzJobVcxemp3MllkYXl0L1pQMVhlMGdxdkhhMVpTc0tyRDNjSGNYaW5nMkRTMk4xZVdsajF2NFBpK08KaWhyQUxrempJQnYxb1kvVWN6MDh5UWQ2bGJMc0IyVmw1YzF5Vll0MWZVVzB1N3ZIZ0FFOTJKdm1JQnR3YTRRQ0FJQWVlUm43aXgrYQowMFE2N3VCaUxKcHVUUUVBMEQvaDNkOUxVVVpxbVh0czFNNWE5dWRZR29ENlIxKzhZRjk0Ukd5OHV6dE1VdHp3Y2ZrM3FuTGwwK09aCkpKWFdCMGlOYzh3MzBMWkluOHdZY0RpTWJQWXl5ZkxFRDBuTmMydCtvL0x0cEw5OHpnT0F5UFYrekx2VXZJaGJDcWZZdURTSFRtNWYKTFZ6RElvRG9TOHdHaDFxS2NsM01pRHVhcFZNMjBWUmY3clVVWlZGMlFXbFpXWE1OYXJEbDJmY1F1NHI5Z3ZzWitvMUszc3pZdXB6SQp0QmUzMktpNWV1VnFkaE5QTEhZTHN4R0JxQWFlTnBha0h5bEZ0cUdqUmtmYTZjb216SE5LSDBobTNxdWhtalFscXR1NnlrZmJ4dkNwCjRQZjNaZFIzcWFoTi8zNXhJTkF4dThvNnkxclg4dWJXRTVsSENPWERiVUtOYm1LajlYQTBaZi9tWWVPelZyS2ZaL1RrVFRpcFVGOFYKamJBampoMFFhcWFPYzRHTitxL2QrSk1TV2hpa21vNk80M2x1YTBJSUhSRU55VGZsUHE2U1B6NGJ6Vjg3MlgzeWlKVm80WWMyN2p2cQpsa0ZjczBsM0d2YlJINTZOcFA2MmE5alA2ejcrU09qYTY2U0p0NW94blZEaDk0NDM2dCtKQ2JxM2tmMnIzbVZyVG1qZHVTYlc4am9nCkR6aCtYOGU0MWQvNUZMRlNmTytRWEpQdXR0MzVEKzBiSnlQRmR5WVJhODNJRWcxUE5PVjJYcFdrVHZWN2VzWXUvbnNLa3hSYjUxcVoKME1PaU8vQXJtUUp6TEZyN2ExbUpyQUxWS3NHZVorZmg0dWx0MGdabEFJQzlTemVzTVUyVC90SHRiZXZweEdwOTRXRi9JZ1VzR3czWAprbS9tUFFSd2RIV2hSQlNVdHRVWHl4UWdDZ3FOR09QTzlnYWRPTFhvY3hQSkFLQTJOODl4R0V1cTFic1g0V3ZVK0N6eGcyTW4wOXQ4Cmh3Y0hCWXExVXY2UkxEODNKek9qelRmMjlRZytteHQwMmhzOGE3ZXBaQUNBYXZhbExCWUg3K2dpK0hYQ2RDakREYWhteHlCd21QZXoKc1JYY2h2TnJnc0I1eFQyQ0p0azJNcmpKcEhlR0J2WCtvNGxmT2hQZUpwTTN5RWIrQXR1ZUM4NjM0VFh2Yi9DaHhpU3dQdjlDMG9PRQpPME80S2RoSHFySmtqTmxzU044UytPK1VzOUJWbnB0TURVMWdkNStuRHA5aWFqc1N2dU93MzgyamdaQ05UZDVtc3RHNDF0cG5keHRiCjlld1oxRmhXa2RGNnh4cjhjNFFqaEpDa2ZTZXJZVHp1dVkyUWpaOXBzc2JWbFkzei9VUTdpQ3lrRGJaZXg2eWc4bG5GOEJ4cUd1SkEKaWhHS0N5WmtJd1ZLaU9SMTJXajdsRGVETkxGTUlla3hpbkZFZWhFWTNocnRiRWpnTEVib09zTWVhVDBVUXlxUnZFNWsvalI2KzNmeApyb1M5R0gvNWpTZURtYmJQWEFnSVlHVU12eTF2dVBzRnNtZHpvOGtDRG0wMmlrY1ZYWjlQeUFVQVFQQ05xSmdUZUpIVVNGYVd0bjBYCmg5M3FHcEZHOW1SOEQ4SkZoRTQzS2ZVT0lXdGxXcTFsS2Y4b1ZzRHBId3dXMnArR1liSnEwd3VFRHpaNnFZa3RSUjRyT085aGdtY0EKQVBCM2ZqQWJsN21wZXVMQ1pDSWNJWVNrOFJUMjBBeW5LaVl6WGRDM0lPdlU5cFg3aVgxRE5jR1QzZXljWVNobjl0Wk4wTldaNGE0QgpwdU1iT3c2SndFWWN4eW5XZlQvSzM3Umt2SzhRQUdqWXcxYW5ndzJKZ0N3TnRTdWFCa2JxZExSYkhDZHRUdFlrNnJWU1RKTjVta0FqCkhEdkZzRi9JL29FcWVuVDRQZXZUOHpRM0x4UnVNSXNNaE80S3QycGZIZ0pLQVB4Qnl3OFZJNFJRcjczUGhJMXZ4QVFQOUdkTjJsdFAKSlNrYk0vMFpmRkNLRFJNUlF1aXZvbXF0cTJ2cUo3SGlnY09FcjY0R2Y4S09EWWE3TEkwZ1lPTngrOUNiaW1HdDBzN0diVVpYbGdBMgpURVFJMVRwckQwVkt0ZDZ4TlBCN0hXVERoalFjRzMyaGdSOFRzSUdXcVozRDZndFNOaGFITUFyR01YVi9hTDF6YThmbnFsdGFzeDk4CjhMYkNEbE02UjIxWXhzdjVKMGpZS0d2UHNmMkZrSTFHKzc4enlKME5aMjRxai9qSFdncXZ4bisxYkVhWVBZQlE4dzBGTVB4VWpjMXUKa3U5aEJKdEZUUG5UdWxoTUF3QlFUd2paU0lKU0JybTRzeWdPNzhVSW9TaG5BT2dSRVBQdXVyMUo5MGVvdWFCaHhBV0UwTnd3OHBOQQp1MExoOXdHWndpTUJBSUFmZXdVMUcrc1lZenhBNkN3K0ZrQUlyUkdmdUZXaHVaakxCd0NhZWpVZElZVFFIVjY4Mld6ODAwcEtxREdmCkJoRE1KMlhqdGRrTVlwSTRoQkRqY3NOSlNtczY1aS9XUUZQVHN6U1hiNzFBNXVYNnFIVW5kQTJFQ3ZrQS9PL1p5NnNqRkJsVFNCNC8KQlFBazJPT3pBTUFkVlhSZWVMYnczc2c3M0pHQXNySDZZOEtvdWl1V0tEOG5WZkg1RXczS0VRUUtDQ0dFK20vRWN5WlY5MzlNNzlFaQo3Zm1IcElXRk9wWHgxREd6WEdNdmRZNWNLWjhIdHF4akwwMUxHYkFlTHlYUmNJZHZ1UG1RaWFsZFltTk83UDl2cXpXbXFNMkdsd2lrCjFhdExEdFY0QjFvaDlRVUEyTGJpRERZUHJRb2NNYlU3eWlaZURBVVRjZTExKytMTVFZUkt6YVhsUXcvU213RUVka0ozZDNjUnk1WXkKY3lxV3NyT2F6b1RoUFhwUWdNMDZhWHpaL3FLSm5wRmdNM2xiSUVUK1N6c2ZDRHVCWG41b2RXdy9Db0J2NWVEajc5T3Z0eEFBSEVZdgoyWjJMN2VqVlgyK0xDL1paNGpTQkJrUElzZXhGL0hkcW1XMzlUMU80VUgwamlGTWdkSFVHN2JLNmM5NWd4Q0ZqdDBsYzdBK0MwRGUvClBKNVJxcmpiUG5pcXpqbTNZMUdrSFRoTjIyYzhsMGJOUmhwZzlueEpRYlBPQVFEWUYrbWdaVXhmNjYrOFdUV0lGRldUQlp2Vm44cSsKRXZNbkpxbC8zbFNndGh1NnhhVTVJbXJvbW5OMUJrMHBNcmJHQ2dVdi8yQ2t0MWV6b2ZEOGpQZ1o5WkVObHhsbHpydDVIaUd6cWpyZwo1cFhTY2RVU0h3MytranFFMEJzMFVCOTA5ZnQ2U1FDTWxEekVHcXc3Tk4ycTl3cURtMGJiWHdSclBObFBLaG5GY2w4VzBYZkZPOVQ0CnV3UkdNOGJ3bHVnT05HN0gyZmFLeTZtZ0FZQTNwMVc3cG42ems5MlNMQlpHWlYvNTBQTU44TkhPUnBIMUxyUEpLTEZobDVCNGRRaHYKT3B0SFJnaWhHeE9wY1AwMWxPb3RQdFFvR2dDQVA3YnpIeTlVQjF6dFdPZlh0ZjNnUzYvU3k4ZlZkQklmdXRTeXRHTVU3M3F6eldOTQpHZ3BodTVrRDllYjRhQmh4eXFDL0tVLzJVWGVKOUdETndFZzZscmVFZmE0aFFtM2Y5dmJzbW9PbVlhUGE4VjB6eVVpazJJL0xWTDlNCkZUak1QNE5qci9IRVd5S3JOeTRacXo2czJZUkFleFVnaEJEYWJ6ZjRCdUVUVjd4TnZhK2JSZEVSUUp5aURoSWEwMFc1OHh3aStkTE4Kd3ltN0NadFNEU1YxTkNULzdSVmJYdVEzTXVQcWtSMlRTYlRqSFlSYUYxQWZNZVVtRzBDOC9hQmk3ZXZPM0o3bGU4NlRqRys2b082bAoycHQyaERvbENWZVN5L2srQS8zZHhTNk9QQkdsa2l1clpNVmw5N09MVko1Um95Zmhsa0R6Z2p0emt2ZzlUb2ZOdlBxdmlhWThkdEZrCmVXSlE1MlVuRzRwcHFjbUJwcExSTWlrNzVRVlRGQXN5YzNKL2ZWelpXZURpNmg4Y0ZNYXduUkhlK3hZQWFCNm9sQ29Bb0wzbFoxaWQKWXEyUG10ZXlMM2R1OU5ESysyb2FuNWRnb25mSXA5NjVPTmcwVlFBQWFKRTlVZFlxQlhhQ1BpNVdyQlFxbjhocjVFL2xOWEw1aytvYQplYVZ5M1ZwVGI5MGNleS9WdStOS3U3bE90amxLMlBEVUtBb1JrNFFRenhxTGV0MWlQL1dwQi9tUWdJNjRWV2NZcG5pdjYwdVdGWTZJClFzMVp0RFFYUjRpM29laWkxR21lUVRZUU9tUS9rSFFTb25JZXRjUzhiRC96VU5GbnNaa1dFanJvN0RwRWZ4QkR6WmNSV0dyYjFVZDgKbkVEKzJlTTlEK0l0WGwweHg2L1ZNQnNJeFl0dFY3TGxvMjJmTDcycWpxWHcvdytrTkg0Rlhob0hBQkF1d2MzYS9TYmNhWXdOMVBpTgptODBDTmdsV3NrM2U5SUtpYnVVQ29aWGUyQnc4OVl5TU5BNC9pYmwwZ0ZFMkVHcmNHUXhEL3dkL1VGTHR3V2xXZlQ3c2JpNVFteXQyCmxiVWp4MUNDWmVNV3BCbG5BeUdVTXE4UERGbDkydkRVVE51TnJiRkNRZlNQM2ZueWJNY1ZLTVRVU2p2WGp2RVQzRUVyRVVMR2QyUkUKUkNndUgwLzRtaGNRSERKQTdPR2lFYXN1TDgzUHlibGI3enhxMTZSbjgyY0VaaUxGd3dkVHV3VmlPK0lxckprb2RYb2QvcVNheXBTTQozSndpQkR6N0hzSWVUU3A1VXpPQVEwaFFhT1NBN21aQmc2bFdoekMxRVdrc0QrSTVzS0NCRDB3N3g1Mm1UZ1ZvTGk4cmU5clNxQkFJCjdJVHU3aDcyN096L1RpZ2JqYXROQzJkcHhxdWwycG1SRFFBQUVIcDdNd3QxRjRoM3lodUdJMVE1QTZkT25EQUlGZllMaExQTnRoV0EKQWl5QURRZnNuNGRnLzJsSUc1WGdaQWxzT0dOUHNmb1l6clIvU3FTdytRWGxmQWRMWUNNc0hWZnJLMW5SN2h3YkFMdUNmRDNFeWhMWQpHSmxmZ2F0ZUx2RkxCSURFaURRcDFreUsrZ1FjcnJNUjFmTVF0bjY1OUFSRlVSdG1JdXplaGdjMzFGRWFGODhKMU1HQzI3Zk5OL0xaCnZvZDhBTzc3Qml6S1BHdTJqYWZmTGxRdlNIRGVOMkI2M2wxemoySmE5VU5CTHdDd0FOK0FUWVZiemJSd2UvdGFOUmtXNEJ1dzlaT3IKWml5TEFUUU1kYm5BdHhnMjBJUzhWSlBQZlFCUXZuNnRZNE0rOTFzS1VBZjdqR1A3NTM3NlFJdVNqbmVjVm1BQmJJRDk2WWF4eE1mTQp0a094OEtmRG5YKzRiQWxzZ0VleVltU3VTWnIxVXc2ZWlPMjh0QWcyd0N1bDMvQjlKdWhsRHIxNWFZTFd0V1d3QWIzUHY3OWdkZ1doCmttTHJTSTg3TCtvVWRmZWs5elBETDE2aW5VVG5JU1NIQ0RkMnlVRzNIRFpRdzFwcm45MnMrY2lhUWIyc2Q5S0JCYkdCVVA1Y2ZnQzcKYzFST3Z3b2pFdlhMTFlxTjlqTjJMakE0U080WGZhbm9SRU0xRmhDTDZrSytmMCttNCtTWUtDTkhjTlZmdTNUaW50dWY0Z3dmYkdGeApiQUJBNGJHVDZRcmZZU0hCZ1I1YVozT3BaUGs1T2JkdksvckhUaHRwckNlMVJEWUFvT0ZhOHEzY2h3Qk9yaTZVQ0tDaHRhNUVwb0RlCklRTWpvM0NIaGxrb0d3QUFVUHRyV2JHc0V0VWc2RW5iZWJpS2ZSZ1AxTEJrTnNoaEliSG9NOEp6TnJUeG5BMXQvQWVJZnZrVmkrQWsKM0FBQUFDVjBSVmgwWkdGMFpUcGpjbVZoZEdVQU1qQXlNUzB3TkMweE0xUXhPVG93TVRveE5Dc3dNRG93TUpFUDFFd0FBQUFsZEVWWQpkR1JoZEdVNmJXOWthV1o1QURJd01qRXRNRFF0TVROVU1UazZNREU2TVRRck1EQTZNRERnVW16d0FBQUFBRWxGVGtTdVFtQ0MiIC8+Cjwvc3ZnPgo=">
    <figcaption>Cross-Relation</figcaption>
</figure>
<h2 class="mume-header" id="92-browser-api-access-restrictions">9.2. Browser API Access Restrictions</h2>

<p>Because VuePress applications are server rendered in Node.js when generating static builds, any Vue usage must conform to the <a href="https://ssr.vuejs.org/en/universal.html">universal code requirements</a>. In short, make sure to only access Browser / DOM APIs in <code>beforeMount</code> or <code>mounted</code> hooks.</p>
<h3 class="mume-header" id="921-third-level-heading">9.2.1 Third level heading</h3>

<p>If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in <code>&lt;ClientOnly&gt;</code> component:</p>
<p>::: tip PRUEBA<br>
This is a tip<br>
:::</p>
<h2 class="mume-header" id="93-browser-api-access-restrictions">9.3. Browser API Access Restrictions</h2>

<p>Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the <a href="https://ssr.vuejs.org/en/universal.html">universal code requirements</a>. In short, make sure to only access Browser / DOM APIs in <code>beforeMount</code> or <code>mounted</code> hooks.</p>
<p>If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in <code>&lt;ClientOnly&gt;</code> component:</p>
<h2 class="mume-header" id="94-browser-api-access-restrictions">9.4. Browser API Access Restrictions</h2>

<p>Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the <a href="https://ssr.vuejs.org/en/universal.html">universal code requirements</a>. In short, make sure to only access Browser / DOM APIs in <code>beforeMount</code> or <code>mounted</code> hooks.</p>
<p>If you are using or demoing components that are not SSR- friendly (for example containing custom directives), you can wrap them inside the built-in <code>&lt;ClientOnly&gt;</code> component:</p>
<h2 class="mume-header" id="95-browser-api-access-restrictions">9.5. Browser API Access Restrictions</h2>

<p>Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the <a href="https://ssr.vuejs.org/en/universal.html">universal code requirements</a>. In short, make sure to only access Browser / DOM APIs in <code>beforeMount</code> or <code>mounted</code> hooks.</p>
<p>If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in <code>&lt;ClientOnly&gt;</code> component:</p>
<h2 class="mume-header" id="96-browser-api-access-restrictions">9.6. Browser API Access Restrictions</h2>

<p>Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the <a href="https://ssr.vuejs.org/en/universal.html">universal code requirements</a>. In short, make sure to only access Browser / DOM APIs in <code>beforeMount</code> or <code>mounted</code> hooks.</p>
<p>If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in <code>&lt;ClientOnly&gt;</code> component:</p>
<h2 class="mume-header" id="97-browser-api-access-restrictions">9.7. Browser API Access Restrictions</h2>

<p>Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the <a href="https://ssr.vuejs.org/en/universal.html">universal code requirements</a>. In short, make sure to only access Browser / DOM APIs in <code>beforeMount</code> or <code>mounted</code> hooks</p>
<p>If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in <code>&lt;ClientOnly&gt;</code> component:</p>

      </div>
      
      
    
    
    
    
    
    
    
    
  
    </body></html>