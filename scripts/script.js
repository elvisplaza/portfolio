const app = {}

app.init= ()=>{
        app.dissappearGlasses();
        app.formValidation();
        app.smoothScroll();
        
}
// dissappearing glasses
app.dissappearGlasses = ()=>{
        $(".hero-content__title").hover(()=>{
                $(".header").css("background-image","url('assets/elvis-without-glasses.jpg')")
        }, ()=>{
                $(".header").css("background-image","url('assets/elvis-with-glasses.jpg')")     
        })
}

app.addLinesToX=()=>{
        let n = 65

                for(let i = 0; i<=10; i++){
                        setTimeout(() => {
                                $(".line-animation__button").append(`<p style="left:${n}px" class="line-animation__line--x ">|</p>`)
                                n = n + 30;
                        }, i * 150);
                        if(i === 10){
                                setTimeout(() => {
                                        $(".portfolio__computer-screen--project")[0].play()
                                }, 2000);
                        }
                }
}
//fomr validation
app.formValidation = ()=>{
        $('#contact-me__form').submit((event)=>{
                const name = $("#name").val();
                const email = $("#email").val();
                const message = $("#message").val();

                $(".error").remove()

                if(name.length < 1){
                        $('#name').after('<span class="error">This field is required</span>')
                        event.preventDefault();
                } else {
                  let regex = /[^\D]/
                  let validName = regex.test(name);
                  if(validName === true){
                      $('#name').after('<span class="error">Enter a valid name</span>');
                      event.preventDefault();
                  }
                }
                if(message.length < 30){
                        $('#message').after('<span class="error">This field requires more than 30 characters</span>')
                        event.preventDefault();
                }
                if(email.length < 1){
                        $('#email').after('<span class="error">This field is required</span>')
                        event.preventDefault();
                }else {
                        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        var validEmail = regEx.test(email);
                        if (!validEmail) {
                                $('#email').after('<span class="error">Enter a valid email</span>');
                                event.preventDefault();

                        }
                }
        })

}

// smooth ready
app.smoothScroll = ()=>{
    $("a").smoothScroll();
  }


$(function(){
        app.init();
        // $(".line-animation__button").on('click',()=>{
        //         let n = -32;
        //         let y = 59;
        //         for(let i = 0; i<=20; i++){
        //                 setTimeout(() => {
        //                         window.scrollBy({ 
        //                                 top: y, // could be negative value
        //                                 left: 0, 
        //                                 behavior: 'smooth' 
        //                         });
        //                         $(".line-animation__button").append(`<p style="bottom:${n}px" class="line-animation__line">|</p>`)
        //                         n = n - 30;
        //                         y = y + .5;
        //                         if(i == 20){
        //                                 app.addLinesToX();
        //                         }else{
        //                         }
        //                 }, i * 150);    
        //         }
        // })


})