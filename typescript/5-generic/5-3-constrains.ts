interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("Full time!");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("Part time!");
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 추상적인 타입(Employee)으로 다시 리턴하는 함수는
// 매우 좋지 않음
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// Constraint!
// <T extends Employee>는 Generic이긴 Generic인데 Employee를 확장한 Type만 가능
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const junhong = new FullTimeEmployee();
const bob = new PartTimeEmployee();
junhong.workFullTime();
bob.workPartTime();

// const junhongAfterPay = payBad(junhong);
// junhongAfterPay.workFullTime(); <- Invalid!
// or you can use `as` keyword : Type assertion
// const junhongAfterPay = pay(junhong) as FullTimeEmployee; <- But 역시 좋지 않은 방식

const junhongAfterPay = pay(junhong);
junhongAfterPay.workFullTime();

const obj = {
  name: "ellie",
  age: 20,
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, "name")); // ellie
console.log(getValue(obj, "age")); // 20
