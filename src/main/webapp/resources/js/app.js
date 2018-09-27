"use strict";
var app = app || {};

app =(()=>{
	var init =x=>{
		console.log('step1 : app.init 진입');
		app.router.init(x);
	};
	return {init : init};
})();

app.main =(()=>{
	var w, header, footer, content, ctx, script, style, img;
	var init =()=>{
		console.log('step5 : app.main.init ::  진입');
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		w=$('#wrapper');
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		console.log('app.main.setContentView 진입');
		app.router.home({header:'header'});
	};
	return {init : init};
})();
//회원가입
app.join = (()=>{
	var add =()=>{
		alert('회원가입 진입');
		$('#content').empty();
		$.getScript($.script()+'/add.js',()=>{
			$('#content').html(addUI());
			$("[name='subject']").change(function() {
				alert($(this).val());
			});
			$('#add_submit').click(e=>{
				e.preventDefault();
				var sub ='';
				for(let i of $("[name='roll']")){
					if(i.checked){
						sub+=i.value+'/';
					}
				}
				$.ajax({
					url : $.ctx()+'/member/add',
					method : 'POST',
					contentType : 'application/json',
					data : JSON.stringify({
						userid : $('#userid').val(),
						password : $('#password').val(),
						name : $('#name').val(),
						ssn : $('#ssn').val(),
						teamid : $('.teamid:checked').val(),
						//roll : $('#roll').val()
						roll : JSON.stringify(arr)
					}),
					success : d=>{
						
					},
					error : (m1,m2,m3)=>{
						alert("error발생");
					}
				});
			});
		});
	};
	return {add : add};
	
})();
//로그인
app.permission = (()=>{
	var login =()=>{
		alert('로그인 진입');
	/*	$('#footer').remove();*/
		$('#content').empty();
		//$.getScript($.script()+'/compo.js');
		$.getScript($.script()+'/login.js'
		,()=>{
			$('#content').html(loginUI());
			$('<input/>').attr({id:'login_submit',type:'button',value:'로그인'}).appendTo($('#login_content'));
			//ui.button({id:'login_submit',value:'로그인'}).css('background-color','blue').appendTo($('#login_content'));
			
			$('#login_submit').click(e=>{
				e.preventDefault();
			
				if($.fn.nullChecker([$('#userid').val(),$('#password').val()])){
					$('#rs').html('필수입력값을 입력하세요.');
				}else{
					$.ajax({
						url : $.ctx()+'/member/login',
						method : 'POST',
						contentType : 'application/json',
						data: JSON.stringify({
							userid:$('#userid').val(),
							password:$('#password').val()
							}),
						success : d=>{
							//$('<h6/>').attr({id : 'rs',color:'red'}).appendTo($('#login_submit'));
							if(d.idValid==='WRONG'){
								$('#rs').html('일치하는 아이디값이 없습니다.');
							}else if(d.pwValid==='WRONG'){
								$('#rs').html('비밀번호를 잘못 입력했습니다.');
							}else{
								app.router.home({header:'auth'});
							}
						},
						error : (m1,m2,m3)=>{
							alert('에러발생');
						}
					});
				}
			})
		});
	};
	return{login:login};
})();

app.board =(()=>{
	var w, header, footer, content, ctx, script, style, img;
	var init =()=>{
		console.log('step5 : app.board.init ::  진입');
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		w=$('#wrapper');
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		alert('게시판');
		
		$('#content').empty();
		
		$.getJSON(ctx+'/boards/1',d=>{
			$.getScript(script+'/compo.js',()=>{
				ui.div({id:'listContent',style:'margin: 160px 60px'}).appendTo($('#content'));
				let x={
						type :"defualt",
						id : "table",
						head : "게시판",
						body : "오픈게시판",
						list : ['번호','제목','내용','글쓴이','작성일','조회수'],
						clazz : 'table table-bordered'
				};
				(ui.table(x)).appendTo($('#listContent'));
				$.each(d,(i,j)=>{
					let tr = $('<tr/>');
					$('<td/>').html(j.bno).appendTo(tr);
					$('<td/>').html(j.title).appendTo(tr);
					$('<td/>').html(j.content).appendTo(tr);
					$('<td/>').html(j.writer).appendTo(tr);
					$('<td/>').html(j.regdate).appendTo(tr);
					$('<td/>').html(j.viewcnt).appendTo(tr);
					tr.appendTo($('tbody'));
				});
			});
			
		});
	};
	return{init:init}; 
})();

