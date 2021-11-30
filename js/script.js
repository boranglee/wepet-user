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

  $(document).ready(function(){
    $(".info--accordian").click(function() {
      $(this).nextAll(".content:first").slideToggle("fast");
      $(this).find(".accordian-arrow").toggleClass("less");
    });

    $(".btn").click(function() {
      $("#menu,.page_cover,html").addClass("open");
      window.location.hash = "#open";
    });
    
    window.onhashchange = function() {
      if (location.hash != "#open") {
        $("#menu,.page_cover,html").removeClass("open");
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

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('preview').src = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      document.getElementById('preview').src = "";
    }
  }

  