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