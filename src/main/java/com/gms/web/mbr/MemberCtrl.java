package com.gms.web.mbr;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Predicate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.gms.web.cmm.Calc;
import com.gms.web.cmm.Util;
import com.gms.web.cmm.Util2;

@RestController
@RequestMapping("/member")
public class MemberCtrl {
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired Member member;
	@Autowired Calc calc;
	@Autowired MemberMapper mbrmapper;
	
	@PostMapping(value="/login")
	public @ResponseBody Map<String, Object> login(@RequestBody Member param) {
		logger.info("MemberController ::: login(){}");
		String pwValid="WRONG";
		String idValid="WRONG";
		Map<String, Object> map = new HashMap<>();
		if(mbrmapper.count(param)!=0) {
			idValid="CORRECT";
			Function<Member, Member> f = (t)->{return mbrmapper.get(t);};
			member = f.apply(param);
			pwValid=(member!=null)? "CORRECT":"WRONG";
			member =(member!=null)?member: new Member();
		}
		
		/*if(Util.notNull.test(mbrmapper.exist(param.getUserid()))) {
			Function<Member, String> f = (t)->{return mbrmapper.login(t);};
			pwValid = f.apply(param).equals("1")?"CORRECT":"WRONG";
		}
		else {
			idValid="WRONG";
		}
		if(Predicate.isEqual("CORRECT").test(pwValid)) {
			member = mbrmapper.get(param);
		}	*/
		map.put("idValid", idValid);
		map.put("pwValid", pwValid);
		map.put("value", member);
		
		return map;
	}
	@PostMapping(value="/add")
	public @ResponseBody Map<String,Object> add(@RequestBody Member param) {
		logger.info("======== MemberController ::: add() =======");
		Util.Log.accept("roll:"+param.getRoll());
		Map<String, Object> map = new HashMap<>();
		Util2.ageAndGender.apply(param);
		
		
		
		return map;
	}
	@RequestMapping("/list")
	public void list() {}
	@RequestMapping("/search")
	public void search() {}
	@RequestMapping("/count")
	public void count() {}
	
	@RequestMapping("/retrieve")
	public String retrieve( Model model) {
		logger.info("MemberController ::: retrieve(){}");
		return "private:member/retrieve.tiles";
	}
	
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(@ModelAttribute("user") Member user, Model model) {
		logger.info("MemberController ::: modify(){}");
		return "private:member/retrieve.tiles";
	}

	@RequestMapping(value="/remove", method=RequestMethod.POST)
	public String remove(@ModelAttribute("user") Member user, Model model) {
		logger.info("MemberController ::: remove(){}");
		//session 지우는 방법 1
		model.addAttribute("user", member);
		return "redirect:/";
	}
	
	@RequestMapping("/fileupload")
	public void fileupload() {}
}