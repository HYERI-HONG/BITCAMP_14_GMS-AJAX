package com.gms.web.brd;


import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.gms.web.page.Pagination;


@RestController
public class BoardCtrl {
	static final Logger logger = LoggerFactory.getLogger(BoardCtrl.class);
	@Autowired BoardMapper brdmapper;
	@Autowired Board brd;
	@Autowired Pagination page;
	@Autowired Map<String, Object> map;
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody Map<String,Object> list(@PathVariable String pageNo){
		logger.info("BoardController ::: list(){}");
		map.clear();
		map.put("pageNo", Integer.parseInt(pageNo));
		map.put("count",brdmapper.countAll());
		page.carryOut(map);
		map.put("list", brdmapper.listAll(page));	
		map.put("page", page);
		return map;
		
	}
	@RequestMapping("/boards/{id}/{pageNo}")
	public @ResponseBody Map<String,Object> mylist(@PathVariable String id,@PathVariable String pageNo){
		logger.info("BoardController ::: mylist(){}");
		
		map.clear();
		map.put("pageNo", Integer.parseInt(pageNo));
		map.put("count",brdmapper.countSome(id));
		page.carryOut(map);
		
		map.put("beginRow", page.getBeginRow());
		map.put("endRow", page.getEndRow());
		map.put("id", id);
		map.put("list", brdmapper.listSome(map));	
		map.put("page", page);
		return map;
		
	}
}
