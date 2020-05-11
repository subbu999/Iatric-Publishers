$(document).ready(()=>{
    new WOW().init();
    $(window).scroll(()=>{
        
        if(Math.round($(window).scrollTop())>=300){
            $('.scroll-top').css({'display':'block'}).fadeIn(800);
        }
    })
    $('.scroll-top a').on("click",function(e){
       if(this.hash !== ''){
           const hash = this.hash;
           e.preventDefault();
           $('html, body').animate({
              scrollTop:$(hash).offset().top
           },800,function(){
               window.location.hash = hash;
           });
       }
    })
})