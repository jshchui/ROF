// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require rails-ujs
//= require_tree .

$( document ).ready(function() {

  if($("#homepage-flag").length > 0) {
    $('li p').css("color", "#D12834");
    $('.navbar-default').css("background-color", "transparent");
    $('.navbar-default').css("border-color", "transparent");
    $('.navbar').css("box-shadow", "none");
    $('.nav-selections').css("color", "white");
    $('.navbar-header a').css("color", "white");

    var open = false;

    $('.navbar-toggle').click(function(e) {
        if(open == false) {
          $('.navbar-default').css("background-color", "white");
          console.log('change navbar to white');
          $('.nav-selections').css("color", "#D12834");

          open = true;
        } else {
          open = false;
          $('#navbar-default').css("background-color", "transparent");
          console.log('change navbar to transparent');
        }
    });

    // run code for homepage
    $(window).scroll(function() {
     currentScroll = $(window).scrollTop();

       //nav is cleared at the top
       if(currentScroll > 300) {
         $('.navbar-default').css("background-color", "#f8f8f8");
         $('.navbar-default').css("border-color", "transparent");
         $('.navbar').css("box-shadow", "none");
         $('.nav-selections').css("color", "#D12834");


         //$('#nav-bar').parent().toggleClass('change');
       } else {
         $('.navbar-default').css("background-color", "transparent");
         $('.nav-selections').css("color", "white");
         //$('#nav-bar').parent().toggleClass('change');

       }
     });
  }

  $("#get-started").click(function() {
      $('html, body').animate({
          scrollTop: $("#sign-up").offset().top
      }, 800);
  });


});
