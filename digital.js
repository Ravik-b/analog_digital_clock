

 setInterval(function(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

     document.getElementById("hours").innerHTML=hours;
 
  
    // document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;

    if(hours>=12)
    {
        document.getElementById("ampm").innerHTML="PM";
    }
    else
    {
        document.getElementById("ampm").innerHTML="AM";
    }
    


 },1000)
 var get =document.getElementById("sun");
 var gets =document.getElementById('ac');
 var acs =document.getElementById('acs');
  var hours=document.getElementById('hours')
  var minutes=document.getElementById("minutes")
  var seconds=document.getElementById("seconds")
  var ampm=document.getElementById("ampm")
 var body =document.querySelector('body');

 get.addEventListener('click' ,function(){
   
   get.classList.toggle('fa-moon')

    if(get.classList.toggle('fa-sun'))
  {
     body.style.background='white'
     get.style.color='black';
     gets.style.color='black';
     acs.style.color='black';
   }
  else{
   body.style.background='black';
   get.style.color='white';
   gets.style.color='white';
   acs.style.color='white';
   hours.style.border ='2px solid white';
   minutes.style.border ='2px solid white';
   seconds.style.border ='2px solid white';
   ampm.style.border ='2px solid white';

  }
   

 })

