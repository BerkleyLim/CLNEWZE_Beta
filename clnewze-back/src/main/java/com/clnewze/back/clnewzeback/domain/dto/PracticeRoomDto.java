package com.clnewze.back.clnewzeback.domain.dto;

import lombok.Data;

@Data
public class PracticeRoomDto {
  Long pno;
  String username;
  String title;
  String img;
  String name;
  String place;
  String contents;
  Integer price;
  String categories;
}