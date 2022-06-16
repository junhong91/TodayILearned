## Zuul Concepts

> Zuul is organized around the concept `pipeline`.

Zuul은, pipeline에서 수행하는 workflow 과정을 포괄(encompasses) 한다.  
해당 workflow는 여러 project에 적용될 수 있다.

### 🤔 Pipeline 예시

1. "Check" pipeline  
   "Check" 파이프라인을 예로 들면, project(git repo와 같은)에 특정 test를 수행하는 action을 트리거 한다

2. "gate" pipeline
   "gate" 파이프라인은, [Gating역할](https://zuul-ci.org/docs/zuul/latest/gating.html#project-gating)을 수행한다.

> This keeps the mainline of development open and working for all developers, and **only when a change is confirmed to work without disruption is it merged.**

Zuul에서 "gate", "check"과 같은 pipeline이 선언되면, 여러 git repo(project)에서 선언된 pipeline을 사용할 수 있다

### `trigger`란?

> `trigger` is description of events which should cause something to be enqueued into a pipeline.

See [Drivers](https://zuul-ci.org/docs/zuul/latest/drivers/index.html#drivers) zuul support

### `reporter`란?

> `reporter` is responsible for reporting the results of all jobs

### `Job`이란?

> Jobs specify the type of nodes and quantity of nodes.

Zuul이 job을 수행하기 전에, `Nodepool`이라는 프로그램의 도움을 받는다(supply). `Nodepool`은 노드 설정이나, 클라우드 프로바이더에 노드 생성/삭제와 같은 요청을 수행한다.

### 전반적인 구동 과정

위에 언급된 모든 pipeline이나, reporter, trigger와 같은 개념들은, Zuul이 관리하는 git repo안, 특정 파일로 존재한다.

Zuul Configuration은, 전역적이며(global), 또한 분산되어 있다(distributed).

특정 프로젝트에 사용되는 Job은 다른 프로젝트에서도 사용될 수 있다.

Zuul이 구동되면(start), 모든 프로젝트에서 Zuul Config 파일을 읽고, 프로젝트에 변경이 일어날 때마다 pipelining을 수행한다
