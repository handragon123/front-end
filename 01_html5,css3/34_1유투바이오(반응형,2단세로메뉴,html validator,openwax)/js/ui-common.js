window.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('#header');
  const langBtn = document.querySelector('#header .lang_btn');
  const sitemapBtn = document.querySelector('#header .sitemap_btn');
  const menuBtn = document.querySelector('#header .menu_btn');

  langBtn.addEventListener('click', function () {
    //클릭한 요소를 기준으로 부모요소 탐색
    langBtn.parentElement.classList.toggle('on');
  });

  sitemapBtn.addEventListener('click', function () {
    this.classList.toggle('on');
  });

  menuBtn.addEventListener('click', function () {
    // document.querySelector('body').classList.toggle('on');
    document.body.classList.toggle('on');
    this.classList.toggle('on');
    langBtn.classList.toggle('on');
    document.querySelector('#header .m_gnb_area').classList.toggle('on');
  });

  // 스크롤시 헤더고정역할
  window.addEventListener('scroll', function () {
    console.log(window.screenY);
    if (window.scrollY >= 100) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });
});
