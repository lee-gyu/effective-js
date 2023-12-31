/**
 * item #1
 * 어떤 자바스크립트를 사용하고 있는지 알아야 한다.
 * * 이 책은 2013년에 나온 것이므로, ES6 모던 자바스크립트 표준은 포함하고 있지 않다.
 * ES5: 2009년에 공개된 대폭 개선된 표준
 * 
 */

// * const 키워드는 이 책이 집필될 당시 표준이 아니었음.
// const는 객체 수정을 허용하지 않는다.

const data = "test";

// ERROR const는 재할당이 불가능하다.
data = 1123;

// use strict를 사용하면 스트릭트 모드로 해당 블록이 실행된다.
// 자바스크립트 최상위에 use strict를 선언하면 스트릭트 모드로 전체 스크립트가 실행된다.
// 함수 내부에 선언하면 해당 함수만 스트릭트 모드로 실행된다.
// 이렇게 문자열 리터럴 선언으로 처리한 까닭은, 다른 자바스크립트 버전에서
// 단순한 문자열 리터럴 정의에서 부작용이 발생하지 않기 때문이다.

function strict() {
  "use strict";
  // strict 모드에서는 arguments 변수 재정의가 허용되지 않는다.
  var arguments = [];
}

// 과거 js 스펙에서 "use strict" 모드는 스크립트 병합에 충돌이 발생할 수 있다는 점이다.
// 현재에는 번들러를 통해 처리하고, typescript를 거의 표준처럼 사용하니 문제가 되지는 않는다.

// 과거에는 이런 병합 문제를 회피하기 위해 IIFE 패턴으로 모듈을 스코프를 만들어 사용했다.

(function () {
  "use strict";

  function f() {}
})();

/**
 * 정리
 * 웹 페이지에서 지원할 자바스크립트 버전을 정하라.
 * 웹 페이지에 방문하게 될 모든 사용자가 문제 없도록 하여야 한다.
 * 스트릭트 모드를 사용하라.
 * 실행하게 될 브라우저 환경에서 스트릭트 코드를 테스트 해라
 * 스크립트 병합이 동작하는 경우, 스트릭트 모드 지원이 필요 없는 코드 끼리의 병합을 고려하라.
 */