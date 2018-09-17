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
algo.main =(()=>{
	var $wrapper, context, img, script,style,compo,json,$t__l,$t__r;
	var onCreate =()=>{
		context = $.context();
		img = $.img();
		script = $.script();
		style = $.style();
		compo = script+'/compo.js';
		setContentView();
	};
	var setContentView = () =>{
		$('#wrapper').html('<h1 style="text-align:center">알고리즘</h1>'
				+'<span id="seq" >수열</span>'
				+'<span id="appl">응용</span>'
				+'<div id="ctn">'
				+'<table id="tb1" style="width:800px; height:300px;'
				+'border-collapse: collapse; border:1px solid black; margin:0 auto">'
				+'<tr style="border: 1px solid black;">'
				+'<td id="t__l" style="width:50%; border:1px solid black;"></td>'
				+'<td id="t__r" style="width:50%; border:1px solid black;"></td>'
				+'</tr></table></div>');
		$t__l=$('#t__l');
		$t__r=$('#t__r'); 
		
		//---------------------------수열---------------------------//
		$('#seq').click(x=>{
			$t__l.empty();
			$t__r.empty();
			
			$('<ul/>')
			.attr({id : 'side__menu'})
			.addClass('list-group').appendTo($t__l);
			$('<li/>')
			.attr({id : 'arith'})
			.addClass('list-group-item')
			.appendTo($('#side__menu'));
			
			$("<a/>").attr({href:'#'}).html('등차수열').appendTo($('#arith')).click(e=>{
				$t__r.empty();
				$('<div/>').attr({id:'ques'}).appendTo($t__r);
				$('<h4/>').html('초항 A부터 N번째 숫자 까지, 공차 D인 수열의 합을 구하는 알고리즘').appendTo($('#ques'));
				
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
			})
		});
		
		//---------------------------응용---------------------------//
		$('#appl').click(x=>{
			$t__l.empty();
			$t__r.empty();
			$.getScript(compo,()=>{
				ui.ul({len : 1, id:'menu'}).appendTo($t__l);
				ui.anchor({txt : '화페문제'}).appendTo($('#menu-0')).click(x=>{
					$('<h6>화폐문제<h6/><br>').appendTo($t__r);
					ui.input({
						input_id:'money',
						input_val:'입금액'
					}).appendTo($t__r);
					
				});
			});
		});
		
	};
	return {
		onCreate : onCreate,
		setContentView : setContentView
	};
})();
/*algo.main ={
		onCreate:()=>{
			algo.main.setContentView();
		},
		setContentView : ()=>{
		}
};*/
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

	
