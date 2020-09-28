var start = document.getElementById("start");
var pause = document.getElementById("pause");
var reset = document.getElementById("reset");

var day = document.getElementById("day");
var hrs = document.getElementById("hrs");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

var startTimer = null;

start.addEventListener("click", ()=>{
	console.log("started");
	function startInterval(){
		startTimer=setInterval(function(){timer();},1000);
	}

	startInterval();
})


pause.addEventListener("click", ()=>{
	console.log("paused");
	pauseTimer();
})

reset.addEventListener("click", ()=>{
	console.log("reset");
	stopTimer();
})

function timer(){
		if (day.value==0 && hrs.value==0 && min.value==0 && sec.value==0){alert("done"); stopTimer();}
	if (sec.value>0) {sec.value--;}
	else if (min.value>0) {min.value--;sec.value=59;}
	else if (hrs.value>0) {hrs.value--;min.value=60;}
	else if (day.value>0) {day.value--;hrs.value=24;}
}

function stopTimer(){
	day.value = 0;
	hrs.value = 0;
	min.value = 0;
	sec.value = 0;
	clearInterval(startTimer);
}