# display:grid

- 컨텐츠가 행, 열 구조일때 사용

```css
.container {
  display:grid;
  /* 3칸으로 지정하고 크기는 동일, fr은 fraction(비율) */
  grid-template-columns: 1fr 1fr 1fr;
  /* 첫번째칸: 3/5, 두번째칸: 2/5 */
  grid-template-columns: 3fr 2fr;
  /* 3칸으로하고 가로길이 동일하게 */
  grid-template-columns: repeat(3, 1fr);
  /* 행,열간격, 각 행과 열사이에만 적용 */
  gap: 10px 20px;
  /* 세로정렬 */
  align-items: center;
  /* 가로정렬 */
  justify-content: center;
}
```

```css
.grid_item {
 /* 합치고 싶은 시작번호와 끝번호를 적음 */
 grid-row: 1 / 3;
 grid-column: 1 / 3;
 /* 1번부터 시작하여 두칸 합치기 */
 grid-column: 1 / span 2;
 /* 1번부터 시작하여 두칸 합침, 시작번호 생략시 1부터 시작 */
 grid-column: span 2;
 /* z-index, order 사용가능 */
 /* 행시작, 열시작, 행끝, 열끝번호 */
 grid-area:1 / 2 / 4 / 6;
}
```
