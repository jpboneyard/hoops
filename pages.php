<?php
	$client_name = 'Upstatement';
?>

<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title><?php echo $client_name ?> Pages</title>
  <meta name="description" content="">
  <meta name="author" content="">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <link rel="stylesheet" href="/_css/screen.css?v=2">
  <link rel="stylesheet" href="/_css/patterns.css" media="screen"/>  
  <script type="text/javascript" src="_js/libs/modernizr-2.0.6.min.js"></script>

	<?php 
               $code_snip =
               '<dt>Cope Snip</dt>
               <dd class="code-snip"><pre class="code prettyprint linenums"><code class="php boc-html-script"></code></pre></dd>';
       ?>

</head>

<body class="pages-bd" onload="prettyPrint()">

	<nav id="style-hdr">
		<div class="style-hdr-group">		
        <h1 class="style-page-h"><span class="client-name"><?php echo $client_name ?></span> <span class="thin">Pages</span></h1>
			 <img class="style-logo" src="_img/upstatement-logo.png" alt="Upstatement" />
		</div> <!-- style-hdr-group -->
	</nav> <!--style-hdr -->

	<div class="pages-content-outer">
		  <div class="pages-content">

        <h3 class="pages-h">Top-Level Pages</h3>
        <ul class="pages-list">
          <li><a href="/home.php">Homepage</a></li>
          <li><a href="/blogs.php">Blogs</a></li>
          <li><a href="/archive.php">Archive</a></li>
        </ul>

        <h3 class="pages-h">Article Pages</h3>
        <ul class="pages-list">
          <li><a href="/article-initiative.php">Article
              <p class="pages-list-sub">With Initiative Sidebar</p></a></li>
          <li><a href="/article.php">Article
              <p class="pages-list-sub">With Podcast Sidebar</p></a></li>
          <li><a href="/article-blog.php">Blog Article</a></li>
          <li><a href="/article-short.php">Blog Article - Short</a></li>
          <li><a href="/article-quote.php">Blog Article - Quote</a></li>
        </ul>

  	</div> <!-- pages-content -->
  </div> <!-- /pages-width -->


  <script type="text/javascript" src="_js/libs/jquery-1.7.2.min.js"></script>

  <script type="text/javascript" src="_js/libs/jquery.tools.min.js"></script>  

  <!-- Modals: Do you enjoy modals? Yes you do -->
  <script type="text/javascript" src="_js/libs/jquery.simplemodal.1.4.2.min.js"></script>

  <!-- scripts concatenated and minified via ant build script-->
  <script type="text/javascript" src="_js/libs/prettify.js"></script>
  <script type="text/javascript" src="_js/libs/style-guide.js"></script>
  <script type="text/javascript" src="_js/script.js"></script>
  <script type="text/javascript" src="_js/up-base.js"></script>
  <!-- end scripts-->


  <!-- PNG fix for IE6 -->
  <!--[if lt IE 7 ]>
    <script src="_js/libs/dd_belatedpng.js"></script>
    <script>DD_belatedPNG.fix("img, .png_bg");</script>
  <![endif]-->


  <!-- change the UA-XXXXX-X to be your site's ID -->
  <script>
    var _gaq=[["_setAccount","UA-XXXXX-X"],["_trackPageview"]]; // Change UA-XXXXX-X to be your site's ID 
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
    g.src=("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js";
    s.parentNode.insertBefore(g,s)}(document,"script"));
  </script>


  <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6.
       chromium.org/developers/how-tos/chrome-frame-getting-started -->
  <!--[if lt IE 7 ]>
    <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->

</body>
</html>