// ページ内リンクにスムーズスクロール
$('a[href^="#"]').click(function () { // リンクをクリックしたら…
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});


// ハンバーガーメニューの設定
$(function(){
  $('.menu-btn').on('click', function() { // .btn-menuをクリックすると
    $(this).toggleClass('open'); // .menu-btnにopenというclass名を付与したり外したり
    $(this).next().toggleClass('open'); // .btn-menuの次の要素（.menu）にopenというclass名を付与したり外したり
  });

  $('.menu a').on('click', function() { // .menu aをクリックすると
    $('.menu').removeClass('open'); // .menuのopenというclass名を外す
    $('.menu-btn').removeClass('open'); // .menu-btnのopenというclass名を外す
  });
});


// お品書きのソート表示
  $(function() {
  $('.item-blk').mixItUp({
    load: {
    filter: ".zensai"
    }
  });
});
























