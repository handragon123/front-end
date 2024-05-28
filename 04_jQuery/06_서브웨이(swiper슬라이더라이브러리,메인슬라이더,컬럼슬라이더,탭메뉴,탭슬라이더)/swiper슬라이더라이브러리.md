# swiper 슬라이더 라이브러리

## 슬라이더 제작방식

- 자체제작: 반드시 레퍼런스가 있어야하며 분석시간 + 자체구현시간 = 최소 3일이상 소요
- 라이브러리 활용: 거의 대부분 라이브러리를 활용하여 개발하고 있음
- slick: 가장 먼저 개발됐으며 익스하위버전 호환됨
- swiper: 커스텀 옵션이 매우많음, 모바일특화, 사용율 가장높음
- swiper8버전 사용(5버전이상에서 ie11 호환안되며 상위버전용 기능사용시 상위버전 사용해야함)
- bxslider: 하코사 게시물에 누군가 답을 달아주는 바람에 사용자가 조금 생김
- js라이브러리는 cdn방식(cdn링크가 없어질수 있으므로)을 사용하지말고 파일을 직접 연결하여 구현

## swiper 슬라이더 라이브러리

- github에 jQuery 8버전전용 없으며 cdn.jsdeliver.net 8.4.7 버전 다운로드후 연결 - swiper 검색하여 찾기

- https://cdn.jsdelivr.net/npm/swiper@8.4.7/swiper-bundle.min.js
  https://cdn.jsdelivr.net/npm/swiper@8.4.7/swiper-bundle.min.css

- 사이트 접속후 다른이름으로 저장하여 저장

- 슬라이더가 여러개이므로 .main_slider .swiper-container로 선택자사용

- **swiper-wrapper는 절대로 건드리지 말것!!!!!**

- let mainSlider로 변수명 변경,  반응형에서 swiper인스턴스 옵션을 변경하는 경우가 있으므로  let사용 

- new Swiper('.main_slider .swiper', { --> 우리클래스로 변경

- loop 슬라이더일 경우 슬라이더가 복제되므로 갯수가 달라짐

- 메인슬라이더는 loop를 이용하며 상품슬라이더처럼 갯수가 많을경우 loop사용시 느려질수있음

- 배경처리시 main_slider에서 높이지정하면 안쪽도 잡힘

- 슬라이드에 배경넣을경우 swiper-slide에 slide01, slide02 등으로 클래스 걸어서 처리

- swiper-slide에 :nth-child 사용금지(갯수가 다를수있으므로)

- swiper옵션
  
  ```js
  direction: 'horizontal', // 이동방향
  loop: true, // 반복
  speed: 500, // 이동속도
  allowTouchMove: false, // 마우스드래그(mousemove, touchmove)로 이동 끄기
  effect: 'fade', // fade효과
  fadeEffect: {
    crossFade: true, // 슬라이드 서로 교차되며 보여짐
  },
  autoplay: {
    delay: 4000, // 다음슬라이드 지연시간
    disableOnInteraction: false, // 안쪽 버튼 클릭시 안멈춤게
  },
  // 페이지네이션
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // 페이지네이션 클릭이벤트
  },
  // 좌우 화살표
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  ```

## 슬라이더 좌우 화살표를 슬라이더 밖으로 빼야되는 경우

- slider의 overflow:hidden을 건드릴수없으므로 slider에서 포지션기준을 빼주고(position:static) 바깥쪽요소에 position:relative로 기준설정

## 슬라이더 일시정지/자동재생 버튼은 모듈로 제공되지않으며 직접 버튼을 넣어야함

- swiper.autoplay.start() 메서드 이용
- swiper.autoplay.stop()
- disableOnInteraction: false로 반드시 꺼야함(슬라이더 내부에서 사용자 인터렉션발생시 멈춤기능)

## 슬라이드 안쪽 애니메이션처리시 제공하는 클래스사용

- ex. .main_slider .swiper-slide-active

## 페이지네이션 커스텀

- 배열에 텍스트를 넣고 renderBullet메서드의 index이용하여 불러옴
  
  ```js
  var paginationMenu = ['XCIENT FC', 'HYDROGEN', 'NEPTUNE'];
  
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: function(index, className) {
      return '<span class="' + className + '">' + paginationMenu[index] + '</span>';
    }
  },
  ```

- 페이지네이션 :after로 progress추가시 첫번째 블릿에 active바로 활성화되면서 애니메이션안되므로 삭제했다가 다시 active 추가
  
  ```js
  $('.main_slider .swiper-pagination-bullet').eq(0).removeClass('swiper-pagination-bullet-active');
      setTimeout(function() {
          $('.main_slider .swiper-pagination-bullet').eq(0).addClass('swiper-pagination-bullet-active');
      }, 10);
  ```

- 숫자타입 페이지네이션 두자릿수로 출력하고 기본 '/' 제거
  
  ```js
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (number) {
      return number < 10 ? '0' + number : number;
    },
    formatFractionTotal: function (number) {
      return number < 10 ? '0' + number : number;
    },
    renderFraction: function (currentClass, totalClass, index) {
      return '<span class="' + currentClass + '"></span><span class="' + totalClass + '"></span>';
    },
  },
  ```
  
  ```js
  pagination: {
    el: '.swiper-pagination',
    // renderCustom메서드에서 제공되는 current, total 매개변수 이용
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      // 10미만일 경우만 '0'추가하기
      total = total < 10 ? '0' + total : total;
      current = current < 10 ? '0' + current : current;
      return '<span class="swiper-pagination-current">' + current + '</span><span class="swiper-pagination-total">' + total + '</span>';
    },
  },
  ```

## swiper 컬럼슬라이더

```js
slidesPerView: 4, // 슬라이더 갯수
// css로 슬라이드의 가로길이를 바꾸는 경우 slidesPerView: 'auto'로 하고 간격도 css로 처리
spaceBetween: 30, // 간격
```

## swiper centerMode

- active슬라이드가 가운데 있는 슬라이더
  
  ```js
  centeredSlides: true,
  loop: true,
  ```

- active슬라이드를 가운데로 보내고 좌측을 loop로 채움

- 슬라이드 가로를 %로 잡을경우 slidesPerView: 'auto'로 한후 css로 가로길이 잡아야함

- active슬라이드 크기변경할 경우 swiper-slide에 transition 사용불가(기존 transition이 있으므로)

- slide안쪽요소를 따로 감고 그 요소에 transition 사용가능

## 슬라이더 두개 연동

- slidePerView, loop 같아야함
  
  ```js
  var specialSlider = new Swiper('.special_slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
  });
  
  var specialNameSlider = new Swiper('.special_name_slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true, // 슬라이드 클릭시 이동
  });
  
  specialSlider.controller.control = specialNameSlider;
  specialNameSlider.controller.control = specialSlider;
  ```

## 반응형 슬라이더

- slidesPerView: 'auto' 이용하고 css로 swiper-slide 가로를 설정
  
  ```css
  /* pc */
  .swiper-slide { width:calc(100% / 3); }
  
  /* 모바일 */
  @media (max-width:767px) {
    .main_best .best_slider .swiper-slide { width:100%; }
  }
  ```

- 컬럼 갯수가 정해져있을 경우
  
  ```js
  breakpoints: {
    // 1024이하 타블렛
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // 767이하 모바일
    767: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  }
  ```

## swiper map(매핑파일없음) 경고 제거

- .prettierignore에 swiper.min.js추가후
- swiper.min.js 하단 ////# sourceMappingURL=swiper.min.js.map //추가하여 map경고 삭제
