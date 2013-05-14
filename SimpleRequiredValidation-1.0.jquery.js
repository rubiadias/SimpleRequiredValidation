(function($){

	//Attach this new method to jQuery
 	$.fn.extend({

 		//This is where you write your plugin's name
 		SimpleRequiredValidation: function() {

			//Iterate over the current set of matched elements
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

//pass jQuery to the function,
//So that we will able to use any valid Javascript variable name
//to replace "$" SIGN. But, we'll stick to $ (I like dollar sign: ) )
})(jQuery);