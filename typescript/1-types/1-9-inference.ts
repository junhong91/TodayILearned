{
  /**
   * Type Inference
   */
  let text = "hello";
  function print(message) {
    console.log(message);
  }
  print("hello");
  print(1); // any type이기 때문에 숫자도 넣을 수 있게 됨
  // 아래가 더 좋은 방법
  function printString(message: string) {
    console.log(message);
  }

  // 리턴 타입이 자동으로 추론됨
  function add(x: number, y: number) {
    return x + y;
  }
  // add함수의 리턴값이 number이므로 result값도 자동으로 number로 추론됨
  const result = add(1, 2);
}
