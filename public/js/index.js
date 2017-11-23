//Add code style to article code items
var code = $("code");
code.each(function(i, el) {
  el.className += " prettyprint linenums";
})

//Progress Bar
$(document).ready(function() {

  var winHeight = $(window).height();
  var docHeight = $(document).height();
  var progressBar = $('progress');
  var max;
  var value;

  /* Set the max scrollable area */
  max = docHeight - winHeight;
  progressBar.attr('max', max);

  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
  });

});

//Toggle menu
$('.nav-toggle').on('click', function() {
  $(this).toggleClass("nav-toggle--active");
  $($(this).find(".side-nav")[0]).toggleClass("side-nav--active");
});

//Highlight in the side menu the current file
var url = window.location.href;
var file = url.split(/\//g)[5].slice(1);
$("#" + file).find("a").addClass("link--active")
