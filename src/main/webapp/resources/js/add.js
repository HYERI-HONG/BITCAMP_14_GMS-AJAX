function addUI(){
	return '<div id="contentBox">'
	+'<div id="add_content">'
	+'<h2 align="center">회원 가입</h2>'
	+'<br>'
		+'아이디 : <br>'
		+'<input type="text" id="userid"/>'
		+'<br>'
		+'비밀번호 : <br>'
		+'<input type="text" id="password"/>'
		+'<br>'
		+'이름 : <br>'
		+'<input type="text" id="name" />'
		+'<br>'
		+'주민 번호 : <br>'
		+'<input type="text" id ="ssn"/>'
		+'<br>'
		+'소속팀 : <br>'
	    +'<input type="radio" class="teamid" name="teamid" value="LP" checked="checked" /> 레츠플레이팀'
	    +'<input type="radio" class="teamid" name="teamid" value="GG" /> 지은이랑지은집팀'
	    +'<input type="radio" class="teamid" name="teamid" value="TurtleKing" /> 거북왕팀'
	    +'<input type="radio" class="teamid" name="teamid" value="CodingStar" /> 언프리티코딩스타팀'
	    +'<br>'
		+'프로젝트역할 :<br>'
	/*    +'<select name="roll" id="roll" class="select">'
	    +'<option value="팀장">팀장</option>'
	    +'<option value="프론트 담당">프론트개발</option>'
	    +'<option value="백단 담당">백단개발</option>'
	    +'<option value="안드로이드 담당">안드로이드개발</option>'
	    +'<option value="무임승차">무임승차</option>'
	    +'</select>'*/
		+'<input type="checkbox" name="roll" value="leader" checked="checked"/> 팀장'
		+'<input type="checkbox" name="roll" value="front" /> 프론트개발'
		+'<input type="checkbox" name="roll" value="back" /> 백단개발'
		+'<input type="checkbox" name="roll" value="android" /> 안드로이드개발'
		+'<input type="checkbox" name="roll" value="minfe" /> 민폐'
		+'<br><br>'
		+'<input id="add_submit" type="button"  value = "등록" />	'
+'</div>'
+'</div>';
}