$(document).ready(function(){
    $('#bar1').barfiller({barColor: "#f62746",duration: 2000});
    $('#bar2').barfiller({barColor: "#f62746",duration: 2000});
    $('#bar3').barfiller({barColor: "#f62746",duration: 2000});
    $('#bar4').barfiller({barColor: "#f62746",duration: 2000});
    
    $(".mobile-button").click(function(){
        $(".mobile-menu-overlay").toggle(1000)
    })
    
    $(".close-menu").click(function(){
        $(".mobile-menu-overlay").toggle(1000)
    });
    
 
});
