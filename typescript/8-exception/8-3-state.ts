{
  // 사실 tryConnect() 요청 시, 네트워크 장애는
  // 개발자가 "예상할 수 있는" errorState임
  // 따라서 예상하지 못하게 throw를 남발하는 것 보다는
  // ResultState를 만드는게 더 좋음
  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };
  type SuccessState = {
    result: "success";
  };
  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {}
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
