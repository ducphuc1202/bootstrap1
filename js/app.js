$(document).ready(function(){
/*J S for scroll menu */
  $(document).scroll(function(evt) {
    if($(window).scrollTop() > 30) {
      $('.menu').css('background','#000').css('padding','10px 0px');
      $('.btn-up').fadeIn();
    }
    else {
      $('.menu').css('background','linear-gradient(rgba(0,0,0,.80),rgba(0,0,0,.80))').css('padding','20px 0px');
      $('.btn-up').fadeOut();
    }
  })
  //Smooth scroll
  $(".menu a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


  /* JS FOR COUNTUP */
  var isCount = false;
  $('.fun-facts').mouseover(function(evt) {
    if(!isCount) {
      var options = {
        useEasing: true,
        useGrouping: true,
        separator: ""
      };
      var project = new CountUp("c-project", 0, 2780,0,2.5,options);
      if (!project.error) {
          project.start();
      } else {
          console.error(project.error);
      }

      var client = new CountUp("c-client", 0, 487,0,2.5,options);
      if (!client.error) {
          client.start();
      } else {
          console.error(client.error);
      }

      var coffee = new CountUp("c-coffee", 0, 13730,0,2.5,options);
      if (!coffee.error) {
          coffee.start();
      } else {
          console.error(coffee.error);
      }

      var awards = new CountUp("c-awards", 0, 154,0,2.5,options);
      if (!awards.error) {
          awards.start();
      } else {
          console.error(awards.error);
      }
      isCount = !isCount;
    }
  })
  /* END JS FOR COUNTUP */

  /* JS for progress */
  isCountSkill = false;
  $('.skill').mouseover(function(evt) {
      $('.progress .progress-right .progress-bar').css('animation','loading-50 1.2s linear forwards');
      $('.programming .progress-left .progress-bar').css('animation','loading-33 1.2s linear forwards 1.2s');
      $('.database .progress-left .progress-bar').css('animation','loading-1 1.2s linear forwards 1.2s');
      $('.typography .progress-left .progress-bar').css('animation','loading-14 1.2s linear forwards 1.2s');
      $('.design .progress-left .progress-bar').css('animation','loading-40 1.2s linear forwards 1.2s');
      if(!isCountSkill) {
        var options = {
          useEasing: true,
          useGrouping: true,
          separator: ""
        };
        var program = new CountUp("c-program", 0, 83,0,2.4,options);
        if (!program.error) {
            program.start();
        } else {
            console.error(program.error);
        }

        var database = new CountUp("c-database", 0, 51,0,2.4,options);
        if (!database.error) {
            database.start();
        } else {
            console.error(database.error);
        }

        var typography = new CountUp("c-typography", 0, 64,0,2.4,options);
        if (!typography.error) {
            typography.start();
        } else {
            console.error(typography.error);
        }

        var design = new CountUp("c-design", 0, 90,0,2.4,options);
        if (!design.error) {
            design.start();
        } else {
            console.error(design.error);
        }
        isCountSkill = !isCountSkill;
      }
  })
  /* End JS for progress */

  /* JS for swipe slide */
  $(".carousel").swipe({

    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll:"vertical"

  });

  $("#carousel-example-generic-2").swipe({

    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll:"vertical"

  });

  /* JS for Gallery - isotope */
  $('.gallery-img').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });

  $('.gallery-nav ul li').click(function(evt){
    $('.gallery-nav ul li.active').removeClass('active');
    $(this).addClass('active');
    var selector = $(this).attr('data-filter');
    $('.gallery-img').isotope({
      filter: selector
    })
    return false;
  })

  /* JS for Gallery - modal */
  var images =["images/gallery-1.jpg","images/gallery-2.jpg","images/gallery-3.jpg"
              ,"images/gallery-4.jpg","images/gallery-5.jpg","images/gallery-6.jpg"
              ,"images/gallery-7.jpg","images/gallery-8.jpg","images/gallery-9.jpg"]
  var position = "1";
  $('.gallery-img .item').click(function(evt) {
    var imageurl = $(this).find('img').attr('src');
    $('.modal .modal-body img').attr('src',imageurl);
    var name = $(this).find('.item-info p').text();
    $('.modal .modal-footer .name').text(name);
    position = $(this).attr('data-id');
    $('.modal .modal-footer .position').text(position + "/9");
  })

  $('.button-direction').click(function(evt){
    if(evt.target !== this)
      return false;
    $('.modal').modal('toggle');
  })

  $('.button-direction .left').click(function() {
    var pos = parseInt(position);
    if(pos === 1)  pos = 8;
    else pos = pos - 2;
    $('.modal .modal-body img').attr('src',images[pos]);
    position = pos + 1 + "";
    var $allItem = $('.gallery-img .item');
    var $newele;
    for(var i = 0; i < $allItem.length; i++) {
      if($($allItem[i]).attr('data-id') === position) {
        $newele = $($allItem[i]);
        break;
      }
    }
    var name = $newele.find('.item-info p').text();
    $('.modal .modal-footer .name').text(name);
    $('.modal .modal-footer .position').text(position + "/9");
  })
  $('.button-direction .right').click(function() {
    var pos = parseInt(position);
    if(pos === 9)  pos = 0;
    $('.modal .modal-body img').attr('src',images[pos]);
    position = pos + 1 + "";
    var $allItem = $('.gallery-img .item');
    var $newele;
    for(var i = 0; i < $allItem.length; i++) {
      if($($allItem[i]).attr('data-id') === position) {
        $newele = $($allItem[i]);
        break;
      }
    }
    var name = $newele.find('.item-info p').text();
    $('.modal .modal-footer .name').text(name);
    $('.modal .modal-footer .position').text(position + "/9");
  })


  /* JS for Comming */
  // Set the date we're counting down to
  var countDownDate = new Date("May 25, 2019 00:00:00").getTime();

  var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    $('.clock .day .clock-number').text(days);
    $('.clock .hour .clock-number').text(hours);
    $('.clock .minutes .clock-number').text(minutes);
    $('.clock .second .clock-number').text(seconds);

  }, 1000);
}); // end ready function
