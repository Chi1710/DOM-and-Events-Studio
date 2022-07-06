// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",function(){


    let takeOffButton = document.getElementById("takeoff");
    let landingButton = document.getElementById("landing");
    let status = document.getElementById('flightStatus');
    let background = document.getElementById('shuttleBackground');
    let height = document.getElementById('spaceShuttleHeight')
    let abort = document.getElementById('missionAbort');

    let up = document.getElementById('up');
    let down = document.getElementById('down');
    let right = document.getElementById('right');
    let left = document.getElementById('left');
    let rocket = document.getElementById('rocket');
        rocket.style.position = "absolute";
        rocket.style.left = "0px";
        rocket.style.bottom = "0px";
        rocket.style.top = "0px";

    
    takeOffButton.addEventListener('click', function(){
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response){
            status.innerText = "Shuttle in flight";
            background.style.background = 'blue';
            height.innerText = '10000';
        }
    })

    landingButton.addEventListener('click', function(){
        window.alert("he shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        background.style.background = "green";
        height.innerHTML = "0";

    })

    abort.addEventListener('click', function(){
        let response = window.confirm("Confirm that you want to abort the mission.");
        if(response){
            status.innerText = "Mission aborted.";
            background.style.background = "";
            height.innerText = "0";
        }
    })

    up.addEventListener('click', function(){
        let heightAmount = Number(height.innerText);
        heightAmount += 10000;
        height.innerText = heightAmount;

        movement = parseInt(rocket.style.top) - 10 + 'px';
        rocket.style.top = movement;
  

    })

    down.addEventListener('click', function(){
        let heightAmount = Number(height.innerText); 
        heightAmount -= 10000;
        height.innerText = heightAmount;

        movement = parseInt(rocket.style.top) + 10 + 'px';
        rocket.style.top = movement;
    })

    right.addEventListener('click', function(){

        let movement = parseInt(rocket.style.left) + 10 + 'px';
        rocket.style.left = movement;        
        
    })

    left.addEventListener('click', function(){
        let movement = parseInt(rocket.style.left) - 10 + "px";
            rocket.style.left = movement;
        
    })
    
})
       
 