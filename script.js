let HourTime;
let HourHand = document.querySelector(".HourHand");
let MinHand = document.querySelector(".MinHand");
let SecHand = document.querySelector(".SecondHand");


function UpdateTime(){
    let DateData = new Date();
    HourTime = DateData.getHours()%12
    MinTime = DateData.getMinutes() 
    SecTime = DateData.getSeconds() 
    HourHand.style.transform = `rotateZ(${-90 + (HourTime*30)}deg)`
    MinHand.style.transform = `rotateZ(${-90 + (MinTime*6)}deg)`
    SecHand.style.transform = `rotateZ(${-90 + (SecTime*6)}deg)`
}

setInterval(UpdateTime,1000);
UpdateTime();
    
    
    
    


