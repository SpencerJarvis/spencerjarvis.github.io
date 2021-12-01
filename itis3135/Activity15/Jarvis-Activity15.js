$(document).ready(function() {
    $.getJSON("facultyList.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#faculty").append(
                    /**Image */
                    "<img src=" + value.image + "><br>" +
                    /**Full Name */
                    "<h2>" + value.full_name + "</h2>"+
                    /**Department */
                    "<h3>" + value.department + "</h3>" +
                    /**Biography */
                    "<p>" + value.bio + "</p>"
                );
            });
        });
    });
});