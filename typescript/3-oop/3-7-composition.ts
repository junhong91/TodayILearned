{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // static level
    private coffeeBeans: number; // instance (object) level

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    clean() {
      console.log("Cleaning the machine...");
    }

    private preheat(): void {
      console.log("heating up...");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 설탕 제조기
  class AutomaticSugarMixer {
    private getSugar(): boolean {
      console.log("Getting some sugar from jar...");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    // Dependency injection: CheapMilkSteamer
    constructor(private beans: number, private milkFrother: CheapMilkSteamer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee: CoffeeCup = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(
      private beans: number,
      private sugarMixer: AutomaticSugarMixer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee: CoffeeCup = super.makeCoffee(shots);
      return this.sugarMixer.addSugar(coffee);
    }
  }

  // "Favor Composition over inheritance"
  // 만일 달달한 카페 라떼를 만들고 싶다면?
  // TypeScript는 다중상속을 지원하지 않는다!
  // 대신 Composition을 사용한다
  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milkFrother: CheapMilkSteamer,
      private sugarMixer: AutomaticSugarMixer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee: CoffeeCup = super.makeCoffee(shots);
      const latteCoffee = this.milkFrother.makeMilk(coffee);
      return this.sugarMixer.addSugar(latteCoffee);
    }
  }

  const machines: CoffeeMachine[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16),
    new SweetCoffeeMaker(16),
  ];
  // Polymorphism
  machines.forEach((machine) => {
    console.log("----------------------------");
    machine.makeCoffee(1);
  });
}
