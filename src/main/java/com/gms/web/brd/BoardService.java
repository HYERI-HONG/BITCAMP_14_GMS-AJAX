package com.gms.web.brd;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Component;

import com.gms.web.mbr.Member;

@Component
public interface BoardService {
	public void add(Article p);
	public List<?> list(Map<?,?> p);
	public List<?> search(Map<?,?> p);
	public Member retrieve(String p);
	public void count(Map<?,?> p);
	public void modify(Map<?,?> p);
	public void remove(Article p);
}