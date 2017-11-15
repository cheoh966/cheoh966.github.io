document.addEventListener("keypress", handleKeyPress)

function handleKeyPress(evt) {
	var key = evt.key
	console.log(key)

	var totalHeight = document.bodyoffsetHeight

	var percentaage = key / 9
	console.log(percentage)

	window.scrollTo(0,key * 20)
}