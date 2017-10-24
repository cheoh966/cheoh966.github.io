function updateTime() {
	
	//Create&pick a place on the page for the time
	var clockHolder = document.getElementById("clock")

	//Get the current time
	var now = new Date()
	var seconds = now.getSeconds()
	now = now.toTimeString()
	/* OR
	var now = new Date().toTimeString() */

	console.log(now)
	console.log(seconds)

	//Figure out the color
	if (seconds < 20) {
		// red 
		clockHolder.style.color = "red"
	}	else if (seconds < 40){
		//green
		clockHolder.style.color = "green"
	}	else {
		//blue
		clockHolder.style.color = "blue"
	}

	//Put the current time on the page
	//element=clockholder value=now
	clockHolder.innerHTML = now
}
	
//function,how often.referencing
setInterval(updateTime,1000)




