(function () {
    $(document).ready(function () {
        var forms = $('form#feedback_form,form#contact_form');
        if (forms.length) {
            forms.append('<input type="hidden" name="honeypot" id="honeypot" />');
            forms.find('button,input[type="submit"]').click(function(){
                $('#honeypot').val(1);
            });
        }
        $('form#registration_form,form#login_form,form#forgot_form').find(':submit').prop('disabled',false);

        $("#subscribed").change(function (evt) {
            if (this.checked) {
                $('.subscribed').val("1");
            } else {
                $('.subscribed').val("0");
            }
        }).trigger('change');
    });
})();


