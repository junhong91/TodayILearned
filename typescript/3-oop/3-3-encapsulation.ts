{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // static level
    private coffeeBeans: number; // instance (object) level

    // constructor를 private으로 둠으로써, 일반적인 new keyword로 생성할 수 없게 한다
    // 대신 makeMachine() 메소드를 사용하도록 유도할 수 있음
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const coffeeMaker: CoffeeMaker = CoffeeMaker.makeMachine(32);
  coffeeMaker.fillCoffeeBeans(23);

  const coffeeCup: CoffeeCup = coffeeMaker.makeCoffee(2);
  console.log(coffeeCup);
}
