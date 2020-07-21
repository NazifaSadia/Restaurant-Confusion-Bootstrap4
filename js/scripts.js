// $(document).ready(function(){
    //     $('[data-toggle="tooltip"]').tooltip();
    // });

    //For Reserve Table Section Radio buttons
    // $(document).button('toggle');

    // For Carousel Control (Play & Pause)
    // $(document).ready(function(){
    //     $("#mycarousel").carousel( { interval: 3000 } );
    //     $("#carousel-pause").click(function(){
    //         $("#mycarousel").carousel('pause');
    //     });
    //     $("#carousel-play").click(function(){
    //         $("#mycarousel").carousel('cycle');
    //     });
    // });

// Advance
$(document).ready(function() {
    $("#mycarousel").carousel( { interval: 3000 } );
    
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) 
        {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play'))
        {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');            
        }
    });

    $("#loginModalToggle").click( function () {
        $("#loginModal").modal('toggle');
    });

    $("#reserveModalToggle").click( function () {
        $("#reserveModal").modal('toggle');
    });
    
});