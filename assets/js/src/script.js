
// $(document).scroll(function(){
//     var card = $(".card");
//     var cardPic = $(".picture");
//     var cardDesc = $(".desc");
//     var skillList = $(".formationDesc");
//     var skill = $(".skill");
//     var y = $(document).scrollTop();
//     var navbar = document.getElementById("navbar");
   

//     if (y > 351) {
//         card.fadeIn(500);
//     }
//     if (y > 800) {
//         skillList.fadeIn(500);
//     }


        // if (y < 600) {
        //     navbar.removeClass("sticky");
        // }


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
                // width:"200px"
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



        // if(y > 350) {
        //     card.animate({
        //         width: "90%"
        //     },1000);
        // };
        // if( y > 800) {
        //     skillList.animate({
        //         width:"100vw"
        //     },500, function(){
        //         skill.slideDown(500);
        //     });   
        // }





//         if(y > 350) {
//             card.animate({
//                 width: "90%"
//             },1000);
//             skillList.animate({
//                 width:"100vw"
//             },500, function(){
//                 skill.slideDown(500);
//             });

//         };



// });





// $(window).onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.addClass("sticky")
//   } else {
//     navbar.removeClass("sticky");
//   }
// }



// var num = 600; //number of pixels before modifying styles

// $(window).bind('scroll', function stickybar () {
//     if ($(window).scrollTop() > num) {
//         $('#navbar').addClass('sticky');
//     } else {
//         $('#navbar').removeClass('sticky');
//     }
// });


// $('.toggler button').on('click', function () {
//     $(".navList").slideToggle(500);

// });






$(".toggler").click(function() {
    $(this).next('ul').slideToggle();
});



// $(document).ready(function(){
//     $('.gallery').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//       });
//       $('.SkillList').slick();


// });


// $(document).ready(function(){
//     $('.gallery').slick({
//         arrow:false,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots:false,
//         infinite:true
//     });


// });



$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

// $(function(){   
//     $('.formationDesc h3').on('click', function() {	
//         $(this).nextUntil('div').slideToggle(500);
//         $(this).siblings('div').nextUntil('div').slideUp(500);
//     });

// });

// $('h2>div').hide();
// $('h2').on('click', function(){
// 	$(this).next('div').slideDown();
// 	$(this).siblings('h2').next().slideUp();
// });



$(function(){


});






$('#formations h3 ~ div').hide();
$('#formations h3').on('click', function(){
	$(this).next('div').slideToggle();
	$(this).siblings('h3').next().slideUp();
});


