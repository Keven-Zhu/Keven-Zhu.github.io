window.onload = function(){

    window.setTimeout(function(){
      document.getElementById('intro-header').className += " load";
    }, 500);

    window.setTimeout(function(){
      document.getElementById('nice-header').className += " load";
    }, 750);

    window.setTimeout(function(){
      document.getElementById('intro-other-header').className += " load";
    }, 1000);

  };

