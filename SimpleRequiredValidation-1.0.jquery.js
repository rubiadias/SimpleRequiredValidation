(function($){

    $.fn.extend({

        SimpleRequiredValidation: function(options) {

         var settings = $.extend({
              "font_color": "red",
              "border_color": "red",
              'message': 'Preencha o campo abaixo'
          }, options);

            return this.each(function() {

                $('input,textarea,select').bind('blur',function(){

                    var $value = $.trim($(this).val());

                    if($(this).attr('required') && $value==''){

                        $(this).css('border','1px solid '+settings.font_color).focus();

                        if($('small#warningMessage').length <= 0)
                            $('<small style="color:'+settings.font_color+';" id="warningMessage">'+settings.message+'</small>').insertAfter(this);

                    }else{

                        $(this).reset();

                        $('small#warningMessage').remove();
                    }
                });



            });
        }
    });

})(jQuery);