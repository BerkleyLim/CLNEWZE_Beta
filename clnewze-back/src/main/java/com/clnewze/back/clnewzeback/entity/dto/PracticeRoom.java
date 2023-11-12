package com.clnewze.back.clnewzeback.entity.dto;

import lombok.Data;

@Data
public class PracticeRoom {
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