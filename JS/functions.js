$(document).ready(function(){
    var navOffset = jQuery("#MenueHolder").offset().top;
    alert(navOffset);

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        //console.log(wScroll)
    
        $('#pictureWindowOne').css({
            'transform' : 'translate(0px,-' + wScroll/75 +'%)'
        });
    
        $('#pictureWindowTwo').css({
            'transform' : 'translate(0px,-' + wScroll/75 +'%)'
        });
    
        $('#pictureWindowThree').css({
            'transform' : 'translate(0px,-' + wScroll/75 +'%)'
        });


        if (wScroll >= navOffset){

            jQuery("#MenueHolder").addclass()

        }else{

        }
    
    });


});