$(document).ready(function() {
  // toggle button
  $(".btn").click(function() {
    $(".nav_links").slideToggle(1700);
    $(".btn").toggleClass("change");
  });
  // background and fixed nav

  let position = $(window).scrollTop(); //means equal to the positin from the top
  if (position >= 100) {
    $("nav , .nav_container").addClass("nav_background ,nav_color"); //container for bigger screen
  } else {
    $("nav , .nav_container").removeClass("nav_background");
  }

  // smooth scrolling
  $(".nav_links a").click(function(e) {
    e.preventDefault();
    let target = $(this).attr("href"); //refer to links
    $("html , body")
      .stop()
      .animate(
        {
          //stop here to prevent bad animation when click more times
          scrollTop: $(target).offset().top
        },
        1500
      );
  });
  // owl member
  $(".team_center").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
  // owl customers
  $(".customers_center").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  });
});
