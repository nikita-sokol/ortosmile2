$(document).ready(function () {

  // Hamburger button

  var $toggleButton = $('.toggle-button'),
      $menuWrap = $('.menu-wrap'),
      $sidebarArrow = $('.menu-sidebar .sidebar-menu-arrow');
        //$menuParentItem = $('.menu-sidebar .menu-item-has-children');

  $toggleButton.on('click', function() {
    $(this).toggleClass('button-open');
    $menuWrap.toggleClass('menu-show');
  });

//fancybox
  $(".fancybox").fancybox({
   'infobar':true,
   'buttons':false
  });

  //mask for phone
   $(".form-phone").mask("+7 (999) 999-9999");


   //menu-mobile
   $('.menu-mobile-link').on('click', function (e) {
    e.preventDefault();

    var  item = $(this).closest(".menu-mobile-item"),
         list = $(this).closest(".menu-mobile-list"),
         items = list.find(".menu-mobile-item"),
         content = item.find(".menu-mobile-list-in"),
         otherContent = list.find(".menu-mobile-list-in"),
         duration = 300;

    if   (!item.hasClass('active')) {
         items.removeClass('active');
         item.addClass('active');

      otherContent.stop(true, true).slideUp(duration);
      content.stop(true, true).slideDown(duration);
    } else {
      item.removeClass('active');

      content.stop(true, true).slideUp(duration);
    }
  });


   //main-menu
   $('.main-menu-link').on('click', function (e) {
    e.preventDefault();

    var  item = $(this).closest(".main-menu-item"),
         list = $(this).closest(".main-menu-list"),
         items = list.find(".main-menu-item"),
         content = item.find(".main-menu-list-in"),
         otherContent = list.find(".main-menu-list-in"),
         duration = 100;

    if   (!item.hasClass('active')) {
         items.removeClass('active');
         item.addClass('active');

      otherContent.stop(true, true).slideUp(duration);
      content.stop(true, true).slideDown(duration);
    } else {
      item.removeClass('active');

      content.stop(true, true).slideUp(duration);
    }
  });

   $(document).mouseup(function (e){

       var  item = $(".main-menu-item"),
            list = $(".main-menu-list-in"),
            link = $(".main-menu-link"),
            duration = 100;

      if (!list.is(e.target) &&
          !link.is(e.target) &&
           list.has(e.target).length === 0) { 
         
         item.removeClass('active');
         list.slideUp(duration); 
      }
   });
    
    //faq-block
    var activeCollapse = $(".active-collapse");

    activeCollapse.css({"height": "24"});

    $('.btn-faq-collapse').on('click', function (e) {
      e.preventDefault();

      var  $this = $(this),
           wrap = $this.closest(".faq-block-wrap"),
           deploy = wrap.find(".btn-faq-deploy"),
           question = wrap.find(".faq-question"),
           clickWrap = wrap.find(".faq-click-wrap");

      $this.removeClass('active');
      deploy.addClass('active');
      clickWrap.animate({height: "24"},500);
    });

    $('.btn-faq-deploy').on('click', function (e) {
      e.preventDefault();

      var  $this = $(this),
           wrap = $this.closest(".faq-block-wrap"),
           collapse = wrap.find(".btn-faq-collapse"),
           clickWrap = wrap.find(".faq-click-wrap"),
           heightClickWrap = wrap.find(".faq-click-height").height(),
           question = wrap.find(".faq-question");

      $this.removeClass('active');
      collapse.addClass('active');
      clickWrap.removeClass('active-collapse').animate({height: heightClickWrap},500);
    });


    //m-results
    $('.results-name-link').on('click', function (e) {
    e.preventDefault();

    var  $this = $(this),
         item = $this.closest(".results-name-item"),
         list = $(".results-name-list"),
         links = list.find(".results-name-link");

    if   (!$this.hasClass('active')) {

         links.removeClass('active');
         $this.addClass('active');
    } 

    var  diagnosisText = $('.results-diagnosis-text'), 
         contentItem = $('.results-diagnosis-item'),
         itemPosition = $this.data('results'),
         itemFilter = contentItem.filter('.results-item-'+itemPosition),
         textItem = itemFilter.html();

         diagnosisText.html("<strong>Диагноз: </strong>" + textItem);

    var  worksText = $('.results-works-text'), 
         contentWorksItem = $('.results-works-item'),
         itemWorksFilter = contentWorksItem.filter('.results-works-'+itemPosition),
         textWorksItem = itemWorksFilter.html();

         worksText.html(textWorksItem);

    var  itemResults = $(".results-img-item");

         itemResults.filter('.results-img-'+itemPosition)
         .addClass('active')
         .siblings()
         .removeClass('active');
  });


    //2gis map --------------------
    var  map;

    DG.then(function () {
       map = DG.map('map', {
           center: [55.66453963191137, 37.75214331054688],
           zoom: 16
       });
       
       map.scrollWheelZoom.disable();

       if ($(window).width() >= 992) {
          map.setView([55.66453963191137, 37.75014331054688], 16);
       } else if ($(window).width() < 992 && $(window).width() >= 768 ) {
          map.setView([55.66453963191137, 37.74714331054688], 16);
       } else {
          map.setView([55.66653963191137, 37.75214331054688], 16);
       }

    $(window).resize(function() {
      if ($(window).width() >= 992) {
          map.setView([55.66453963191137, 37.75014331054688], 16);
       } else if ($(window).width() < 992 && $(window).width() >= 768 ) {
          map.setView([55.66453963191137, 37.74714331054688], 16);
       } else {
          map.setView([55.66653963191137, 37.75214331054688], 16);
       }
    });

       DG.marker([55.66453963191137, 37.75214331054688]).addTo(map);

    });

});



