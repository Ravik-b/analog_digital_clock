  
var a =document.getElementById("h");
var b =document.getElementById("m");
var c =document.getElementById("s");
  setInterval(function(){

           let d=new Date();
            hours=d.getHours();
            minutes=d.getMinutes();
         seconds=d.getSeconds();
       

           hrotation=30*hours +minutes/2;
           mrotation = 6*minutes;
           srotation =6*seconds;
        //    console.log(d);

       
        b.style.transform =`rotate(${mrotation}deg)`;
        c.style.transform =`rotate(${srotation}deg)`;
        a.style.transform =`rotate(${hrotation}deg)`;


  },1000)

  var get =document.getElementById("sun");
  var gets =document.getElementById('ac');
  var acs =document.getElementById('acs');
  var body =document.querySelector('body');
  console.log(get);
  console.log(body);
  console.log(gets);

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

   }
    

  })
