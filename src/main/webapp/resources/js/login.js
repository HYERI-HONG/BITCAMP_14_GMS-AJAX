function loginUI(){
	return '<div id="contentBox">'
	+'<div id = "login_content">'
	+'<h3 align="center">로그인</h3>'
	+'<form id = "loginForm" name = "loginForm">'
		+'ID :<br>'
		+'<input type="text" id="userid"/>'
		+'<br>'
		+'Password :<br>'
		+'<input type="text" id="password"/>'
		+'<br><br>'
		+'<input id="login_submit" type="button" value="전송" />'
		+'<h6 id="rs" style="color:red"></h6>'
	+'</form>'
+'</div>'
+'</div>';
}