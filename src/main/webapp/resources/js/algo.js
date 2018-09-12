"use strict"
var algo = algo || {};
var algo={
		init : x=>{
			alert("context path :: "+x);
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
			
			$('#t__l').html('<a id="arith__seq"><h3>등차수열</h3></a><br>');
			$('#arith__seq').click(e=>{alert("등차수열 선택");});
			
			$('#t__l').append('<a id="fibo__seq"><h3>피보나치수열</h3></a><br>');
			$('#fibo__seq').click(e=>{alert("피보타치수열 선택");});
			
			$('#t__l').append('<a id="swit__seq"><h3>스위치</h3></a><br>');
			$('#swit__seq').click(e=>{alert("스위치수열");});
			
			$('#t__l').append('<a id="fac__seq"><h3>팩토리</h3></a><br>')
			$('#fac__seq').click(e=>{alert("팩토리얼수열");});
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
			algo.main.onCreate();
		}); 
	}
};
	
