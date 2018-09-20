package com.gms.web.cmm;

import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeCtrl {
	static final Logger logger = LoggerFactory.getLogger(HomeCtrl.class);
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model,HttpServletRequest request) {
		model.addAttribute("ctx",Util.ctx.apply(request));
		Util.Log.accept("ctx ::"+Util.ctx.apply(request));
		return "main";
	}
	@RequestMapping("/move/{dir}/{page}/{auth}")
	public String move(
			@PathVariable String dir,
			@PathVariable String page,
			@PathVariable String auth) {
		logger.info("HomeController ::: move(){}");
		
		String rs ="public:"+dir+"/"+page+".tiles";
		if(auth.equals("on")) {
			rs="private:"+dir+"/"+page+".tiles";
		}
		return rs;
	}
	
}