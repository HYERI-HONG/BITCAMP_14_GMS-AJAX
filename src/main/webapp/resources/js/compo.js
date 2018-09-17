"use strict"
var ui={
	div : x=>{
		return $('<div/>').attr(x);
	},
	anchor : x=>{
		return $('<a/>').attr({href:'#'}).html(x.txt); 
		},
	ul : x=>{
		let ul = $('<ul>').addClass('list-group');
		for(var i=0; i<x.len; i++){
			$('<li/>').attr({id:x.id+'-'+i}).addClass('list-group-item').appendTo(ul);
		}
		return ul;
	},
	/*input : x=>{
		return $('<input/>')
		.attr(x).addClass('form-control');
	},*/
	input : x=>{
		let p = ui.div({}).addClass("input-group mb-3");
		(ui.div({id:'input-group-prepend'})
				.addClass("input-group-prepend"))
				.html('<span class="input-group-text" id="basic-addon1">'
						+ x.input_val
						+'</span>').appendTo(p);
		$("<input/>").attr({
			id : x.input_id,
			type: "text",
			placeholder:"0원" ,
			"aria-label":"Username", 
			"aria-describedby":"basic-addon1"
		}).addClass("form-control").appendTo(p);
		return p;
	},
	label : x=>{
		return $('<label/>').attr('for',x.id).text(x.txt);
	}
	
	
}