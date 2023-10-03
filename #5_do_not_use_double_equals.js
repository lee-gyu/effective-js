/**
 * item #5
 * ==로 비교하지 마라
 * 
 * 자바스크립트는 동등 연산자로 ==를 사용한다.
 * 다른 프로그래밍 언어와 달리 ==를 수행하면 type coercion을 수행한다.
 * 자동으로 형변환을 수행하므로, 예상치 못한 결과를 만들 수 있다.
 */

// 아래는 true로 평가된다.
console.log( 1.0 == true ); // true
console.log( "1.0e0" == 1 ); // true

/**
 * 이는 자바스크립트가 가지고 있는 type coercion 특성으로,
 * 값을 숫자형으로 변환하여 비교하기 때문이다.
 * 이렇게 처리하게 된 이유는, 웹 양식은 주로 문자열로 처리되는데,
 * 이를 편리하게 처리하기 위함으로 보인다.
 * 
 * 과거의 단순한 웹 양식 처리에서는 유용해보였으나,
 * 현대의 웹 응용프로그램 개발에서는 이는 많은 문제를 발생시킨다.
 * 이를 명시적으로 숫자로 변환하는 방법은 + 연산자를 붙여주는 방법이 있다.
 * 단, 이러한 방법은 숫자로 변환이 안되는 경우 NaN을 반환한다.
 */

console.log( "1" + 1); // 11
console.log( +"1" + 1); // 2
console.log( +"0x10" ); // 16
console.log( +"zzdd" ); // NaN

// === 연산자를 사용하면, type coercion을 수행하지 않고, 데이터 형 그대로의 비교를 수행한다.
// 이는 데이터 형이 다르면 false를 반환하고, 갖다면 서로 내부의 값을 비교하여 평가한다.
console.log( 1.0 === true ); // false
console.log( "1.0e0" === 1 ); // false

// double equals를 이용한 비교 규칙은 아래와 같다.
// 1. null과 undefined는 서로 동등하다.
console.log( null == undefined ); // true
console.log( null != undefined ); // false

// 2. null/undefined와 그것이 아닌 것과의 비교
// 항상 다름으로 평가한다.
console.log( null == 1 ); // false
console.log( null != "" ); // true

// 3. 원시 형과 Date 객체와의 비교
// 원시형의 toString 시도 후 valueOf를 수행하여 비교
const date = new Date();
const dateStr = date.toString();
const dateNum = date.getTime();

console.log( dateStr == date ); // true
console.log( dateNum == date ); // false dateNum의 toString이 date의 toString과 다름

// 4. 원시 형과 Date가 아닌 객체와의 비교
// 원시형의 valueOf 시도 후 toString을 수행하여 비교
// 이는 #3에서 설명하였음.

// 5. 원시 형과 원시 형의 비교
// 이는 #3에서 설명하였음.

/**
 * 정리
 * == 연산자는 type coercion을 수행한다.
 * === 연산자를 통해 명확한 비교를 수행하라.
 * 비교할 값이 서로 다른 타입이라면, 명시적인 값 변환 로직을 통해 비교하라.
 */