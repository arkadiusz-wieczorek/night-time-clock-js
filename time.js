function init(){
	updateTime();
	setInterval('updateTime()', 1000);
}

function updateTime() {
	var node = document.querySelector(".clock");
		time = new Date();
		hours = time.getHours();
		minutes = time.getMinutes();
		seconds = time.getSeconds();
		if (hours.toString().length == 1) hours = "0"+hours;
		if (minutes.toString().length == 1) minutes = "0"+minutes;
		if (seconds.toString().length == 1) seconds = "0"+seconds;

		currentTime = hours + ":" + minutes + ":" + seconds;

	node.textContent = currentTime;
}