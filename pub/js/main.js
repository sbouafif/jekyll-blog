$(function() {
  try{Typekit.load();}catch(e){}
});

var typekitBadge = 0;

var removeTypekitBadge = setInterval(function() {
  if($('img.typekit-badge').length) {
    $('img.typekit-badge').css({display: 'none'});
    $('img.typekit-badge').remove();
    typekitBadge = 1;
    clearInterval(removeTypekitBadge);
  }
}, 100);