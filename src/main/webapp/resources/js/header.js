"use strict"
function headerUI(){
	return  '<header id="header">'
    +'<div class="container main-menu">'
	+'<div class="row align-items-center justify-content-between d-flex">'
      +'<div id="logo">'
        +'<a href="index.html"><img src="'+$.ctx()+'/resources/img/logo.png" alt="" title="" /></a>'
      +'</div>'
      +'<nav id="nav-menu-container">'
        +'<ul class="nav-menu">'
          +'<li><a id="home_btn">Home</a></li>'
          +'<li><a id="login_btn">Login</a></li>'
          +'<li><a id="add_btn">Join</a></li>'
          +'<li><a id="board_btn">Board</a></li>'
        +'</ul>'
      +'</nav>	    		'
	+'</div>'
+'</div>'
+'</header>';
}