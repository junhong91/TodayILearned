{
  class NetworkClient {
    tryConnect(): void {
      throw new Error("no network!");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      //   login......
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      this.userService.login();
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
  // 이런 경우, 어디서 try, catch를 하는게 좋은 방법인가?
}

{
  // 1. 첫번째 방법 -> 사용하는 곳(UserService)에서 catch한다
  // 그렇다면, UserService가 catch한다고 "의미있게 할 수 있는 활동"이 있는가? => 없다
  // 결론적으로! catch문이 있는 곳에서 의미있게 할 수 있는 활동이 없다면,
  // catch하지 않는것이 낫다
  class NetworkClient {
    tryConnect(): void {
      throw new Error("no network!");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      try {
        client.tryConnect();
      } catch (error) {
        console.log("catched!");
      }
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      this.userService.login();
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}

{
  // 1. 두번째 방법 -> app에서 catch한다
  // app에서 catch하면 할 수 있는 의미있는 활동이 있다
  // 예를 들면 비밀번호가 틀렸다는 Dialog를 보여준다던지, 네트워크가 연결되있지 않다는
  // Dialog를 사용자에게 보여줄 수 있다
  class NetworkClient {
    tryConnect(): void {
      throw new Error("no network!");
    }
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
