package com.gms.web.brd;

import java.util.List;
import com.gms.web.brd.Board;
import com.gms.web.cmm.Criteria;
import com.gms.web.cmm.SearchCriteria;

public interface BoardService {
  public void regist(Board board);
  public Board read(Integer bno);
  public void modify(Board board);
  public void remove(Integer bno);
  public List<Board> listAll();
  public List<Board> listCriteria(Criteria cri);
  public int listCountCriteria(Criteria cri);
  public List<Board> listSearchCriteria(SearchCriteria cri);
  public int listSearchCount(SearchCriteria cri);
  public List<String> getAttach(Integer bno);
  
}
