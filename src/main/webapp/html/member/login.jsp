<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div id="contentBox">
	<div id = "login_content">
		<h3 align="center">로그인</h3>
		<form id = "loginForm" name = "loginForm">
			ID :<br>
			<input type="text" name="userid"/>
			<br>
			Password :<br>
			<input type="text" name="password"/>
			<br><br>
			<input id="login_submit" type="button" value="전송" />
		</form>
	</div>
</div>
<script>
$('#login_submit').click(function(){
	$('#loginForm').attr({
		action:"${context}/member/login",
		method:"POST"
	})
	.submit();
});
</script>