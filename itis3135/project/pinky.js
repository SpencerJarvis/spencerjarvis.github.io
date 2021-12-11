$(document).ready(function() {
    $.getJSON("pinky.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#pinky").append(
                    value.title
                );
            });
        });
    });
});