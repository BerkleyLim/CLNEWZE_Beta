package com.clnewze.back.clnewzeback.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.domain.entity.Information;
import com.clnewze.back.clnewzeback.mapper.InformationMapper;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class InformationService {
  private InformationMapper informationMapper;

  public List<Information> selectList(String genre) {
    return informationMapper.selectList(genre);
  }
}
