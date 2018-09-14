"use strict"
var algo = algo || {};
var algo={
		init : x=>{
			algo.onCreate(x);
			algo.setContentView();
			
		},
		onCreate : x=>{
			algo.router.onCreate(x);
		},
		setContentView : ()=>{
			$('#wrapper').empty();
		}
};
algo.main ={
		onCreate:()=>{
			algo.main.setContentView();
		},
		setContentView : ()=>{
			$('#wrapper').html('<h1>알고리즘</h1><h3>수열</h3><div id="ctn">'
					+'<table id="tb1" style="width:800px; height:300px;'
					+'border-collapse: collapse; border:1px solid black; margin:0 auto">'
					+'<tr style="border: 1px solid black;">'
					+'<td id="t__l" style="width:50%; border:1px solid black;"></td>'
					+'<td id="t__r" style="width:50%; border:1px solid black;"></td>'
					+'</tr></table></div>');
			
	/*		$('#t__l').html('<a id="arith__seq"><h3>등차수열</h3></a><br>');
			$('#t__l').append('<a id="fibo__seq"><h3>피보나치수열</h3></a><br>');
			$('#t__l').append('<a id="swit__seq"><h3>스위치</h3></a><br>');
			$('#t__l').append('<a id="fac__seq"><h3>팩토리</h3></a><br>');*/
			alert('step 5.5');
			let $t__l=$('#t__l');   //$t__l이 객체가 된다.
			let $t__r=$('#t__r'); 
			alert('step 6');
			$('<ul/>')
			.attr({id : 'side__menu'})
			.addClass('list-group').appendTo($t__l);
			$('<li/>')
			.attr({id : 'arith'})
			.addClass('list-group-item')
			.appendTo($('#side__menu'));
			
			
			
			//---------------------------등차수열---------------------------//
			$("<a/>")
			.attr({href:'#'})
			.html('등차수열')
			.appendTo($('#arith'))
			.click(e=>{
				$t__r.empty();
				
				$('<div/>').attr({id:'ques'}).appendTo($t__r);
				$('<h4/>').html('초항 A부터 N번째 숫자 까지, 공차 D인 수열의 합을 구하는 알고리즘').appendTo($('#ques'));
				
				//1차
				/*let qes ='<div id ="ques"><h4>'
					+ '초항 A부터 N번째 숫자 까지, 공차 D인 수열의 합을 구하는 알고리즘'
					+ '</h4><br>'
					+ '<label >A : </label><input id="a" type="text" value=""><br>'
					+ '<label >D : </label><input id="d" type="text" value=""><br>'
					+ '<label >N : </label><input id="k" type="text" value=""><br>'
					+ '<button id="bt">결과 보기</button></div>'
					+ '<h6 id="rs"></h6>';
				
				//2차
				$('<label>').html('A  :  ').appendTo($('#ques'));
				$('<input>').attr({id : 'a', type : 'text'}).appendTo($('#ques'));
				$('<br/>').appendTo($('#ques'));
				
				$('<'+'label'+'>').html('D  :  ').appendTo($('#ques'));
				$('<input>').attr({id : 'd', type : 'text'}).appendTo($('#ques'));
				$('<br/>').appendTo($('#ques'));
				
				$('<label>').html('N  :  ').appendTo($('#ques'));
				$('<input>').attr({id : 'n', type : 'text'}).appendTo($('#ques'));
				$('<br/>').appendTo($('#ques'));
			
				//3차
					
				let arr =[{id:'a',label:'A : '}
				,{id:'d',label:'D : '}
				,{id:'n', label:'N :  '}];
				for(let i in arr){
					$('<label>').html(arr[i].label).appendTo($('#ques'));
					$('<input>').attr({id : arr[i].id, type : 'text'}).appendTo($('#ques'));
					$('<br/>').appendTo($('#ques'));
				}
				
				//4차
				let arr =[{id:'a',label:'A : '}
				,{id:'d',label:'D : '}
				,{id:'n', label:'N :  '}];
				
				$(arr).each(function(){
					$('<label>').html(this.label).appendTo($('#ques'));
					$('<input>').attr({id : this.id, type : 'text'}).appendTo($('#ques'));
					$('<br/>').appendTo($('#ques'));
				});
				
				$.each(arr, function(i, val){
					$('<label>').html(val.label).appendTo($('#ques'));
					$('<input>').attr({id : val.id, type : 'text'}).appendTo($('#ques'));
					$('<br/>').appendTo($('#ques'));
				});
				
				$.each(arr, (i, val)=>{
					$('<label>').html(val.label).appendTo($('#ques'));
					$('<input>').attr({id : val.id, type : 'text'}).appendTo($('#ques'));
					$('<br/>').appendTo($('#ques'));
				});
				
				$.each(arr, function(){
					$('<label>').html(this.label).appendTo($('#ques'));
					$('<input>').attr({id : this.id, type : 'text'}).appendTo($('#ques'));
					$('<br/>').appendTo($('#ques'));
				});
				*/
				
			
				let arr =[{id:'a',label:'A : '}
				,{id:'d',label:'D : '}
				,{id:'n', label:'N :  '}];
				$(arr).each(function(){
					$('<label>').html(this.label).appendTo($('#ques'));
					$('<input>').attr({id : this.id, type : 'text'}).appendTo($('#ques'));
					$('<br/>').appendTo($('#ques'));
				});
				
				$('<button/>').addClass('btn btn-primary').attr({type :'button'}).html('결과보기').appendTo('#ques').click(e=>{	
					$('<h6/>').attr({id : 'rs'}).appendTo($('#ques'));
					
					if($.fn.nullChecker(
							[$('#a').val(),
								$('#d').val(),
								$('#n').val()]
							)){
						$('#rs').text('빈칸을 채우세요');
					}else{
						let a = $('#a').val()*1;
						let n = 1;
						let d = $('#d').val()*1;
						let s = 0;
						let end =$('#n').val()*1;
						let an = 0;
						while(true){
							an=a+(n-1)*d;
							s=s+an;
							n=n+1;
							if(n>end) break;
						}
						$('#rs').text('답 : '+s);	
					}	
				});
						
			});
			
			//---------------------------피보나치수열---------------------------//
			$('#fibo__seq').click(e=>{
				let qes ='<h4>'
					+ '피보나치 수열에 대하여 S번째 부터 N번째 항까지의 합을 구하는 알고리즘'
					+ '</h4><br>'
					+ '<label>S : </label><input id="start" type="text" value=""><br>'
					+ '<label>N : </label><input id="end" type="text" value=""><br>'
					+ '<button id="bt">결과 보기</button>'
					+ '<h6 id="rs"></h6>';
				$('#t__r').html(qes);
				
				
				$('#bt').click(e=>{
					if($.fn.nullChecker(
							[$('#start').val(),
								$('#end').val()]
							)){
						$('#rs').empty().text('빈칸을 채우세요');
					}else{
						let a = $('#start').val()*1;
						let n = 1;
						let x = 0;
						let y = a; 
						let s = x+y;
						let z =0;
						let end = $('#end').val()*1;

						while(true){
							z=x+y;
							s=s+z;
							x=y;
							y=z;
							n=n+1;
							if(n==end) break;
						}
						$('#rs').empty().text('답 : '+s);	
					}		
				})
			});
			
			//---------------------------스위치수열---------------------------//
			
			$('#swit__seq').click(e=>{
				let qes ='<h4>'
					+ '시작값 S부터 끝값 E까지 부호를 교차하여 합을 구하는 알고리즘'
					+ '</h4>'
					+ '<label>S : </label><input id="start" type="text" value=""><br>'
					+ '<label>E : </label><input id="end" type="text" value=""><br>'
					+ '<button id="bt">결과 보기</button>'
					+ '<h6 id="rs"></h6>';
				$('#t__r').html(qes);
				
				$('#bt').click(e=>{
					if($.fn.nullChecker(
							[$('#start').val(),
								$('#end').val()]
							)){
						$('#rs').empty().text('빈칸을 채우세요');
					}else{
						let start = $('#start').val()*1;
						let end = $('#end').val()*1;
						let n = start;
						let s = 0;
						let ans ='답 : ';

						while(true){
							s=s+n;
							if(n==end) break;
							n=n+1;
							s=s-n;
							if(n==end) break;
							n=n+1;
						}
						$('#rs').empty().text('답 : '+s);	
					}			
				})
			});
			
			
			//---------------------------팩토리수열---------------------------//
			$('#fac__seq').click(e=>{
				let qes ='<h4>'
					+ '시작값 S부터 끝값 E까지 누승(factorial)의 합을 구하는 알고리즘'
					+ '</h4>'
					+ '<label>S : </label><input id="start" type="text" value=""><br>'
					+ '<label>E : </label><input id="end" type="text" value=""><br>'
					+ '<button id="bt">결과 보기</button>'
					+ '<h6 id="rs"></h6>';
				$('#t__r').html(qes);
				
				$('#bt').click(e=>{
					if($.fn.nullChecker(
							[$('#start').val(),
								$('#end').val()]
							)){
						$('#rs').empty().text('빈칸을 채우세요');
					}else{
						let start = $('#start').val()*1;
						let end = $('#end').val()*1;
						let n=start;
						let f=1;
						let s=0;
						
						while(true){
							let i=0;
							let z=1;
							i++;
							z=z*i;
							if(i==start){
								f=z;
								s=z;
								break;
							}
						}
						while(true){
							n++;
							f=f*n;
							s+=f;
							if(n==end) break;
						}
						$('#rs').empty().text('답 : '+s);	
					}			
				})
				
			});
		}
};
algo.series = {
		arith : x=>{},
		fibo : x=>{},
		swit : x=>{},
		factorial : x=>{}
};
algo.array = {
		bubble : x=>{},
		insert : x=>{},
		select : x=>{},
		ranking : x=>{}
};
algo.matrix = {
		obyo : x=>{},
		sandGlass : x=>{},
		snail : x=>{},
		diamond : x=>{},
		zigzag : x=>{}
};
algo.math = {};
algo.appl = {};

algo.router = {
	onCreate : x=>{
		$.getScript(x+'/resources/js/router.js',
			()=>{
			$.extend(new Session(x)); //extend -> 상속
			$.getScript(x+'/resources/js/util.js')
			.done(x=>{console.log('실행');})
			.fail(x=>{console.log('실패');})
			algo.main.onCreate();
		}); 
	}
};

	
