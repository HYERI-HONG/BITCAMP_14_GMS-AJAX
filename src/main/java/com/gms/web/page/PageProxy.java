package com.gms.web.page;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Component
@Data @Lazy
public class PageProxy implements Proxy{
	private Pagination pagination;
		
	@Override
	public void carryOut(Map<?,?> p) {
		this.pagination = new Pagination();
		pagination.carryOut(p);
	}
}


