package com.clnewze.back.clnewzeback.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.domain.dto.SubScriptMyListDto;

@Repository
@Mapper
public interface SubScriptMapper {
  public List<SubScriptMyListDto> SelectSubScriptMyList();
}
