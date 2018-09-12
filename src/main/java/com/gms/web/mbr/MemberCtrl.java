package com.gms.web.mbr;

import java.util.function.Function;
import java.util.function.Predicate;

import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.cmm.Calc;
import com.gms.web.cmm.Util;

@Controller
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberCtrl {
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired MemberService memberService; 
	@Autowired Member member;
	@Autowired Calc calc;
	//추가
	@Autowired MemberMapper mbrmapper;
	
	
	@RequestMapping(value="/add", method=RequestMethod.POST) //post방식
	public String add(@ModelAttribute("member") Member member) {
		logger.info("======== MemberController ::: add() =======");
		member.setAge(calc.calcAge(member.getSsn()));
		member.setGender(calc.calcGender(member.getSsn()));
		memberService.add(member);
		return "redirect:/move/member/login/off";
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
		memberService.modify(user);
		model.addAttribute("user", memberService.retrieve(user.getUserid()));
		return "private:member/retrieve.tiles";
	}

	@RequestMapping(value="/remove", method=RequestMethod.POST)
	public String remove(@ModelAttribute("user") Member user, Model model) {
		logger.info("MemberController ::: remove(){}");
		memberService.remove(user);
		//session 지우는 방법 1
		model.addAttribute("user", member);
		return "redirect:/";
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST )
	public String login(@ModelAttribute("member") Member mem, Model model) {
		logger.info("MemberController ::: login(){}");
		String judge="";
		String page="";
		
		if(Util.notNull.test(mbrmapper.exist(mem.getUserid()))) {
			Function<Member, String> f = (t)->{return mbrmapper.login(t);};
			page = f.apply(mem).equals("1")?"private:member/retrieve.tiles":"redirect:/move/member/login/off";
			judge = f.apply(mem).equals("1")?"success":"failed";
		}
		if(Predicate.isEqual("success").test(judge)) {
			member = mbrmapper.selectOne(mem.getUserid());
		}
		System.out.println("넘겨줄 ID값 ::"+member.getUserid());
		return page;
	}
	@RequestMapping("/logout")
	public String logout(HttpSession session) {
		logger.info("MemberController ::: logout(){}");
		//session 지우는 방법 2
		session.setAttribute("user", null);
		return "public:common/content.tiles";
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}
}