$(document).ready(function() 
{
    // preload the image for each link
    $("#image_list a").each(function() 
    {
        var newImage = new Image();
        newImage.src = $(this).attr("href");
    });
    
    // set up event handlers for each link 
    $("#image_list a").click(function(evt) 
    {
        //get the image URL and caption for each image to animate the caption
        imageURL = $(this).attr("href");
        $("#image").fadeOut(3000, function() 
        {
            $("#image").attr("src", imageURL).fadeIn(3000);
        });
            
        caption = $(this).attr("title");
        $("#caption").fadeOut(3000, function() 
        {
            $("#caption").text(caption).fadeIn(3000, function() 
            {
                $("#caption").animate({fontSize: "2.0em"}, 3000);
            });
        });
                    
        // cancel the default action of each link
        evt.preventDefault();
    });
    
    // move the focus to first link
    $("li:first-child a").focus();
}); // end ready
    