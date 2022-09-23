

function getTime (){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML='PM';
    }
    else{
        session.innerHTML='AM';
    }

    if(hrs >= 5 || hrs <= 11 && session=='AM'){
        document.getElementById("lady").src = "Component 30 – 1@2x.png";
        document.getElementById("grab").innerText = "GRAB SOME HEALTHY BREAKFAST !!!";
        document.getElementById("good2").innerText = "GOOD MORNING !! WAKE UP !!";
    }
    
    if( hrs >= 12 || hrs <= 4 && session == 'PM'){
        document.getElementById("lady").src = "Group 5183.svg";
        document.getElementById("grab").innerText = "LET'S HAVE SOME LUNCH !!";
        document.getElementById("good2").innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    }
    
    if( hrs >= 4 || hrs <= 7 && session=='PM'){
        document.getElementById("lady").src = "coffemug.png";
        document.getElementById("grab").innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById("good2").innerText = "GOOD EVENING !!";
    }
    
    if( hrs >= 8 || hrs<= 11 && session=='PM'){
        document.getElementById("lady").src = "bed 5194.svg";
        document.getElementById("grab").innerText = "CLOSE YOUR EYES AND GO TO SLEEP"; 
        document.getElementById("good2").innerText =  "GOOD NIGHT !!";
    }
    
    if( hrs >= 00 || hrs <= 5 && session == 'AM'){
        document.getElementById("lady").src = "bed 5194.svg";
        document.getElementById("grab").innerText = "CLOSE YOUR EYES AND GO TO SLEEP"; 
        document.getElementById("good2").innerText =  "GOOD NIGHT !!";
    }
    
    
    

    if(hrs > 12){
        hrs = hrs -12;
    }

    if (hrs < 10){
        hrs = '0' + hrs;
    }


    if (min < 10){
        min = '0' + min ;
    }


    if (sec < 10){
        sec = '0' + sec ;
    }
    

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(getTime , 10);

function clicked(){
document.getElementById('lo1').innerText ="Wake Up Time:"+" "+f0.options[f0.selectedIndex].text;
document.getElementById('lo2').innerText ="Lunch Time :"+" "+f1.options[f1.selectedIndex].text;
document.getElementById('lo3').innerText ="Nap Time :"+" "+f2.options[f2.selectedIndex].text;
document.getElementById('lo4').innerText ="Night Time :"+" "+f3.options[f3.selectedIndex].text;    
}













