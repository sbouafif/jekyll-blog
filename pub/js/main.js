var typekitBadge = 0;

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