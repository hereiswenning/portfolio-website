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
            document.getElementById("color1").className = "accent";
        }else{
            document.getElementById("color1").className = "caption";
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


