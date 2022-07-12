{
  /**
   * Type Assertion
   * Type Assertion을 자주 사용하는 것은 좋지 않음!
   */

  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  // type assertion
  console.log((result as string).length);
  console.log((<string>result).length);

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  // ! 를 써주면 numbers가 무조건 number[] 이라고 장담한다는 것
  numbers!.push(2);

  // 이렇게 끝에 !를 줘도 무조건 있다고 장담하는 것
  const button = document.querySelector("class")!;
}
