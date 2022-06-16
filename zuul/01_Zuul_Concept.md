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
