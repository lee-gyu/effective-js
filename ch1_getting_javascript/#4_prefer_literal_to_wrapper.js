/**
 * item #4
 * 객체 래퍼보다 리터럴을 사용하라
 * 
 * 자바스크립트는 숫자, 문자열, 불리언, null, undefined를 원시 데이터 형으로 가진다.
 * 단, typeof null은 "object"를 반환한다.
 * 
 */

// 아래와 같이 객체 래퍼를 사용하면, 불필요한 객체 생성으로 성능 저하를 발생시킨다.
const s = new String("hi");
const s2 = "hi";
const s3 = String("hi");

// 게다가 이는, 새로운 메모리 주소 공간을 할당하므로, === 연산자로 비교하면 false를 반환한다.
console.log( "hi" === s ); // false
console.log( Object.is("hi", s) ); // false
console.log( Object.is(s2, s3) ); // true

// 래퍼로 생성한 객체는 typeof로 확인하면 object를 반환한다.
console.log( typeof s ); // object
console.log( typeof s2 ); // string

/**
 * 이렇게 객체 래퍼가 있는 이유는, 해당 오브젝트 만의 별도의 메서드를 추가하기 위함이다.
 * 이는, 별도의 다른 방법으로도 구현할 수 있어, 오히려 다른 단점을 야기한다.
 * 
 */

s.name = "1";
console.log( s.name ); // "1", 객체 래퍼는 프로퍼티를 추가할 수 있다.

s2.name = "1"; // 이렇게 추가하면, 객체 래퍼 메모리를 생성한다.
console.log( s2.name ); // undefined, 리터럴은 프로퍼티를 추가할 수 없다.

/**
 * 정리
 * 원시 데이터 형과 객체 래퍼는 동작이 다르다.
 * 원시 데이터 형에 프로퍼티를 추가하면 암묵적으로 객체 래퍼를 생성한다.
 */