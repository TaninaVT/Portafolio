$(function(){
  $("a").click(function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var guardaHash = this.hash;

      $('html, body').animate({
        scrollTop: $(guardaHash).offset().top;
      }, 800, function(){
        window.location.hash = guardaHash;
      });
    }
  });
  // $('#example').tooltip(options);
  $('#example').tooltip({ boundary: 'window' })

  $('.example-popover').popover({
      container: 'body'
    });
  //
  // $('[data-toggle="tooltip"]').tooltip();
  // $('[data-toggle="popover"]').popover();
});
