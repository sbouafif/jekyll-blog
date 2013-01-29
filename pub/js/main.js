/*var typekitBadge = 0;

var removeTypekitBadge = setInterval(function() {
  if($('img.typekit-badge').length) {
    $('img.typekit-badge').css({display: 'none'});
    $('img.typekit-badge').remove();
    typekitBadge = 1;
    clearInterval(removeTypekitBadge);
  }
  console.log('interval');
}, 100);

try{Typekit.load();}catch(e){}
*/


$(function() {
  $('.posts .main-picture').click(function(e) {
    e.preventDefault();
    var cover = $(this);
    var article = $('.article');
    cover.addClass('loading');
    article.load($(this).children('h2').children('a').attr('href')+' article', function() {
      $('.article').animate({
        height: 'toggle'
      }, 800, function() {
        cover.removeClass('loading').addClass('loaded');
        // TESTING
        $('body').css({ 'background-color': 'red' });
      });
    });
  });
});