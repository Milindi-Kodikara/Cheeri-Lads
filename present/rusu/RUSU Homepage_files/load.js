$(function () {
    if (typeof jQuery.ui !== 'undefined'){
        $('.datetime-picker').datetimepicker({
            hourGrid: 6,
            minuteGrid: 10,
            timeFormat: 'hh:mm TT',
            dateFormat: 'yy-mm-dd',
            ampm: true,
            changeMonth: true,
            changeYear: true,
            yearRange: "-100:+20"
        });

        $('.date-picker').datepicker({
            hourGrid: 6,
            minuteGrid: 10,
            dateFormat: 'yy-mm-dd',
            changeMonth: true,
            changeYear: true,
            yearRange: "-100:+20"
        });
       
        if ($.validator != undefined) {
            $.validator.addMethod('date', function (value, element) {
                if (this.optional(element)) {
                    return true;
                }
                var valid = true;
                try {
                    $.datepicker.parseDate('yy-mm-dd', value);
                }
                catch (err) {
                    valid = false;
                }
                return valid;
            });
        }
    }
    
    
});
