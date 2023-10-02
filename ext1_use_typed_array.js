/**
 * ext1. 적절한 데이터 타입 배열 사용
 * 단순 정수를 정의할 때, 그에 걸맞는 배열이 있다.
 * TypedArray라고 이야기하며, 이는 ArrayBuffer를 기반으로 한다.
 * 바이너리를 표현하는데에 적합하며, 적절한 경우에는 메모리를 절약할 수 있다.
 * 8, 16, 32, float, bigInt 등 다양한 타입이 있음.
 * BigInt64Array의 경우는 사용 시 브라우저 호환성을 고려해야 한다. (현대 브라우저는 대부분 지원하나, 2018~2021 브라우저 버전 호환성을 탐)
 * 
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
 * 
 */

const i8Ary = new Int8Array();
const ui8Ary = new Uint8Array();