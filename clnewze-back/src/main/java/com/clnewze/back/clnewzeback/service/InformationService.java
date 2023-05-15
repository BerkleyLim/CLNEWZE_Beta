package com.clnewze.back.clnewzeback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.domain.Information;
import com.clnewze.back.clnewzeback.mapper.InformationMapper;

@Service
public class InformationService {
  @Autowired
  InformationMapper informationMapper;

  public List<Information> selectList() {
    return informationMapper.selectList();
  }
}