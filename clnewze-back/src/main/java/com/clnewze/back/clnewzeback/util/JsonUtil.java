package com.clnewze.back.clnewzeback.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;

/**
 * fasterxml.jackson maven
 *
 * <pre>
 *   <!-- json -->
 *   <!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind -->
 *   <dependency>
 *     <groupId>com.fasterxml.jackson.core</groupId>
 *     <artifactId>jackson-databind</artifactId> <version>2.11.2</version>
 *   </dependency>
 * </pre>
 */
public class JsonUtil {
  public static final String[] EXCLUDE_WORD_IN_JSON = { "userPwd", "currentPwd", "versionNum", "newPwd", "oldPwd" };
  private static ObjectMapper mapper = new ObjectMapper();
  static {
    mapper.setSerializationInclusion(Include.NON_NULL);
    // mapper.setSerializationInclusion(Include.NON_EMPTY);

    mapper.addMixIn(Object.class, MyMixIn.class);
    mapper.setFilterProvider(getFilterProvider(EXCLUDE_WORD_IN_JSON));
  }

  @JsonFilter("myMixIn")
  public class MyMixIn {
    //
  }

  private static FilterProvider getFilterProvider(String... excludeWords) {
    SimpleFilterProvider simpleFilterProvider = new SimpleFilterProvider();
    FilterProvider filterProvider = simpleFilterProvider//
        .addFilter("myMixIn", SimpleBeanPropertyFilter.serializeAllExcept(excludeWords));
    return filterProvider;
  }

  public static String toJson(Object object, String... excludeWords) throws JsonProcessingException {
    if (object == null) {
      return null;
    }
    List<String> combinedWordList = new ArrayList<>();
    List<String> excludeWordList = Arrays.asList(excludeWords);
    List<String> defaultExcludeWordList = Arrays.asList(EXCLUDE_WORD_IN_JSON);
    combinedWordList.addAll(excludeWordList);
    combinedWordList.addAll(defaultExcludeWordList);
    String[] combineExcludeWords = new String[combinedWordList.size()];
    combinedWordList.toArray(combineExcludeWords);
    mapper.setFilterProvider(getFilterProvider(combineExcludeWords));
    return mapper.writer().writeValueAsString(object);
  }

  public static String toJson(Object object) {
    if (object == null) {
      return null;
    }
    try {
      return mapper.writer().writeValueAsString(object);
    } catch (JsonProcessingException e) {
      throw new RuntimeException("JSON파싱오류", e);
    }
  }

  public static <T> T toObject(String string, Class<T> valueType) {
    if (string == null) {
      return null;
    }
    try {
      return mapper.readValue(string, valueType);
    } catch (Exception e) {
      throw new RuntimeException(e);
    }
  }

  public static <T> T toObject(String string, TypeReference<T> typeReference)
      throws JsonMappingException, JsonProcessingException {
    if (string == null) {
      return null;
    }
    return mapper.readValue(string, typeReference);
  }

  public static Map<String, Object> toMap(String string) {
    if (string == null) {
      return null;
    }
    try {
      return mapper.readValue(string, new TypeReference<Map<String, Object>>() {
      });
    } catch (JsonProcessingException e) {
      throw new RuntimeException("JSON파싱오류", e);
    }
  }

  public static String toJson(Object object, FilterProvider filters) {
    if (object == null) {
      return null;
    }
    try {
      if (filters != null) {
        return mapper.writer(filters).writeValueAsString(object);
      } else {
        return mapper.writer().writeValueAsString(object);
      }
    } catch (JsonProcessingException e) {
      throw new RuntimeException(e);
    }
  }

  public static String toPrettyJson(Object object) {
    if (object == null) {
      return null;
    }
    if (object instanceof String) {
      object = JsonUtil.toMap((String) object);
    }
    try {
      return mapper.writerWithDefaultPrettyPrinter().writeValueAsString(object);
    } catch (JsonProcessingException e) {
      throw new RuntimeException("JSON파싱오류", e);
    }
  }

}