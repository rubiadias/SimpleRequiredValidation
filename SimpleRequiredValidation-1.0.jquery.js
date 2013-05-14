(function($){

	//Attach this new method to jQuery
 	$.fn.extend({


 		SimpleRequiredValidation: function() {

    		return this.each(function() {

				$('input,textarea,select').bind('blur',function(){

					var $value = $.trim($(this).val());

					if($(this).attr('required') && $value==''){

						$(this).css('border','1px solid red').focus();

						if($('small#warningMessage').length <= 0)
							$('<small id="warningMessage">Preencha o campo abaixo</small>').insertAfter(this);

					}else{

						$(this).css('border','1px solid #ccc');

						$('small#warningMessage').remove();
					}
				});



    		});
    	}
	});

})(jQuery);