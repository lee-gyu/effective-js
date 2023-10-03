/**
 * item #6
 * 세미콜론 자동 삽입의 주의점
 * 
 * 자바스크립트는 세미콜론을 생략할 수 있는 점이 특징이다.
 * 생략을 한다면, 자바스크립트 엔진이 코드를 평가할 때 자동으로 세미콜론을 삽입한다.
 * 이것의 한계점을 알아야 한다.
 * 
 * 세미콜론 자동 삽입 규칙
 * 1. 세미콜론은 한 줄 이상의 새로운 행이나, 프로그램 입력의 마지막이나 } 토큰 전에만 삽입된다.
 * 2. 세미콜론은 다음 입력 토큰을 파싱할 수 없을 때에 삽입된다.
 * 3. for 문 조건식에서는 세미콜론이 삽입되지 않는다.
 */

// 아래는 문제가 되는 코드 블록이다.
function test () {
  const arr = [1, 2, 3]
  // 아래는 arr와 다음 배열 사이에 세미콜론이 자동으로 삽입되지 않아, a에 대한 할당이 arr로 되지 않는다.
  const a = arr
  [
    100, 200, 300
  ].forEach( console.log );

  console.log( a );
}

// 그러므로, 세미콜론 자동 삽입을 이용할 땐, (, [, +, -, / 5가지 문자를 조심해야 한다.
// 문맥에 따라 표현식 연산자로 동작하거나 선언의 접두어로 사용될 수 있기 때문이다.
// 함수 호출, 배열 요소 참조, 오브젝트 속성 참조, 정규식 선언 등.

/**
 * 정리
 * 세미콜론 자동 삽입에는 이런저런 불편한 점들이 있다.
 * 제일 좋은 것은, 명확하게 내가 구문을 끝낼 때 세미콜론을 삽입하는 것이다.
 * 자동으로 삽입되는 세미콜론을 의존 시 발생하게 될 단점을 생각하자.
 */