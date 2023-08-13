package com.clnewze.back.clnewzeback.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.entity.dao.Blog;

@Repository
@Mapper
public interface BlogMapper {
  public List<Blog> selectList();
}