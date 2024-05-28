window.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('#header');
  const langBtn = document.querySelector('#header .lang_btn');
  const sitemapBtn = document.querySelector('#header .sitemap_btn');
  const menuBtn = document.querySelector('#header .menu_btn');
  // const famBtn = document.querySelector('#footer .family_btn');

  langBtn.addEventListener('click', function () {
    // 클릭한 요소를 기준으로 부모요소 탐색
    langBtn.parentElement.classList.toggle('on');
  });

  sitemapBtn.addEventListener('click', function () {
    this.classList.toggle('on');
  });

  menuBtn.addEventListener('click', function () {
    document.body.classList.toggle('on');
    this.classList.toggle('on');
    langBtn.classList.toggle('on');
    document.querySelector('#header .m_gnb_area').classList.toggle('on');
  });

  // famBtn.addEventListener('click', function () {
  //   famBtn.parentElement.classList.toggle('on');
  // });

  window.addEventListener('scroll', function () {
    let _scrollY = window.scrollY;

    if (_scrollY >= 100) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });

  // js 형제선택 함수
  function siblings(t) {
    const children = t.parentElement.children;
    const tempArr = [];

    // children이 HTML 컬렉션 유사배열이므로 forEach사용불가
    // 일반 for문으로 유사배열 길이만큼 반복하여 임시배열에 넣어줌
    for (let i = 0; i < children.length; i++) {
      tempArr.push(children[i]);
    }

    // 임시배열의 요소들과 함수실행시 전달된 요소가 다른 요소만 배열로 리턴
    return tempArr.filter((v) => {
      return v !== t;
    });
  }

  // 모바일 아코디언메뉴
  const mGnb = document.querySelectorAll('#header .m_gnb>li>a');

  mGnb.forEach((v) => {
    v.addEventListener('click', function () {
      this.parentElement.classList.toggle('on');

      siblings(this.parentElement).forEach((v) => {
        v.classList.remove('on');
      });
    });
  });

  // 주식정보 숫자 카운팅
  function countNum(el, initNum, finalNum) {
    const infoEl = document.querySelector(el);
    let isScroll = false;

    function handlescroll() {
      let _scrollY = window.scrollY;
      // 요소가 화면 상단까지 스크롤
      // let posY = infoEl.offsetTop;
      // 요소가 화면 아래에서 뷰포트안으로 들어올때
      let posY = infoEl.offsetTop - window.outerHeight;

      // scroll이벤트에서 한번만 실행하기
      // isScroll를 false로 초기화후 스크롤시 true로 변경해줌
      if (_scrollY >= posY && isScroll === false) {
        let interval = setInterval(() => {
          initNum += 10;
          // 요소 안쪽 선택
          infoEl.querySelector('.num strong').textContent = initNum;

          if (initNum >= finalNum) {
            infoEl.querySelector('.num strong').textContent = finalNum;
            this.clearInterval(interval);
          }
        }, 10);
        isScroll = true;
      }
    }
    // handlescroll();

    // 새로고침시 스크롤이벤트가 발생하지않는경우가있으므로 핸들러함수를 한번실행하고 스크롤시 다시 실행
    window.addEventListener('scroll', handlescroll);
    // 이벤트 강제 발생
    window.dispatchEvent(new Event('scroll'));
  }
  countNum('.main_info .col1', 2000, 4234);

  document
    .querySelector('#footer .family_btn')
    .addEventListener('click', function () {
      this.parentElement.classList.toggle('on');
    });
  // fiexd 버튼 클릭시 부드럽게 스크롤 이동
  document
    .querySelector('#footer .top_btn')
    .addEventListener('click', function (e) {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
});
