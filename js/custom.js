$(window).load(function() {
  $("body").addClass("active");
  $('#mmenu').mmenu({
    navbar: {
      title: 'Menu'
    },
    searchfield: {
      add: false
    },
    extensions: ["position-right"],
    navbars: [{
      position: 'top',
        content: [
          'prev',
          'title',
          'close'
        ]
    }]
  });
});
