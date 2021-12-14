;(function($){
    $(function(){

      $(".mainview .view").bxSlider({
        auto:true, mode:'fade', prevText:'', nextText:'', speed:500, 
    });

    $('.tab_menu_btn').on('click',function(){
      $('.tab_menu_btn').removeClass('on');
      $(this).addClass('on')
      var idx = $('.tab_menu_btn').index(this);
      $('.tab_box').hide();
      $('.tab_box').eq(idx).show();
  });

  $('.tab_menu_round').on('click',function(){
    $('.tab_menu_round').removeClass('on');
    $(this).addClass('on')
    var idx = $('.tab_menu_round').index(this);
    $('.tab_round_box').hide();
    $('.tab_round_box').eq(idx).show();
});


  $(document).ready(function(){
    $(".info--accordian").click(function() {
      $(this).nextAll(".content:first").slideToggle("fast");
      $(this).find(".accordian-arrow").toggleClass("less");
    });

    $(document).ready(function(){
      $(".info--accordian_mini").click(function() {
        $(this).nextAll(".content_mini:first").slideToggle("fast");
        $(this).find(".accordian-arrow_mini").toggleClass("less");
      });
    });

  $(document).ready(function(){
    $(".info--accordian1").click(function() {
      $(this).nextAll(".content1:first").slideToggle("fast");
      $(this).find(".accordian-arrow").toggleClass("less");
    });

    $(document).ready(function(){
      $(".info--accordian2").click(function() {
        $(this).nextAll(".content2:first").slideToggle("fast");
        $(this).find(".accordian-arrow").toggleClass("less");
      });

    $(document).ready(function(){
      $(".info--accordian3").click(function() {
        $(this).nextAll(".content3:first").slideToggle("fast");
        $(this).find(".accordian-arrow").toggleClass("less");
      });
    });
  });
});
    
    $(".btn").click(function() {
      $(".side__menu,.page_cover,html").addClass("open");
      window.location.hash = "#open";
    });
    
    window.onhashchange = function() {
      if (location.hash != "#open") {
        $(".side__menu,.page_cover,html").removeClass("open");
      }
    };
  });

  $(document).ready(function() {
    $('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  });
});

})(jQuery);
  
  function selectAll(selectAll)  {
    const checkboxes 
         = document.getElementsByName('agree');
    
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAll.checked;
    })
  }  

  var modal = document.getElementById('myModal');
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];
  btn.onclick = function() {
      modal.style.display = "block";
  }
  span.onclick = function() {
      modal.style.display = "none";
  }
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  } 

 