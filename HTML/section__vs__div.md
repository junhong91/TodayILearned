## Overview
---
`section`: section 안에 내용은 하나의 단일 주제로 grouping됨  
<br>
`div`: div 그 자체로는 _아무 정보도 포함하지 않음_. `class`, `lang`, `title`과 같은 attribute와 같이 사용됨  

<br>

## section
---
- section 안에 content를 grouping하는데 사용됨  
- identified되어야 함(should be). 즉 heading tag(h1-h6)를 포함함
- generic container element가 아님

> _A general rule is that the `section` element is appropriate only if the element’s contents would be listed explicitly in the document’s outline._

<br>

## div
---
- `div` tag 그 자체는 아무 의미가 없음
- 특정 group에 공통적인 의미를 부여하고 싶은 경우 사용

```
Note : 마땅히 다른 suitable한 tag가 없는 경우, <div> tag를 사용할 것을 권고
```


> _When an element is needed only for styling purposes or as a convenience for scripting, authors are encouraged to use the `div` element instead._