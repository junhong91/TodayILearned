{
  // Array
  const fruits: string[] = ["apple", "banana"];
  const scores: Array<number> = [1, 2, 3];
  // or
  // const scores: number[] = [1, 2, 3];
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class is more better!
  // 한정된 길이에, 서로 다른 type을 쓰고 싶은 경우 Tuple을 사용하나 권장되지 않는다 <- 가독성이 좋지 않음
  // 정 쓰고 싶으면, destructing을 쓰는 방식으로
  let students: [string, number];
  students = ["name", 123];
  students[0]; // name
  students[1]; // 123
  const [name, age] = students;
}
