기본 API를 테스트 할 수 있는 페이지입니다.<br/>


* * *

예제 코드
=====

제공되는 CURL 명령어를 [https://curlconverter.com/](https://curlconverter.com/) 에서 `php`, `python`, `nodejs` 등으로 변환하여 사용하시면 됩니다.

* * *

CORS 에러
=======

### 만일 "방화벽 예외" 등록을 요청하지 않은 IP의 경우 CORS 에러가 발생할 수 있습니다.

### 방화벽 예외를 등록한 "서버의 IP"로 접속하시거나, 혹은 표시되는 CURL 명령어를 통해 테스트 해주시기 바랍니다.

* * *

더미 텍스트
-----------------------------------

더미 텍스트

* * *

필수 HTTP 헤더
----------

API의 이용과 관련한 모든 HTTP 요청은 아래의 HTTP 헤더를 포함해야 합니다.

|이름|값|예시|
|---|---|---|
|`Authorization`|`Bearer {전달받은 API KEY}`|`Authorization: Bearer xl2oH8NypvMziSCPS9hOeyW1KbTd9Ht1RgnV7CAu`|
|`Accept`|`application/json`|`Accept: application/json`|
|`Content-Type`|`application/json`|`Content-Type: application/json`|

우측에 <svg fill="#8a9391" height="20" width="20"><svg id="unlocked" viewBox="0 0 20 20"><path d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z"></path></svg></svg> 아이콘이 있는 경우 `Authorization` 헤더가 필요합니다.

* * *

테스트시 인증 정보 전달 방법
----------------

이 페이지에서 테스트 하실 때는 우측 하단에 <svg fill="#49cc90" height="20" width="20"><svg id="unlocked" viewBox="0 0 20 20"><path d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z"></path></svg></svg> 아이콘을 클릭해 사용할 제공받은 토큰을 입력하여 테스트 하실 수 있습니다.

* * *

에러 응답
-----

정상적인 결과는 HTTP Status Code `200`을 비정상적인 상황은 HTTP Status Code `4xx` 코드를 리턴하며,
아래 예시처럼 에러가 발생한 파라미터와 해당 에러를 표시합니다.

    {
      "errors": {
        "파라미터1" : ["에러메시지"],
        "파라미터2": ["에러메시지"]
      }
    }


* * *

한글 인코딩
------

모든 한글 및 특수 문자를 포함한 모든 데이터는 `UTF-8 without BOM`를 사용해주셔야하며,<br/>
특히 윈도우 서버에서 개발하시는 분들은 이점을 확인해주시기 바랍니다. 만일 `EUR-KR` 인코딩을 사용하여 요청하는 경우 정상적인 서비스 이용이 불가 및 주기적인 에러 발생으로 차단되어지실 수 있습니다.

* * *

타임존
---

본 API 서비스의 타임존은 협정 세계시(UTC)를 사용하며, 한국 시각(Asia/Seoul)으로 보기 위해선 +9시간을 더 하셔야 합니다.<br/>
반대로 검색하시기 위해선 한국시간 -9 시간을 해주셔야합니다.

* * *

더미 텍스트
-------------------------------------------

더미 텍스트<br/>
더미 텍스트

### 구현시 주의사항

더미 텍스트,<br/>
더미 텍스트.<br/><br/>

더미 텍스트<br/>

1.  더미 텍스트<br/>
    1-1.더미 텍스트<br/>
    1-2.더미 텍스트<br/>
    : 더미 텍스트

2.  "더미 텍스트"에서 더미 텍스트<br/>
    (더미 텍스트)<br/>
    2-1. {더미 텍스트}<br/>
    2-2. {더미 텍스트}<br/>
    : 더미 텍스트
    예시)<br/>
    2-1: 더미 텍스트.<br/>
    2-2: 더미 텍스트.<br/>
    \+ 더미 텍스트



* * *

Type: `더미 텍스트`, `더미 텍스트`, `더미 텍스트`의 경우 (더미 텍스트: 더미 텍스트)
--------------------------------------------------------

더미 텍스트,<br/>
더미 텍스트

* * *

업데이트 내역
-------
<details>
<summary>업데이트 내역 상세 보기</summary>

### 1.0.0

    - 최초 개발

</details>

* * *

API 개발 흐름
=========

1.  API KEY를 발급받습니다.
2.  API KEY과 헤더정보를 추가해 `/my-info` 를 호출해 정상적으로 자신의 계정 정보가 불러와 지는지 확인합니다.
3.  `/list` API 를 이용해 `abc`, `user_id` 값을 확인합니다.
4.  `/link` 를 이용해 링크를 받아옵니다. (더미 텍스트)
5.  더미 텍스트 `/user-list`, 더미 텍스트 `/abc-list`를 통해 접속을 위한 `id` 값을 가져옵니다.<br/>
    5-1. "더미 텍스트" 사용시 `/user/add` 를 이용해 추가해 줍니다.<br/>
    5-2. "더미 텍스트" 사용시 더미 텍스트 API를 구현해주세요.<br/>