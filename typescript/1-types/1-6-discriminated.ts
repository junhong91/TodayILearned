{
  /**
   * Union Types: OR
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("left");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  //   function login(id: string, password: string): Promise<LoginState> {
  //     return new Promise((resolve, reject) => {
  //       resolve({ response: { body: "Success!" } });
  //     });
  //   }

  function printLoginState(state: LoginState) {
    switch (state.result) {
      case "success":
        console.log("Login Success!");
        break;
      case "fail":
        console.log("Login Failed...");
        break;
    }
  }
  printLoginState({ result: "success", response: { body: "success" } });
}
