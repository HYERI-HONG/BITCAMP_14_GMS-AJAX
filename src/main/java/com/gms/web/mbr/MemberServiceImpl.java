package com.gms.web.mbr;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService{
	@Autowired MemberMapper memberDAO;
	@Override
	public void add(Member p) {
		memberDAO.insert(p);
	}

	@Override
	public List<?> list(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<?> search(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Member retrieve(String p) {
		return memberDAO.selectOne(p);
	}
	
	@Override
	public void count(Map<?, ?> p) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void modify(Member p) {
		memberDAO.update(p);
		
	}

	@Override
	public void remove(Member p) {
		memberDAO.delete(p);
		
	}

	@Override
	public boolean login(Member p) {
		return memberDAO.login(p).equals("1");
	}
}