app.router = {
		init : x=>{
			console.log('step2 : app.router.init 진입');
			$.getScript(x+'/resources/js/router.js',
				()=>{
					console.log('step3 : app.router.init ::  getScript');
						$.extend(new Session(x)); // 확장
						$.getScript(x+'/resources/js/util.js')
						.done(()=>{console.log('step4 : app.router.init :: 성공');})
						.fail(()=>{console.log('step4 : app.router.init :: 실패');});
						app.main.init();
					}
				); // 외부의 js파일 호출, import 느낌
		},
		home : x=>{
			$.when(
					$.getScript($.script()+'/'+x.header+'.js'),
					$.getScript($.script()+'/content.js'),
					$.getScript($.script()+'/footer.js'),
					$.Deferred(y=>{
						$(y.resolve);
					})
				).done(x=>{
						$('#wrapper').html(headerUI()
								+contentUI()
								+footerUI()
						);
						$('#login_btn').click(e=>{
							e.preventDefault();
							app.permission.login();
						});
						$('#add_btn').click(e=>{
							e.preventDefault();
							app.join.add();
						});
						$('#board_btn').click(e=>{
							app.board.init();
						});
						$('#logout_btn').click(e=>{
							e.preventDefault();
							app.router.home({header:'header'});
						});
						console.log(' when done 로드성공');
				})
				.fail(x=>{console.log(' when fail 로드실패');})
		}
};

/*"use strict";
var app = app || {}
var user = user || {}
var app={
	init : x =>{
		sessionStorage.removeItem('image');
		app.session.context(x);
		app.onCreate();
	},
	onCreate : ()=>{
		app.setContentView();
		$('#login_btn').click(()=>{
			location.href = app.x()+'/move/member/login/off';
		});
		$('#login_submit').click(()=>{
			$('#loginForm').attr({
				action:app.x()+"/member/login",
				method:"POST"
			})
			.submit();
		});
		$('#logout_btn').click(()=>{
			location.href = app.x()+'/member/logout';
		});
		$('#mypage_btn').click(()=>{
			location.href = app.x()+'/member/retrieve/'+user.getItem().userid;
		});
		$('#home_btn').click(()=>{
			var auth="";
			if(user.getItem().userid===null){
				auth="off";
			}else{
				auth ="on";
			}
			location.href = app.x()+'/move/common/content/'+auth;
		});
		$('#add_btn').click(()=>{
			location.href = app.x()+'/move/member/add/off';
		});
		$('#add_submit').click(()=>{
			var form = document.getElementById('joinForm');
			form.action = app.x()+"/member/add";
			form.method = "POST";
			form.submit();	
			$('#addForm')
			.attr({
				action:app.x()+"/member/add",
				method:"POST"
			})
			.submit();
		});
		$('#goModify').click(()=>{
			location.href = app.x()+'/move/member/modify/on';
		
		});
		$('#modify_submit').click(()=>{
			
			var form = document.getElementById('modifyForm');
			var node = document.createElement('input');	
			node.setAttribute('type', 'hidden');
			node.setAttribute('name','userid');
			node.setAttribute('value',user.getItem().userid);
			form.appendChild(node);
			$('#modifyForm').attr({
				action:app.x()+"/member/modify",
				method:"POST"
			}).submit();
		});
		$('#goRemove').click(()=>{
			location.href = app.x()+'/move/member/remove/on';
		});
		$('#remove_submit').click(()=>{
			
			var form = document.getElementById('removeForm');
			var node = document.createElement('input');	
			node.setAttribute('type', 'hidden');
			node.setAttribute('name','userid');
			node.setAttribute('value',user.getItem().userid);
			form.appendChild(node);
			
			if(user.getItem().password===form.password.value){
				$('#removeForm').attr({
					action:app.x()+"/member/remove",
					method:"POST"
				}).submit();
			}else{
				alert("비밀번호가 틀렸습니다.")
			}
		});
	},
	setContentView : ()=>{
		
	}
};


user.session = x=>{
	$.each(x, (k,v)=>{
		sessionStorage.setItem(k,v);
	});
}
user.getItem=()=>{
	return {
		userid : sessionStorage.getItem("userid"),
		password : sessionStorage.getItem("password")
	}
}
user.modify=()=>{
	let a = user.getItem().userid;
	$('#modifyuserid').text(a);
}*/



