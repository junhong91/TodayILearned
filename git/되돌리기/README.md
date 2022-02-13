## reset/revert 복구하기

**`git revert HEAD`는 함부로 쓰면 안됨**

```
git revert [COMMIT_ID]
```

해당 commit id 이전으로 되돌림  
**⚠️ 되돌아간 commit id 이후 수정사항들이 모두 사라짐**

### revert한 상황 되돌리기

```
$ git reflog
3d0a896 HEAD@{0}: commit (amend): 모든 걸 삭제한 악마의 커밋
e829698 HEAD@{1}: commit: 되돌리고 싶은 커밋
[...]
```

HEAD@{1}로 돌아가면 revert 이전 상태로 돌아감

```
$ git reset --hard HEAD@{1}
```

## git add 취소하기(파일 상태를 Unstage로 변경하기)

실수로 `git add .`를 수행한 경우

```
$ git reset HEAD [FILE_NAME]
```

뒤 FILE_NAME이 없으면 add한 파일 전체를 취소함

## git commit 취소하기

너무 일찍 commit한 경우

```
// commit 목록 확인
$ git log
```

```
// [방법 1] commit 취소 / 변경된 파일 staged 상태로 보존
$ git reset --soft HEAD^

// [방법 2] commit 취소 / 변경된 파일 unstaged 상태로 보존
$ git reset --mixed HEAD^

// [방법 3] commit 취소 / 변경된 파일 unstaged 상태로 삭제
$ git reset --hard HEAD^
```

- `-soft`: index 보존(add한 상태, staged상태), 워킹 디렉토리 파일 보존. 즉 모두 보존
- `-mixed`: index 취소(add하기 전 상태, unstaged상태), 워킹 디렉토리 파일 보존(기본 옵션)
- `-hard`: index 취소(add하기 전 상태, unstaged상태), 워킹 디렉토리 파일 삭제. 즉 모두 삭제

## git push 취소하기

이 명령을 사용하면 remote에 강제로 덮어쓰기를 하는 것이기에 주의 필요

- 협업 프로젝트에서는 동기화 문제 발생 가능
- 되돌아간 commit 이후의 모든 commit 정보가 사라짐

### 1. working directory 에서 commit을 되돌림

```
$ git reset HEAD^
```

원하는 시점으로 워킹 디렉토리 되돌리기

```
$ git reflog
$ git reset HEAD@[NUMBER]
```

### 2. 되돌려진 상태에서 다시 commit 수행

```
$ git commit -m "Comments"
```

### 3. 원격 저장소로 강제 push

```
$ git push origin [BRANCH_NAME] -f
```

## untracked 파일 삭제하기

```
$ git clean -f // 파일들만 삭제
$ git clean -f -d // 파일 + 디렉터리 삭제
$ git clean -f -d -x // 모든 파일 삭제
```

## Reference

---

[revert 되돌리기](https://keepdev.tistory.com/59)
[git 되돌리기](https://gmlwjd9405.github.io/2018/05/25/git-add-cancle.html)
