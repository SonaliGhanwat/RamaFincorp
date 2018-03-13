
$(document).ready(function() {

  // Smooth scrolling
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, 'easeInOutExpo');

          if ( $(this).parents('.nav-menu').length ) {
            $('.nav-menu .menu-active').removeClass('menu-active');
            $(this).closest('li').addClass('menu-active');
          }

          if ( $('body').hasClass('mobile-nav-active') ) {
              $('body').removeClass('mobile-nav-active');
              $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
              $('#mobile-body-overly').fadeOut();
          }
          return false;
        }
      }
    });
  });

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {opacity:'show'},
    speed: 400
  });

  // Mobile Navigation
  if( $('#nav-menu-container').length ) {
      var $mobile_nav = $('#nav-menu-container').clone().prop({ id: 'mobile-nav'});
      $mobile_nav.find('> ul').attr({ 'class' : '', 'id' : '' });
      $('body').append( $mobile_nav );
      $('body').prepend( '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>' );
      $('body').append( '<div id="mobile-body-overly"></div>' );
      $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

      $(document).on('click', '.menu-has-children i', function(e){
          $(this).next().toggleClass('menu-item-active');
          $(this).nextAll('ul').eq(0).slideToggle();
          $(this).toggleClass("fa-chevron-up fa-chevron-down");
      });

      $(document).on('click', '#mobile-nav-toggle', function(e){
          $('body').toggleClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').toggle();
      });

      $(document).click(function (e) {
          var container = $("#mobile-nav, #mobile-nav-toggle");
          if (!container.is(e.target) && container.has(e.target).length === 0) {
             if ( $('body').hasClass('mobile-nav-active') ) {
                  $('body').removeClass('mobile-nav-active');
                  $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                  $('#mobile-body-overly').fadeOut();
              }
          }
      });
  } else if ( $("#mobile-nav, #mobile-nav-toggle").length ) {
      $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Stick the header at top on scroll
  $("#header").sticky({topSpacing:0, zIndex: '50'});

  // Counting numbers

  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Tooltip & popovers
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  // Background image via data tag
  $('[data-block-bg-img]').each(function() {
    // @todo - invoke backstretch plugin if multiple images
    var $this = $(this),
      bgImg = $this.data('block-bg-img');

      $this.css('backgroundImage','url('+ bgImg + ')').addClass('block-bg-img');
  });

  // jQuery counterUp
  if(jQuery().counterUp) {
    $('[data-counter-up]').counterUp({
      delay: 20,
    });
  }

  //Scroll Top link
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrolltop').fadeIn();
    } else {
      $('.scrolltop').fadeOut();
    }
  });

  $('.scrolltop, #logo a').click(function(){
    $("html, body").animate({
      scrollTop: 0
    }, 1000, 'easeInOutExpo');
    return false;
  });
  
  $('#showSalriedDoc').click(function() {
      $('.salriedDoc').slideToggle("fast");
});           
  
  $('#showEMICalculate').click(function() {
      $('.features').slideToggle("fast");
});      
  
  $('#showSelfEmpDoc').click(function() {
      $('.empDoc').slideToggle("fast");
});             

  $('#showRequiredDoc').click(function() {
      $('.requiredDoc').slideToggle("fast");
});      

  $('#showNRIDoc').click(function() {
      $('.NRIDoc').slideToggle("fast");
});    
  
  /*function EmiCalculaor(){
	    
	    
	  var month = $("#emiMonth").val();
	  var rate = $("#InterestRate").val();
	  var pamt = $("#prncipleAmount").val();
	  
	   var monthlyInterestRatio = (rate/100)/12;
	   var monthlyInterest = (monthlyInterestRatio*pamt);
	      var top = Math.pow((1+monthlyInterestRatio),month);
	         var bottom = top -1;
	         var sp = top / bottom;
	         var emi = ((pamt * monthlyInterestRatio) * sp);
	   var result = emi.toFixed(2);
	   var totalAmount = emi*month;
	   var yearlyInteret = totalAmount-pamt;
	   var downPayment = pamt*(20/100);
	      //alert(emi);
	   $("#result").empty();
	   $("#result").append("Your EMI = "+result);
	    
	}*/
  
});

function initialize()
{
  var mapProp = {
    center: new google.maps.LatLng(18.5052366,73.8551245),
    zoom:10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
 

  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var latlang = new google.maps.LatLng(18.5052366,73.8551245);
 // var latlang1 = new google.maps.LatLng(18.5515,73.9348);
  
  var marker = new google.maps.Marker({
    position: latlang,
    map: map
  });
  
  var marker1 = new google.maps.Marker({
	    position: latlang1,
	    map: map
	  });
}

function loadScript()
{
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyC1NhARyEaeiO-uT7DKlXSojnCAx0EJKF8&sensor=false&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;
