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
  var loaded=false;
  $(window).scroll(function() {
    if (!loaded && $(window).scrollTop() >  $(document).height() - $(window).height() - (screen.height / 2)) {
      window.setTimeout(function(){
        document.getElementById('aboutme-header').className += " load";
      }, 500);
  
      window.setTimeout(function(){
        document.getElementById('aboutme-body').className += " load";
      }, 1000);

      loaded=true;
    }
});

$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){   
      window.location.hash = hash;
    });
  }
});
});

