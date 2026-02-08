/* making it countdown */

let min = document.getElementById("div1");

let sec = document.getElementById("div2");

let milliSec = document.getElementById("div3");

let start = document.getElementById("start");

let stop = document.getElementById("stop");

let reset = document.getElementById("reset");

let interval;

start.addEventListener("click", function(){
  interval =  setInterval(() => {
       let number = Number(milliSec.innerHTML);
       milliSec.innerHTML = number + 1; 

           
if (number + 1 === 10) {
    let number2 = Number(sec.innerHTML);
    sec.innerHTML = number2 + 1; 

    milliSec.innerHTML = 0;
    
if (number2 + 1 === 60) {
    let number3 = Number(min.innerHTML);
    min.innerHTML = number3 + 1; 

    sec.innerHTML = 0;
}
}
    }, 100);

})

stop.addEventListener("click", function(){
clearInterval(interval) 
})

reset.addEventListener("click", function(){

    clearInterval(interval)
    sec.innerHTML = "00";
    milliSec.innerHTML = "00";
    min.innerHTML = "00";
})