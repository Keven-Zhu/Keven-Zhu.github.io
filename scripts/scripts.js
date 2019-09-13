window.onload = function(){
    window.setTimeout(function(){
      document.getElementById('intro-header').className += " load";
    }, 500);

    window.setTimeout(function(){
      document.getElementById('nice-header').className += " load";
    }, 1000);

    window.setTimeout(function(){
      document.getElementById('intro-other-header').className += " load";
    }, 1500);

};

$(document).ready(function() {
  var loaded1=false;
  var loaded2=false;
  var loaded3=false;
  $(window).scroll(function() {
    if (!loaded1 && $(window).scrollTop() >  $(document).height() - $(window).height() - (screen.height * 2.5)) {
      window.setTimeout(function(){
        document.getElementById('aboutme-header').className += " load";
      }, 400);
  
      window.setTimeout(function(){
        document.getElementById('aboutme-body').className += " load";
      }, 900);

      loaded1=true;
    }
    else if (!loaded2 && $(window).scrollTop() >  $(document).height() - $(window).height() - (screen.height * 1.5)) {
      window.setTimeout(function(){
        document.getElementById('experience-header').className += " load";
      }, 400);
  
      window.setTimeout(function(){
        document.getElementById('experience-container').className += " load";
      }, 900);
      loaded2=true;
    }
    else if (!loaded3 && $(window).scrollTop() >  $(document).height() - $(window).height() - (screen.height * .5)) {
      window.setTimeout(function(){
        document.getElementById('projects-header').className += " load";
      }, 400);
  
      window.setTimeout(function(){
        document.getElementById('projects-body').className += " load";
      }, 900);
      loaded3=true;
    }
});
});

$("a").on('click', function(event) {
  if (event.target.id === "nav-link"){
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){   
        window.location.hash = hash;
      });
    }
  }
});

$(document).ready(function() {
  $('#experience-material-tabs').each(function() {

      var $active, $content, $links = $(this).find('a');

      $active = $($links[0]);
      $active.addClass('active');

      $content = $($active[0].hash);

      $links.not($active).each(function() {
          $(this.hash).hide();
      });

      $(this).on('click', 'a', function(e) {

          $active.removeClass('active');
          $content.hide();

          $active = $(this);
          $content = $(this.hash);

          $active.addClass('active');
          $content.show();

          e.preventDefault();
      });
  });
});