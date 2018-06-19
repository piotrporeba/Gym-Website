var obj, w, moveRight;

function laska()
{
  var pos = parseInt( obj.style.left, 10 );

  ( moveRight ) ? pos++ : pos-- ;
  obj.style.left = pos + "px";

  if( pos > (w + 70) )
  {
    obj.style.background="url(images/laska.jpg)";
    moveRight = false;
  }

  if( pos < -140 )
  {
   obj.style.background="url(images/laska.jpg)";
   moveRight = true;
  }
  setTimeout( laska , 10 );
}
function init()
{
  var preload=new Image();
  preload.src="images/laska.jpg";

  obj = document.getElementById("laska");
  w = document.body.clientWidth;
  moveRight = true;

  obj.style.position="absolute";
  obj.style.left="-120px";

  laska();

}
onload=init;