/**
 * item #3
 * 자바스크립트의 암묵적 형변환에 주의
 * 자바스크립트는 Type coercion 이라는 컨셉을 가지고 있다.
 * 이 컨셉은 자동으로 형을 변환하여 연산을 수행하는 것을 의미한다.
 * 
 */

// 자바스크립트는 데이터 타입에 매우 관대한 언어이다.
// 3 + true를 4로 처리한다.
// 대다수의 프로그래밍 언어는 true를 산술 연산에 허용하지 않는다.

// 아래의 경우는 자바스크립트에서 에러로 처리한다.
// 1. 함수가 아닌데, 함수로 호출하는 경우
"hello"();

// 2. null 또는 undefined에서 멤버를 참조하는 경우
null.x;
undefined.y;

// 이외의 산술 연산이 호출되는 경우에는 자바스크립트는 자동 형변환 프로토콜에 따라 형변환을 수행한다.
// 만약, 숫자와 문자열을 합친다면, 문자열을 우선으로 한다.
2 + "3" // "23"
"2" + 3 // "23"

// 비트 단위 연산을 수행하면 문자열도 32 비트 정수로 취급한다.
"8" | "1" // 9

// 곱하기 연산의 경우는 double 형식으로 처리한다.
"513322" * "510322";
"5132" ** "3";

// null의 경우는 0으로 처리한다.
1 + null + 5; // 6

// undefined의 경우는 NaN으로 처리한다.
1 + undefined + 5; // NaN

// NaN의 경우는 예외를 발생시키지 않고 계속해서 코드를 수행하므로, 결과를 혼란스럽게 만든다.
// NaN은 테스트 하기가 어려운 값으로 취급된다.
// IEEE에 정의된 요구 사항에 따라 NaN이라는 타입은 자신을 동등하다고 처리하지 않는다.
// 따라서, NaN === NaN은 false를 반환한다.
// isNaN이라는 함수가 있지만, 이는 암묵적인 형변환을 수행하므로 정확한 NaN을 확인할 수는 없다.
isNaN(NaN); // true
isNaN("asd"); // true
isNaN("1234"); // false
isNaN({}); // true

// Number.isNaN을 사용하면 정확한 NaN을 확인할 수 있다.
Number.isNaN(NaN); // true
Number.isNaN("asd"); // false
Number.isNaN("1234"); // false
Number.isNaN({}); // false

// 객체의 경우는 toString으로 문자열 변환을 수행한다.
console.log( "ABC " + {}); // "ABC [object Object]"

// 암묵적으로 toString을 호출하여 문자열로 반환한다.
const obj = {
  toString() {
    return "hello";
  }
}

console.log("ABC " + obj); // "ABC hello"

// 숫자의 경우에는 valueOf 메서드를 호출하여 숫자로 변환될 수도 있다.

const objNum = {
  valueOf() {
    return 100;
  }
};

console.log( 100 + objNum); // 200

// toString과 valueOf 메서드를 모두 구현한 경우,
// 먼저 valueOf 메서드를 호출하고, 이 메서드가 원시값을 반환하지 않으면 toString 메서드를 호출한다.
// 만약 valueOf 메서드가 값을 반환하면, 해당 값을 문자열로 취급하기에 toString 메서드는 호출되지 않는다.
// 그러므로, valueOf와 toString을 둘다 사용하는 것보다는 숫자로 취급할지, 문자열로 취급할지를 결정하여 하나만 사용하는 것이 좋다.

const objNumStr = {
  valueOf() {
    return 100;
  },
  toString() {
    return "hi"
  }
}

console.log("hoi " + objNumStr); // "hoi 100"

// 그리고 값들이 논리형으로 취급되는 경우를 알아야 한다.
// false로 취급된다는 것을 falsy 값이라고 한다.
// 0, -0, null, false, NaN, undefined, "" 7가지 값들은 javascript에서 논리 값으로 평가 시 false로 평가된다.
// 이외는 모두 true로 평가되는 truthy 값이다.

// 그러므로 값을 논리형으로 평가할 때는, 명시적으로 형변환을 수행하는 것이 좋다.
// 암묵적 형변환은 값이 예상치 못한 방향으로 코드가 실행될 수 있다.

/**
 * 정리
 * 데이터형 에러는 암묵적인 형 변환에 의해 예외 발생을 하지 않고 계산을 수행할 수 있다.
 * + 연산자는 인자에 따라 문자열이나, 숫자 덧셈 연산을 수행한다.
 * 객체는 valueOf를 통해 숫자로, toString으로 문자열로 변환된다.
 * truthy 값과 falsy 값에 대해 알아야 한다.
 * undefined를 정확히 논리형으로 평가하려면 typeof를 사용하거나 === 연산자로 undefined와 비교한다.
 */