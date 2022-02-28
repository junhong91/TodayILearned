## 왜 why here?가 출력되는가?

결론부터 말하면, catch된 부분에서 다시 rethrow를 하지 않는 이상, 상위 layer에서 catch하지 못함

아래는 답변

> Why not rethrow error? However, **I'm not sure bubbling errors is a good practice**

답변을 보면, error를 rethrow하는 것을 좋지 못하다는 의견

---

- You merely throw the same error again(보통 에러를 다시 throw하는 경우는 없음)
- The catch allow to handle it, you want to log it, or prevent it and etc.(catch를 한 부분에서 처리하라는 의미)
- Or you can just rethrow it(catch된 부분에서 해결이 불가능 할때는 rethrow 하라는 의미)

## Reference

[How to pass catch error inside function into parent?](https://stackoverflow.com/questions/50705308/how-to-pass-catch-error-inside-function-into-parent)
