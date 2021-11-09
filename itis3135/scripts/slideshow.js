$(document).ready(function() 
{
    $("#slide_list a").each(function() 
    {
        var newImage = new Image();
        newImage.src = $(this).attr("href");
    });

    //Creates the array of images
    var image
    var counter = 0
    var imageArray = []
    $("#slide_list img").each(function() {
        image = new Image();
        image.src = $(this).attr("src");
        imageArray[counter] = image;
        counter++;
    });
    //Starts the slideshow
    counter = 0
    var nextImage;
    //Fades in and out at an interval of 500 while remaining on screen for an interval of 4000
    setInterval( function()
    {
        $("#start_slide").fadeOut(500,function() 
        {
            counter = (counter + 1) % imageArray.length;
            nextImage = imageArray[counter];
            $("#start_slide").attr("src", nextImage.src).fadeIn(500);
        });

    }, 4000);

});



