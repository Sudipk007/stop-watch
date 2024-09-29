const p = document.getElementById("display");
const b1 =document.getElementById("b1");
const b2 =document.getElementById("b2");
const b3 =document.getElementById("b3");
let elapsedtime=0;
let timer;
let Starttime = 0;
let isRunning =false;
let hour;
let minute;
let second;
let milisecond;

function start(){
    if(!isRunning){
       Starttime=Date.now()-elapsedtime;
      timer= setInterval(update,10);
      isRunning=true;
     
      
    }
       
    
    
    

}
function pause(){
    clearInterval(timer);
    isRunning=false;

}

function reset(){
    display.textContent="00:00:00:00";
    isRunning=false;

}

function update(){
    const currentTime=Date.now();
    elapsedtime=currentTime-Starttime;
    let hour= Math.floor(elapsedtime/(1000*60*60));
    let minute =Math.floor(elapsedtime/(1000*60)%60);
    let second = Math.floor(elapsedtime/1000%60);
    let milisecond =Math.floor(elapsedtime%1000/10);

    hour= String(hour).padStart(2,"0");
    minute= String(minute).padStart(2,"0");
    second= String(second).padStart(2,"0");
    milisecond= String(milisecond).padStart(2,"0");


    display.textContent=`${hour}:${minute}:${second}:${milisecond}`;

   

    

}
