$(document).ready(()=>{
    new WOW().init();
    $(window).scroll(()=>{
        
        if(Math.round($(window).scrollTop())>=300){
            $('.scroll-top').css({'display':'block'});            
        }
    });

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
    });
    
    $(".needs-validation").on("submit",function(e){
     
    e.preventDefault(); 
    e.stopPropagation();
        
           this.classList.add('was-validated');
           if(this.checkValidity()===true){
               
               formData = {};
               formData.afn = $('#afn').val();
               formData.aln = $('#aln').val();
               formData.aem = $('#aem').val();
               formData.altem = $("#altem").val();
               formData.aph = $('#aph').val();
               formData.acountry = $('#acountry').val();
               formData.atitle = $('#atitle').val();
               formData.atype = $('#atype').val();
               formData.mfiles = $('#mfiles')[0].files;
               

            //    $.ajax({
            //        type: "POST",
            //        url: "https://jsonplaceholder.typicode.com/posts",
            //        data: formData,
            //        dataType: 'json',
            //        success: (data) => { console.log(data) }
            //        })

               fetch("https://jsonplaceholder.typicode.com/posts",{
                  method:'post',
                  body:formData
               }).catch(console.error);    
           }   
           mfiles = $('#mfiles')[0].files;
           console.log(mfiles);
    });

   
    
})