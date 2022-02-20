구글링을 하다 아래와 같은 설명 발견

> try...catch는 `동기적`으로 동작합니다.

즉, try..catch안에 `setTimeout()`과 같이 스케쥴된 코드에 예외는  
try..catch에서 잡아낼 수 없다고 설명하고 있음  
[setTimeout() in try catch?](https://ko.javascript.info/try-catch)

🤔🤔🤔

과거 아래와 같은 코드를 작성

```
const getUser = async (userID) => {
  let result;
  await client.connect();

  try {
    result = await client.HGETALL("users:" + userID);
  } catch (err) {
    console.log(`HGET user command failed: ${err.message}`);
  }

  await client.quit();
  return result;
};
```

해당 예제는 node js에서 제공하는 공식 [redis github](https://github.com/redis/node-redis)을 참고하여서 정말 그런지 의문 발생

## try/catch blocks with async/await

try/catch + async/await은 promise로 변경 가능하다  
[try-catch blocks with async/await](https://stackoverflow.com/questions/40884153/try-catch-blocks-with-async-await)

```
async function main() {
  try {
    var quote = await getQuote();
    console.log(quote);
  } catch(error) {
    console.error(error);
  }
}
```

위 코드를 promise로 변경하면 아래와 동일

```
function main() {
  getQuote().then((quote) => {
    console.log(quote);
  }).catch((error) => {
    console.error(error);
  });
}
```

## 결론

`await` 키워드가 존재하기 때문에, try 문에서 결과를 받아서 try catch가 수행 되는것이 보장됨

## Reference

[Can we use await inside try catch?](https://stackoverflow.com/questions/40884153/try-catch-blocks-with-async-await)
