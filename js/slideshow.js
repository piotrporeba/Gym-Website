var i, imgs, slideshow;

function show()
{
  slideshow.src = imgs[i] ;
  (i === (imgs.length -1) ) ? i=0 : i++ ;
  setTimeout( show, 1000 );
}

function initialise()
{
  slideshow = document.getElementById("slideshow");

  imgs = [ "images/gym1.jpg", "images/gym2.jpg", "images/gym3.jpg", "images/gym4.jpg", "images/gym5.jpg", "images/gym6.jpg", "images/gym7.jpg"] ;

  var preload= new Array();
  for( i=0; i< imgs.length; i++ )
  {
    preload[ i ] = new Image();
    preload[ i ].src = imgs[ i ];
  }

  i=0;

  show();
}
onload=initialise;