// функция, которая задает группе колонок одинаковую высоту
function setEqualHeight(columns) {
  
  var tallestcolumn = 0;
  
  columns.each(
    
    function() {
      currentHeight = $(this).height();
      
      if(currentHeight > tallestcolumn) {
        tallestcolumn = currentHeight;
      }
    }

  );

  columns.height(tallestcolumn);
}

//Выравнивание по высоте блоков в braces-types
var alignHeight1 = $(".br-types-img"),
    alignHeight1m = $(".br-types-block-m>.br-types-img"),
    alignHeight1c = $(".br-types-block-c>.br-types-img"),
    alignHeight2 = $(".br-types-block-m>h6, .br-types-block-c>h6"),
    alignHeight2m = $(".br-types-block-m>h6"),
    alignHeight2c = $(".br-types-block-c>h6"),
    alignHeight3 = $(".types-block-m-height, .types-block-c-height"),
    alignHeight3m = $(".types-block-m-height"),
    alignHeight3c = $(".types-block-c-height");

$(document).ready(function() {
  
  
  if  ($(window).width() <= 480) {

  } else if  ($(window).width() <= 580) {
    setEqualHeight(alignHeight1m);
    setEqualHeight(alignHeight2m);
    setEqualHeight(alignHeight3m);
  } else if  ($(window).width() < 992) {
    setEqualHeight(alignHeight1m);
    setEqualHeight(alignHeight1c);
    setEqualHeight(alignHeight2m);
    setEqualHeight(alignHeight2c);
    setEqualHeight(alignHeight3m);
    setEqualHeight(alignHeight3c);
  } else if ($(window).width() >= 992) {
    setEqualHeight(alignHeight1);
    setEqualHeight(alignHeight2);
    setEqualHeight(alignHeight3);
  }

});

$(window).resize(function() {
  alignHeight1.attr('style','');
  alignHeight2.attr('style','');
  alignHeight2m.attr('style','');
  alignHeight2c.attr('style','');
  alignHeight3.attr('style','');
  alignHeight3m.attr('style','');
  alignHeight3c.attr('style','');

  if  ($(window).width() <= 480) {

  } else if  ($(window).width() <= 580) {
    setEqualHeight(alignHeight1m);
    setEqualHeight(alignHeight2m);
    setEqualHeight(alignHeight3m);
  } else if  ($(window).width() < 992) {
    setEqualHeight(alignHeight1m);
    setEqualHeight(alignHeight1c);
    setEqualHeight(alignHeight2m);
    setEqualHeight(alignHeight2c);
    setEqualHeight(alignHeight3m);
    setEqualHeight(alignHeight3c);
  } else if ($(window).width() >= 992) {
    setEqualHeight(alignHeight1);
    setEqualHeight(alignHeight2);
    setEqualHeight(alignHeight3);
  }
});

//Выравнивание по высоте блоков в outer-braces-material
var alignHeight4 = $(".material-advantages"),
    alignHeight5 = $(".material-disadvantages");
$(document).ready(function() {
  
  if ($(window).width() >= 992) {
    setEqualHeight(alignHeight4);
    setEqualHeight(alignHeight5);
  } 
});

$(window).resize(function() {
  alignHeight4.attr('style','');
  alignHeight5.attr('style','');

  if ($(window).width() >= 992) {
    setEqualHeight(alignHeight4);
    setEqualHeight(alignHeight5);
  } 

});


//Выравнивание по высоте блоков в braces-look
var alignHeight6 = $(".br-look-block-m>h6, .br-look-block-c>h6"),
    alignHeight6m = $(".br-look-block-m>h6"),
    alignHeight6c = $(".br-look-block-c>h6"),
    alignHeight7 = $(".br-look-img-wrap"),
    alignHeight7m = $(".br-look-block-m>.br-look-img-wrap"),
    alignHeight7c = $(".br-look-block-c>.br-look-img-wrap");

$(document).ready(function() {
  
  
  if  ($(window).width() <= 480) {
  } else if  ($(window).width() <= 580) {
    setEqualHeight(alignHeight6m);
    setEqualHeight(alignHeight7m);
  } else if  ($(window).width() < 992) {
    setEqualHeight(alignHeight6m);
    setEqualHeight(alignHeight6c);
    setEqualHeight(alignHeight7m);
    setEqualHeight(alignHeight7c);
  } else if ($(window).width() >= 992) {
    setEqualHeight(alignHeight6);
    setEqualHeight(alignHeight7);
  }

});

$(window).resize(function() {
  alignHeight6.attr('style','');
  alignHeight6m.attr('style','');
  alignHeight6c.attr('style','');
  alignHeight7.attr('style','');
  alignHeight7m.attr('style','');
  alignHeight7c.attr('style','');

  if  ($(window).width() <= 480) {
  } else if  ($(window).width() <= 580) {
    setEqualHeight(alignHeight6m);
    setEqualHeight(alignHeight7m);
  } else if  ($(window).width() < 992) {
    setEqualHeight(alignHeight6m);
    setEqualHeight(alignHeight6c);
    setEqualHeight(alignHeight7m);
    setEqualHeight(alignHeight7c);
  } else if ($(window).width() >= 992) {
    setEqualHeight(alignHeight6);
    setEqualHeight(alignHeight7);
  }
});

