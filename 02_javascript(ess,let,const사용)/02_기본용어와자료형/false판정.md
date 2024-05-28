## false판정되는경우

```js
'', false, 0, -0, NaN, undefined, null
```

```js
// null타입은 ==로 비교하면 false로 판정되므로 if이용하여 테스트
var test3 = null;

if(test3) {
  console.log('조건이 true면 실행');
} else {
  console.log('조건이 false면 실행');
}
```
