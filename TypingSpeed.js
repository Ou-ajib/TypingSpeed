/*var textarea = document.getElementById("text-typing");
var today = new Date();
var time ;
function demmarer(e){
    var today = new Date();
    time = {
        Hours :today.getHours(), Minutes :today.getMinutes() , Secondes : today.getSeconds()
    }
}
console.log(time);
function calcul_speed(e){
    var len = textarea.value.length;
    var time_now = new Date();
    var time_difference = (time.Hours - time_now.getHours()) * 3600 + (time.Minutes - time_now.getMinutes()) * 60 + (time.Secondes - time_now.getSeconds())
}*/

var x= document.querySelector(".cnt");
var h=0,min=0,s=0,ms=0;

function Time(){
    ms+=1;
    if(ms==10){
        s+=1;
        ms=0
    }
    if(s==60){
        min+=1;
        s=0
    }
    if(min==60){
        h+=1;
        min=0
    }
    x.innerHTML= h+" : "+min+" : "+s+" : "+ms;

}
var c;
function star(){
    c=setInterval(Time,100);
}

function stop(){
    clearInterval(c);
    //x.innerHTML="00:00:00:00";
}
console.log("loglog");