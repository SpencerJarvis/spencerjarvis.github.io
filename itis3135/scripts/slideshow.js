//Connects the images to their links
$("#slides a").each ((index, link) => {
    const image = new Image();
    image.src = link.href;
    
});

$(document).ready(function() {
    //Creates the array of images
    var image
    var counter = 0
    var imageArray = []
    $("#slides img").each(function() {
        image = new Image();
        image.src = $(this).attr("src");
        imageArray[counter] = image;
        counter++;
    });
    //Starts the slideshow
    counter = 0
    var nextImage;
    //Fades in and out at an interval of 500 while remaining on screen for an interval of 4000
    setInterval( function(){
        $("#slide").fadeOut(500,function() {
                counter = (counter + 1) % imageArray.length;
                nextImage = imageArray[counter];
                $("#slide").attr("src", nextImage.src).fadeIn(500);
            }
        );
    }, 4000);

});



