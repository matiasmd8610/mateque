$(document).ready(function() {
    $('#contact-form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Por favor ingrese su nombre'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingrese su e-mail'
                    },
                    emailAddress: {
                        message: 'Por favor ingrese un e-mail válido'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 1500,
                        message:'Por favor ingrese al menos 10 caracteres'
                    },
                    notEmpty: {
                        message: 'Por favor ingrese su consulta'
                    }
                  }
                }
            }
        }).on('success.form.bv', function(e) {
            e.preventDefault();
            var $form = $(e.target);
            $.post($form.attr('action'), $form.serialize(), function(result) {
	          $("#message").html(result.comment).addClass('show');
		        $("#contact-form").find("input[type=text], input[type=email], textarea").val("");
            }, 'json');
        });
});
