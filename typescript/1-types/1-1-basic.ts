{
  // JavaScript
  // old: var
  var age = 5;
  age = 1;

  // let es6
  let name = "hello";
  name = "hi";

  // const
  //   const age = 5;
  // age = 5;
}

{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -7;

  // string
  const str: string = "Hello world!";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 이렇게는 안씀
  let age: number | undefined; // age is number 'or' undefined type
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null;
  let person2: string | null;

  // unknown
  // 어떤 종류의 data type이 담길지 알 수 없다 => 따라서 다양한 data type을 담을 수 있음
  // 가능한 쓰지 않는게 좋음. 보통 JavaScript와 연동하기 위해 사용함
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any
  // unknown type과 마찬가지고 가능한 쓰지 않는 것이 좋음
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
  }

  // void type은 undefined만 할당 할 수 있기 때문에, 변수로써 활용도가 없음
  let unusable: void = undefined;

  // never
  // 절대 리턴할 계획이 없음
  function throwError(message: string): never {
    // message -> server (log)
    // throw new Error(message);
    while (true) {}
  }

  // object
  // 되도록 쓰지 않고, 명시적으로 쓰는 방법이 좋음
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "junhong" });
  acceptSomeObject({ animal: "dog" });
}
