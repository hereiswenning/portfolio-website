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

// document.addEventListener('DOMContentLoaded', () => {
//     let mousePosX = 0,
//         mousePosY = 0,
//         mouseCircle = document.getElementById('mouse');

//     document.onmousemove = (e) => {
//         mousePosX = e.pageX;
//         mousePosY = e.pageY;
//     }

//     let delay = 6,
//         revisedMousePosX = 0,
//         revisedMousePosY = 0;

//     function delayMouseFollow() {
//         requestAnimationFrame(delayMouseFollow);

//         revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
//         revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

//         mouseCircle.style.top = revisedMousePosY + 'px';
//         mouseCircle.style.left = revisedMousePosX + 'px';
//     }
//     delayMouseFollow();
// });


// Switch hover

// function switchhover(){
//     var x = document.getElementsByClassName('switch');
//     if ( x == 'switch'){
//         x.className = 'switch-accent caption'
//     }else{
//         x.className = 'switch caption'
//     }
// }

// switchhover.addEventListener('mouseenter');


// Scroll

(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */
  
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);

  $(window).scroll(function(event) {
  
    $(".module").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });
    
  });

  var win = $(window);
var allMods = $(".module");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});
