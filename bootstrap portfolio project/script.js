// changes the progress bar under the navbar based on users scroll position on the webpage
  window.addEventListener('scroll', function () {
    const progressBar = document.getElementById('progress-bar');
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight - windowHeight;
    const scrollPercentage = (window.pageYOffset / fullHeight) * 100;
    progressBar.style.width = scrollPercentage + '%';
  });

// causes the modal to popup when the user loads into the page
  window.addEventListener('DOMContentLoaded', function() {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
  });

// fades text in and out with id fadeoutandin
$(document).ready(function(){
  $("#fadeOutAndIn").click(function(){
    $("#fadeOutAndIn").css("color", "red").fadeOut(1000).fadeIn(1000, function(){
      $(this).css("color", "white");
    });
  });
});
