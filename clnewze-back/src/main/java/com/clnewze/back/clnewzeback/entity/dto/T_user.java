package com.clnewze.back.clnewzeback.entity.dto;

import lombok.Data;

@Data
public class T_user {
  Long uno;
  String id;
  String password;
  String name;
  String role_user;
}