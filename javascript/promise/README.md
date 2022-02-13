## Promise 3가지 상태(states)

프로미스의 상태 -> 프로미스의 처리 과정  
프로미스는 생성 시점(`new Promise()`)부터 종료될때 까지 3가지 상태를 가짐

- Pending 상태: 비동기 처리 로직이 아직 완료 안된 상태
- Fulfilled 상태: 비동기 처리 완료/결과값 반환된 상태
- Rejected 상태: 비동기 처리 완료/처리 실패 상태

### Pending상태

```
new Promise();
```

`new Promise()` 메서드 호출시, 대기 상태가 됨

호출 시, 콜백 선언 가능, 인자로 `resolve,reject`

```
new Promise(function(resolve, reject) {

});
```

### Fulfilled상태

```
new Promise(function(resolve, reject) {
    resolve();
})
```

`resolve()` 매서드 호출 시, Fulfilled상태가 됨

Fulfilled 상태가 되면, `then()`을 이용하여 `처리 결과값을 받을 수 있음`

### Rejected상태

```
new Promise(function(resolve, reject) {
    reject();
})
```

`reject()` 매서드 호출 시, Rejected 상태가 됨

Rejected 상태가 되면, `catch()`을 이용하여 `처리 결과값(실패 처리 결과값)을 받을 수 있음`

```
function getData() {
    return new Promise(function(resolve, reject) {
        reject(new Error("Request is failed!));
    });
}

getData().then().catch(function(err) {
    console.log(err);
})
```

## 쉬운 예제

위에 배운 state를 기반으로 간단한 코드 작성

```
function getData() {
  return new Promise(function(resolve, reject) {
    $.get('url 주소/products/1', function(response) {
      if (response) {
        resolve(response);
      }
      reject(new Error("Request is failed"));
    });
  });
}

// 위 $.get() 호출 결과에 따라 'response' 또는 'Error' 출력
getData().then(function(data) {
  console.log(data); // response 값 출력
}).catch(function(err) {
  console.error(err); // Error 출력
});
```

## Promise Chaning

`then()` 매서르들 호출한 결과로 `새로운 프로미스 객체를 반환`함  
따라서 아래와 같은 코딩 가능

```
function getData() {
  return new Promise({
    // ...
  });
}

// then() 으로 여러 개의 프로미스를 연결한 형식
getData()
  .then(function(data) {
    // ...
  })
  .then(function() {
    // ...
  })
  .then(function() {
    // ...
  });
```

example

```
new Promise(function(resolve, reject) {
  setTimeout(function() {
      resolve(1);
  }, 2000)
})
.then(function(result) {
    return result + 10;  //11
})
.then(function(result) {
    return result + 20;  //31
})
.then(function(result) {
    console.log(result);  //31
})
```

## Reference

[자바스크립트 promise](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
