
$(document).scroll(function(){
    var card = $(".card");
    var cardPic = $(".picture");
    var cardDesc = $(".desc");
    var skillList = $(".formationDesc");
    var skill = $(".skill");
    var y = $(document).scrollTop();
    
    console.log(y)
    // if (y <= 350) {
    //     skillList.fadeOut();
    //     skill.fadeOut();
    // } else if (y > 351) {
    //     cardPic.slideDown(500, function(){
    //         cardPic.animate({
    //             width:"300px"
    //         },500, function(){
    //             cardDesc.slideDown(500), function(){};
    //         });    
    //     });
        
    // }

    //  if (y <= 350) {
    //      cardDesc.fadeOut();
    //     skill.hide();
    // } else if (y < 800) {
    //     cardPic.slideDown(500, function(){
    //         cardPic.animate({
    //             width:"200px"
    //         },1500, function(){
    //             cardDesc.slideDown(500), function(){};
    //         });    
    //     });   
    // } else {
    //         skillList.animate({
    //             width:"100vw"
    //         },500, function(){
    //             skill.slideDown(500),function(){};
    //         });    
        
    // }

        if(y > 350) {
            card.animate({
                width: "90%"
            },1000);
        }

    



});






