/*function time() {
	var now = new Date()
	var hour = now.getHours()

	if (hour >= 1 && hour < 2) {
		document.getElementById('base').style.display = 'rotate';
		document.body.style.backgroundColor = "#262626";*/


var div = document.getElementById('div');

function move() {
    var time = Math.round((new Date()).getTime() / 10) % 200;
    
    p_hour.style.left = time + 'px';
    
    animation = requestAnimationFrame(move);
}

window.requestAnimationFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function(callback, element){
              return window.setTimeout(callback, 1000 / 60);
          };
})();

window.cancelRequestAnimationFrame = (function(){
  return  window.cancelRequestAnimationFrame       || 
          window.webkitCancelRequestAnimationFrame || 
          window.mozCancelRequestAnimationFrame    || 
          window.oCancelRequestAnimationFrame      || 
          window.mscancelRequestAnimationFrame     || 
          window.clearTimeout
})();

var animation;

document.getElementById("start").onclick = function() {
    animation = requestAnimationFrame(move);
}

document.getElementById("stop").onclick = function() {
    cancelRequestAnimationFrame(animation);
}