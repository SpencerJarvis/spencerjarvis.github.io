$(document).ready(function() {
    $.getJSON("chua.json", function(key, value) {
        $("#speaker").append(
            "<h1>" + value.title + "</h1>" +
            "<h2>" + value.month + "</h2>" +
            "<h3>" + value.speaker + "</h3>" +
            "<img src=" + value.image + ">" +
            "<p>" + value.text + "</p>"
        );
    });
});