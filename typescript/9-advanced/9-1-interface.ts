type PositionType = {
  x: number;
  y: number;
};
interface PositionInterface {
  x: number;
  y: number;
}
const obj1: PositionType = {
  x: 1,
  y: 1,
};
const obj2: PositionInterface = {
  x: 1,
  y: 1,
};

// type과 interface는 모두 Class에서 구현이 가능함!
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
}

// Extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}
// Type의 경우 intersection을 이용하여 확장 가능
type ZPositionType = PositionType & { z: number };

// History
// 타입 스크립트 초창기에는 Type으로 할 수 있는 것이 많지 않았다
// 하지만, 지금은 Type에 intersection이 가능하는 등 Type으로도
// 할 수 있는 것이 많아짐.

// Only interfaces can be merged.
interface PositionInterface {
  z: number;
}

// Type은 merge 불가능!
// type PositionType {
// }

// Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person["name"]; //string
// Type can use Union
type Direction = "left" | "right";
