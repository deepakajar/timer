var a=1;
function clockstart(){
    clockcount=setInterval(startdisplay,1000);
}
function startdisplay()
{
    document.getElementById('timercount').innerHTML=a;
    a++;
    

}
function clockstop(){
    clearInterval(clockcount);
    alert('stopped');
}
function clockreset(){
    a=0;
    document.getElementById('timercount').innerHTML=a;
    clearInterval(clockcount);
}