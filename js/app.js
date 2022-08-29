

// 수량 버튼
$(function(){
    $('#dec').click(function(e){
    e.preventDefault();
    var stat = $('#num').text();
    var num = parseInt(stat,10);
    num--;
    if(num<=0){

    num =1;
    }
    $('#num').text(num);
    });
    $('#inc').click(function(e){
    e.preventDefault();
    var stat = $('#num').text();
    var num = parseInt(stat,10);
    num++;
    
    if(num>5){

    num=5;
    }
    $('#num').text(num);
    });
    });
    

// 메뉴 토글
$(function(){

  $('header .gnb-btn').click(function(){
    $('#gnb').addClass('on');
  });


  $('#gnb header .gnb-btn-close').click(function(){
    $('#gnb').removeClass('on');
  });
});
// 메뉴 슬라이드 
$(function(){
  $(".main-list").click(function(){
          $(this).find('ul').stop().slideToggle();
      });
});


$(window).scroll(function(){
	if ($(this).scrollTop() > 300){
		$('.col.scroll2 a').fadeIn(1000);
	} else{
		$('.col.scroll2 a').fadeOut(1000);
	}
});


$(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 200){
      $('section.col').eq(0).fadeIn(400);
    } else{
      $('section.col').eq(0).fadeOut(100);
    }
  });
  $(window).scroll(function(){
    if ($(this).scrollTop() > 800){
      $('section.col').eq(1).fadeIn(400);
    } else{
      $('section.col').eq(1).fadeOut(100);
    }
  });
  $(window).scroll(function(){
    if ($(this).scrollTop() > 1400){
      $('section.col').eq(2).fadeIn(400);
    } else{
      $('section.col').eq(2).fadeOut(100);
    }
  });
  $(window).scroll(function(){
    if ($(this).scrollTop() > 2200){
      $('section.col').eq(3).fadeIn(400);
    } else{
      $('section.col').eq(3).fadeOut(100);
    }
  });
});



//alert

$(function(){
  $('#my a').eq(1).click(function(){
    alert("현재 제공되지 않는 서비스 입니다.");
    return false;
  });
  $('#my a').eq(2).click(function(){
    alert("현재 제공되지 않는 서비스 입니다.");
    return false;
  });
});

// 2depth

$(function(){
  $('.category ul.sub-menu').hide();
  $('.category > ul > li').click(function(){
    $('.category > ul > li').removeClass('on');
    $(this).addClass('on');
    $('ul.sub-menu').hide();
    $(this).find('ul').show();
  });

  $('ul.sub-menu li').click(function(){
    $(this).siblings().removeClass('on');
    $(this).addClass('on');
  });
  $('ul.sub-menu li.boboga').click(function(){
    $(this).removeClass('on');
  });
});



  $(function(){

  $('#all').click(function(){
    $('.item article').show();
  });
  
  $('#h-all').click(function(){
    $('.item article').not('.wlh, .wh').fadeOut(1);
    $('.wlh, .wh').show();
  });
  $('#wlh').click(function(){
    $('.item article').not('.wlh').fadeOut(1);
    $('.wlh').show();
  });

  $('#wh').click(function(){
    $('.item article').not('.wh').fadeOut(1);
    $('.wh').show();
  });

  $('#e-all').click(function(){
    $('.item article').not('.wle, .we').fadeOut(1);
    $('.wle, .we').show();
  });

  $('#wle').click(function(){
    $('.item article').not('.wle').fadeOut(1);
    $('.wle').show();
  });
  $('#we').click(function(){
    $('.item article').not('.we').fadeOut(1);
    $('.we').show();
  });

  $('#ts-all').click(function(){
    $('.item article').not('.tur, .spe').fadeOut(1);
    $('.tur, .spe').show();
  });
  $('#tur').click(function(){
    $('.item article').not('.tur').fadeOut(1);
    $('.tur').show();
  });
  $('#spe').click(function(){
    $('.item article').not('.spe').fadeOut(1);
    $('.spe').show();
  });
  $('#mic').click(function(){
    $('.item article').not('.mic').fadeOut(1);
    $('.mic').show();
  });

  // filter
  $('.row-filter').click(function(){
    $('.row-filter').hide();
    $('.col-filter').show();
    $('section.item').removeClass('row-item');
    $('section.item').addClass('col-item');
  });

  $('.col-filter').click(function(){
    $('.col-filter').hide();
    $('.row-filter').show();
    $('section.item').removeClass('col-item');
    $('section.item').addClass('row-item');
  });


});