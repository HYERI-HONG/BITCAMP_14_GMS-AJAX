"use strict"
function headerUI(){
	return  '<header id="auth">'
    +'<div class="container main-menu">'
	+'<div class="row align-items-center justify-content-between d-flex">'
      +'<div id="logo">'
        +'<a href="index.html"><img src="'+$.ctx()+'/resources/img/logo.png" alt="" title="" /></a>'
      +'</div>'
      +'<nav id="nav-menu-container">'
        +'<ul class="nav-menu">'
          +'<li><a id="home_btn">Home</a></li>'
          +'<li><a id="logout_btn">Logout</a></li>'
          +'<li><a id="mypage_btn">My Page</a></li>'
          +'<li><a id="myboard_btn">Board</a></li>'
        +'</ul>'
      +'</nav>	    		'
	+'</div>'
+'</div>'
+'</header>';
}