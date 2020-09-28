var start = document.getElementById("start");
var startscn = document.getElementById("startscn");
var next = document.getElementById("next");	
var quiz = document.getElementById("quizING");
let data = null;
var c=0;
var a=[];

start.addEventListener("click", ()=>{
	console.log("started");
	startscn.style.display="none";
	quizING.style.display="block";
	next.style.display="block";
	document.getElementsByClassName("startscreen")[0].style.display="none";
	quizzing();
})

next.addEventListener("click", ()=>{
	if (c<data.questions.length+1) {
	var ele = document.getElementsByName('radio'); 
              //console.log(ele.length);
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked){
    			   console.log(ele[i].value);
                 a[c-1]=ele[i].value;
            	} 
        	}
        	if (c==data.questions.length) {c=c+5; console.log("end"); lstrg(); window.location.href="result.html";}
        	if (c==data.questions.length-1) {next.innerHTML="finish";}	
	quizzing();
    }
});

function quizzing() {
	//console.log(data.questions.length);
	if(c<data.questions.length){
	//	 console.log(data);
		 quizING.removeChild(quizING.firstChild); 
		 quizING.appendChild(document.createElement("div"));
		 var element=
				`<div class="card">
		          <div class="question">
		            <div class="qstlabel">${c+1}.</div>
		            <div class="qstmain">${data.questions[c].question}</div>
		          </div>
		          <div class="anscontainer" id="Ans">
		            <b>
		              <label class="container">${data.questions[c].answers[0]}
		                <input type="radio" checked="checked" name="radio" value="1">
		                <span class="checkmark"></span>
		              </label>
		              <label class="container">${data.questions[c].answers[1]}
		                <input type="radio" name="radio" value="2">
		                <span class="checkmark"></span>
		              </label>
		              <label class="container">${data.questions[c].answers[2]}
		                <input type="radio" name="radio" value="3">
		                <span class="checkmark"></span>
		              </label>
		              <label class="container">${data.questions[c].answers[3]}
		                <input type="radio" name="radio" value="4">
		                <span class="checkmark"></span>
		              </label>
		            </b>
		          </div>
		        </div>`
	  		
		 quizING.firstChild.innerHTML = element;
		 c++;
	}
}

fetch("https://raw.githubusercontent.com/AbhiramKrishna88/10hrs10projs/master/Quiz-Appetite/questions.json")
.then(res => res.json())
.then(jsonData => {
	data = jsonData;
})
.catch(err => console.log(err));

function lstrg() {
	console.log(JSON.stringify(a))
	localStorage.setItem("ans_array", JSON.stringify(a)); 
	console.log("saved");
}