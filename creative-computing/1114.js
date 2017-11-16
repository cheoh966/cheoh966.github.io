document.addEventListener("mousemove",handleMouseMove)
// the entire page//  //type of event,name of function

function handleMouseMove(evt) {

	var x = (evt.pageX / window.innerWidth) * 255
	var y = (evt.pageY / window.innerHeight) * 255
	//innerwidth = highest position of mouse//

	x = Math.round(x)
	y = Math.round(y)
	// 만약 x가 11.4 일경우 12로 만들어줌 //

	var rgbString = "rgb(" + x + "," + y + ",255)"

	//document.body.style.backgroundColor = //"rgb(" + x + "," + y + ",255)"

	console.log(rgbString)
	document.body.style.backgroundColor = rgbString
}

