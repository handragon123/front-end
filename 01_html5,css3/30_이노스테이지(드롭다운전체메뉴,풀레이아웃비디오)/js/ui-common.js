window.addEventListener('DOMContentLoaded', function () {
  console.log(window);
  const header = document.querySelector('#header');
  const gnb = document.querySelector('#header .gnb');
  const mGnbArea = document.querySelector('#header .m_gnb_area');

  gnb.addEventListener('mouseenter', function () {
    header.classList.add('on');
  });

  header.addEventListener('mouseleave', function () {
    header.classList.remove('on');
  });

  let menuToggle = true;

  document
    .querySelector('#header .open_btn')
    .addEventListener('click', function () {
      // 조건이 참(true)이면 실행됨
      if (menuToggle) {
        header.classList.add('fixed');
        menuToggle = false;
      } else {
        if (window.scrollY < 10) {
          header.classList.remove('fixed');
        }
        menuToggle = true;
      }

      this.classList.toggle('on');
      mGnbArea.classList.toggle('on');
    });

  // 스크롤시 스크롤바의 위치값 판단하여 헤더 스타일 변경하기
  window.addEventListener('scroll', function () {
    if (this.scrollY >= 10) {
      header.classList.add('fixed');
    } else {
      // .m_gnb_area에 on클래스가 없을때만 헤더에서 fixed 삭제
      if (!mGnbArea.classList.contains('on')) {
        header.classList.remove('fixed');
      }
    }
  });
});
