## Vue에서 중첩 데이터를 감시하는 법 👁️

구글링 하다가 좋은 글이 있어서 스터디 차원으로 다시 작성해봄

### 뭐가 문제인가? 😥

- Vue에 `watch`는 **중첩된 데이터의 변경** 에 대해 알지 못한다
- 여기서 **중첩된 데이터**란 리스트나 배열을 의미함

### 다룰 내용 🔖

1. 기본적인 `watch`에 대한 이해
2. `computed` 속성과 `watch` 속성에 대한 차이점
3. 중첩된 데이터를 `watch`하는 방법
4. `immediate`와 `handler` 속성

### 1. `watch` 메서드란 무엇인가?

> 키워드는 "변화 감지 + 대응"

예를 들어, prop 속성이 변경 될 때, 이를 감지하고 콘솔 로그에 출력하게 할 수 있음

```
export default {
  name: "ColourChange",
  props: ['colour'],
  watch: {
    colour()
      console.log('The colour has changed!');
  }
}
```

### 2. `computed`를 쓸까? `watch`를 쓸까? 🖋️

결론 부터 말하면

- `watch`속성은 **부수효과** 처리를 위한 것
- `computed`속성은 상태의 변경을 위한 것

여기서의 **부수 효과**란 컴포넌트 외부의 동작, 혹은 비동기 처리

- 데이터를 Fetching하는 것
- DOM을 조작하는 것
- 로컬 저장소 조작
- 외부 API 사용
- 혹은 data영역을 업데이트 하는 것

### 3. 중첩된 데이터 `watch` 하는 방법 - 배열 or 객체

배열이나 객체를 `watch`할 때, 예상했던 대로 동작하지 않는다.

```
const array = [1, 2, 3];
```

이후에 배열을 업데이트 한다.

```
array.push(4);
array.push(5);
```

여기서 중요한 점은, array의 내부 값은 변경 되었을 지언 정, array 자체의 **주소값**은 변경되지 않았다는 것이다.

이렇기 때문에, Vue에게 **속성 내부의 값**를 검사하길 원한다고 알려줘야 한다.

### `deep: true` 🤿

Vue에 배열이나 객체의 속성 내부를 감시하려면, `deep: true`로 설정해야 한다

```
export default {
  name: 'ColourChange',
  props: {
    colours: {
      type: Array,
      required: true,
    },
  },
  watch: {
    colours: {
      // This will let Vue know to look inside the array
      deep: true,

      // We have to move our method to a handler field
      handler()
        console.log('The list of colours has changed!');
      }
    }
  }
}
```

### Immediate

`watch` 는 값이 변할 때 실행 되지만, 종종 변경과 관계없이 처음 한 번 실행해야 하는 경우가 있다.

```
export default {
  name: 'MovieData',
  props: {
    movie: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      movieData: {},
    }
  },

  watch: {
    // Whenever the movie prop changes, fetch new data
    movie(movie) {
      // Fetch data about the movie
      fetch(`/${movie}`).then((data) => {
        this.movieData = data;
      });
    }
  }
}
```

이 컴포넌트는 훌륭하게 동작하나, 작은 문제가 있다.

문제는 페이지가 로드 될 때, **movie가 기본값으로 설정된다는 것이다.**  
따라서 속성이 변경되지 않았기 때문에, `watch`는 실행되지 않는다.

따라서 페이지가 로드 즉시, `watch`가 실행되도록 하려면 immediate를 true로 설정해야 한다

```
watch: {
  // Whenever the movie prop changes, fetch new data
  movie: {
    // Will fire as soon as the component is created
    immediate: true,
    handler(movie) {
      // Fetch data about the movie
      fetch(`/${movie}`).then((data) => {
        this.movieData = data;
      });
    }
  }
}
```

## Reference

- https://ui.toast.com/weekly-pick/ko_20190307
