$(document).ready(function(){

    //Close menú
    $("main , .contact-link").on("click", function() {
     if ($(".collapse").hasClass("show")) {
       $('.navbar-collapse').collapse('hide');
     }
    });

    //AOS initialize
    AOS.init({
      once: true,
      offset: 300
    });

    //set class active to current page-----------------------
    var current = location.pathname.split("/")[1];

    if (current === "") {
      current = "/";
    } else if (current.indexOf(".") == -1) {
      current = current + '.html';
    }


    $('#nav ul li a').each(function() {
        var $this = $(this);
        // we check comparison between current page and attribute redirection.
        if ($this.attr('href') === current) {
            $this.addClass('active');
        }
    });

    $('#nav .contact-link').on("click", function() {
      $('#nav ul li a').removeClass('active');
      $(this).addClass('active');
    });

    //Sticky menu
    var height = $('.navbar').height();

    if ( $(window).scrollTop() > height ){
      $('.navbar').addClass('menu-fixed');
    }

  	$(window).on('scroll', function(){
  		if ( $(window).scrollTop() > height ){
  			$('.navbar').addClass('menu-fixed');
  		} else {
  			$('.navbar').removeClass('menu-fixed');
  		}
  	});

    //Update copy automatically
    document.querySelector('.year-copy').innerText = new Date().getFullYear();

});
