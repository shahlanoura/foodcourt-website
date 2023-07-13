$(Document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4

                },
                sname:{
                    required:true,
                    minlength:3
                },
                Emailadress:{
                    required:true,
                    minlength:3
                }

        }
        
    })
})