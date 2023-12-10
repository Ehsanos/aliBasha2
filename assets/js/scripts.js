$('#owl-carousel').owlCarousel({
    rtl: true,
     dots:false,
        responsiveClass:true,
     responsive:{
        0:{
            items:1,
        },
        400:{
            items:1,
        },
          600:{
            items:1,
           
        },
          700:{
            items:1,
           
        },
         
         1000:{
            items:2,
           
        },
        1200:{
            items:3,
          
            loop:true
        }
    }


});
$('#owl-carousel-1').owlCarousel({
    rtl: true,
     dots:false,
        responsiveClass:true,
     responsive:{
        0:{
            items:1,
        },
        400:{
            items:1,
        },
          600:{
            items:1,
           
        },
          700:{
            items:1,
           
        },
         
         1000:{
            items:2,
           
        },
        1200:{
            items:3,
          
            loop:true
        }
    }

});
$('#owl-carousel-2').owlCarousel({
    rtl: true,
     dots:false,
        responsiveClass:true,
     responsive:{
        0:{
            items:1,
        },
        400:{
            items:1,
        },
          600:{
            items:1,
           
        },
          700:{
            items:1,
           
        },
         
         1000:{
            items:2,
           
        },
        1200:{
            items:3,
          
            loop:true
        }
    }

});


$('#owl-carousel-3').owlCarousel({
    rtl: true,
    dots:false,
    items:7,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
     responsiveClass:true,
     responsive:{
        0:{
            items:1,
        },
        400:{
            items:3,
        },
          600:{
            items:5,
           
        },
        1000:{
            items:7,
          
            loop:true
        }
    }


});
$('#owl-carousel-5').owlCarousel({
    rtl: true,
    dots:false,

    items:4,
    autoplay:true,
    autoplayTimeout:3000,
      responsiveClass:true,
     responsive:{
        0:{
            items:1,
            
        },
        400:{
            items:2,
            nav:false
        },
          600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            
            loop:false
        }
    }



});


$('#owl-carousel-4').owlCarousel({
    rtl: true,
    dots:false,
     responsiveClass:true,
     responsive:{
        0:{
            items:2,
        },
        400:{
            items:3,
        },
          600:{
            items:4,
           
        },
          700:{
            items:5,
           
        },
         
        
       
    }
            

});
var owl = $('#owl-carousel-4');
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
$('#owl-carousel-8').owlCarousel({
    rtl: true,
    dots:false,
    items:6,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
     responsiveClass:true,
     responsive:{
        0:{
            items:1,
        },
        400:{
            items:3,
        },
          600:{
            items:6,
           
        },
        1000:{
            items:6,
          
            loop:false
        }
    }


});
$('#owl-carousel-10').owlCarousel({
    rtl: true,
    dots:false,
    nav:false,
    items:3,
    autoplay:true,
    autoplayTimeout:3000,
      responsiveClass:true,
     responsive:{
        0:{
            items:1,
           
        },
        400:{
            items:2,
           
        },
          600:{
            items:3,
          
        },
        1000:{
            items:3,
            
            loop:false
        }
    }



});

var chat = document.getElementById('frame');
const show=document.getElementById('chat-btn');
const close=document.getElementById('close-chat');
show.onclick=function(){
      chat.style.display= 'block';
    console.log("treeee");
}

close.onclick=function(){
    chat.style.display='none'
    console.log("freee");
}






