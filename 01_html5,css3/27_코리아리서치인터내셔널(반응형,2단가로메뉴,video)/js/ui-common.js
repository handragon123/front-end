// dom(html)이 모두 로딩되면 실행됨
window.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('header');

  header.addEventListener('mouseenter', function () {
    this.classList.add('on');
  });

  header.addEventListener('mouseleave', function () {
    this.classList.remove('on');
  });

  window.addEventListener('scroll', function () {
    if (this.scrollY > 10) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });

  document
    .querySelector('#header .open_btn')
    .addEventListener('click', function () {
      document.querySelector('#header .m_gnb_area').classList.add('on');
    });

  document
    .querySelector('#header .close_btn')
    .addEventListener('click', function () {
      document.querySelector('#header').classList.remove('on');
      // 모바일창에서 창닫기 클릭시 창닫히는 효과
      document.querySelector('#header .m_gnb_area').classList.remove('on');
    });
});
