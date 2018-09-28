package com.gms.web.page;


import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import com.gms.web.brd.BoardMapper;


import lombok.Data;

@Component
@Data @Lazy
public class Pagination implements Proxy{
	int count,pageRow, blockSize,lastPage,beginPage, 
	endPage,pageNum,beginRow,endRow,prevBlock,nextBlock;
	boolean existPrev,existNext;
	
	@Autowired BoardMapper brdmapper;
	@Override
	public void carryOut(Map<?,?> p) {
		this.pageNum = (int) p.get("pageNo");
		this.pageRow = 5;
		this.blockSize = 5;
		this.count = (int) p.get("count");
				
		this.lastPage = (count%pageRow>0)? count/pageRow+1:count/pageRow;
		this.beginPage = pageNum-((pageNum-1)%blockSize);
		this.endPage = ((beginPage+pageRow-1)<count)? beginPage+blockSize-1:count;
		this.endPage = (endPage>lastPage)?lastPage:endPage;
		
		this.beginRow = (pageRow*pageNum)-(pageRow-1);
		//this.endRow = (pageNum ==lastPage)? pageRow*pageNum-pageRow+(count%pageRow):pageRow*pageNum;
		this.endRow = (pageNum ==lastPage)? this.count:pageRow*pageNum;
		
		this.prevBlock = beginPage - blockSize;
        this.nextBlock = beginPage + blockSize;
        this.existPrev = (prevBlock>=0);
        this.existNext = (nextBlock<=lastPage);
	}
}
