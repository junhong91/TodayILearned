## mixin? 🤔

ansible kubernetes 모듈(`k8s`) 소스 코드 분석 중, `K8sAnsibleMixin` 라는 이름의 클래스가 존재. Mixin이라는 용어를 vue에서도 본 적이 있으나 정확히 알지 못하여 궁금증에 검색

#### mixin 위키 설명 📘

> 믹스인은 코드의 재사용성을 높이고, 다중상속으로 인해 발생할 수 있는 상속의 모호성문제(다이아몬드 문제)를 제거하거나 언어에서 다중상속에 대한 지원부족을 해결하기 위해 사용될 수 있습니다.

## 파이썬에서의 Mixin 🐍

#### 믹스인 특징

- 추가적인 메소드만 정의하는 _작은 클래스_
- 클래스 내부에 속성(property)를 정의하지 않음
- `__init__` 생성자를 호출하도록 요구하지 않음

#### When to use mixin

- 다른클래스에서 사용하고자 하는 클래스의 특정 기능만 사용하고 싶을때
- 클래스가 사용할 기능에 대한 선택을 제공해주고 싶을 때, mixin 고려

#### 믹스인 주의사항

- 파이썬은 동일한 메소드가 중첩된 경우 덮어버림(override)

```
class Mixin1(object):
    def test(self):
        print "Mixin1"

class Mixin2(object):
    def test(self):
        print "Mixin2"

class MyClass(BaseClass, Mixin1, Mixin2):
    pass



출처: https://hamait.tistory.com/859 [HAMA 블로그]
```

- 파이썬은 오른쪽부터 왼쪽으로 계승됨
- 즉, Mixin2가 가장 상위 클래스
- 이때 가장 하위 클래스(Mixin1)의 메소드가 적용됨

```
>>> obj = MyClass()
>>> obj.test()
Mixin1
```

## ansible k8s 코드 mixin 활용 예

#### kubernetes/core/plugins/module_utils/common.py

```
def main():
    module = AnsibleModule(argument_spec=argspec(), supports_check_mode=True)
    from ansible_collections.kubernetes.core.plugins.module_utils.common import (
        K8sAnsibleMixin, get_api_client)

    k8s_ansible_mixin = K8sAnsibleMixin(module)
    k8s_ansible_mixin.client = get_api_client(module=module)
    k8s_ansible_mixin.fail_json = module.fail_json
    k8s_ansible_mixin.fail = module.fail_json
    k8s_ansible_mixin.exit_json = module.exit_json
    k8s_ansible_mixin.warn = module.warn
    execute_module(module, k8s_ansible_mixin)
```

코드를 보면, `K8sAnsibleMixin`는 쿠버네티스 resource를 조회(`find_resource()`)하거나,  
쿠버네티스 resource가 특정 상태("Running")가 될때 까지 대기하는 메소드(`wait()`)가 정의되어 있으며  
이는 다른 메소드를 이용하여 구현됨

```
class K8sAnsibleMixin(object):
...

    def find_resource(self, kind, api_version, fail=False):
        for attribute in ['kind', 'name', 'singular_name']:
            try:
                <!-- self.client 외부에서 받아온 객체 -->
                return self.client.resources.get(**{'api_version': api_version, attribute: kind})
            except (ResourceNotFoundError, ResourceNotUniqueError):
                pass
        try:
            return self.client.resources.get(api_version=api_version, short_names=[kind])
        except (ResourceNotFoundError, ResourceNotUniqueError):
            if fail:
                self.fail(msg='Failed to find exact match for {0}.{1} by [kind, name, singularName, shortNames]'.format(api_version, kind))
...
```
