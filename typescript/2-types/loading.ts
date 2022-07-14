{
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  printLoginState({ state: "loading" });
  printLoginState({ state: "success", response: { body: "loaded" } });
  printLoginState({ state: "fail", reason: "no network" });

  function printLoginState(
    resourceLoadState: ResourceLoadState
  ): Promise<ResourceLoadState> {
    switch (resourceLoadState.state) {
      case "loading":
        return new Promise((resolve, reject) => {
          resolve({ state: "loading" });
        });
      case "success":
        return new Promise((resolve, reject) => {
          resolve({
            state: "success",
            response: resourceLoadState.response,
          });
        });
      case "fail":
        return new Promise((resolve, reject) => {
          resolve({ state: "fail", reason: resourceLoadState.reason });
        });
    }
  }
}
