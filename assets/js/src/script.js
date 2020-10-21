
$(document).scroll(function(){
    var cardPic = $(".picture");
    var cardDesc = $(".desc");
    var skillList = $(".skillList");
    var skill = $(".skill");
    var y = $(document).scrollTop();
    
    console.log(y)
    if (y <= 350) {
        cardPic.hide().css("width", 0);
        cardDesc.hide();
        skillList.hide();
        skill.hide();
    } else if (y > 351) {
        cardPic.slideDown(500);

        cardPic.animate ({
            width:"20rem"
        }).stop();
        cardDesc.slideDown(500);
        
    }

        

        // cardPic.slideDown();
        // cardPic.animate({
        //     width:"20rem"
        // }, 1000).stop().delay(500);

});









//   $(document).scroll(function(){
//     var y = $(this).scrollTop();
//     var boxWidth = $(".desc").width();
//     if (y > 200) {
//         $(".desc").animate ({
//             width: boxWidth
//         });
//     } else {
//         $(".desc").animate ({
//             width: 10
//         });
//     }

// });
