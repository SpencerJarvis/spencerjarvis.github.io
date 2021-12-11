$(document).ready(function() {
    $.getJSON("midwood.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#midwood").append(
                    "<h2>" + value.title +"</h2>"
                );
            });
        });
    });
});