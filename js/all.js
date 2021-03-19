function menuToggle(){
    var x = document.getElementById('myNavtoggle');
    if(x.className === 'navtoggle'){
        x.className += ' responsive';
    }else{
        x.className = 'navtoggle';
    }
}

window.onscroll = function(){slideUp();}

function slideUp(){
    if(document.body.scrollTop > 900 || document.documentElement.scrollTop > 900){
    document.getElementById("project_side_bar").className = "slideUp";
        if(document.body.scrollTop > 900 && document.body.scrollTop < 1500){
            
        }else{
            document.getElementById("color1").className = "caption grey";
        }
    }else{
        document.getElementById("project_side_bar").className = "";
    }
}

// window.onscroll = function(){accent_animation();}

// function accent_animation(){
//     if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
//     document.getElementById("accent-animation").className = "accent_animation2";
        
//     }else{
//     document.getElementById("accent-animation").className = "accent_animation";
//     }
// }

// window.onscroll = function(){emergeUp};

// function emergeUp(){
//     if(document.animate.)
// }

//Mouse

document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById('mouse');

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }

    let delay = 6,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

        mouseCircle.style.top = revisedMousePosY + 'px';
        mouseCircle.style.left = revisedMousePosX + 'px';
    }
    delayMouseFollow();
});


// Switch hover

function switchhover(){
    var x = document.getElementsByClassName('switch');
    if ( x == 'switch'){
        x.className = 'switch-accent caption'
    }else{
        x.className = 'switch caption'
    }
}

switchhover.addEventListener('mouseenter');

