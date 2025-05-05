$(document).ready(function() {
    // Fade in products one by one
    $(".product-card").each(function(index) {
        $(this).delay(400 * index).fadeIn(1000);
    });

    // Show newsletter popup after 2 seconds
    setTimeout(function() {
        $("#newsletter").slideDown(1000);
    }, 2000);

    // Button hover effects
    $(".btn").hover(
        function() {
            $(this).animate({ backgroundColor: "#e44d26" }, 200);
        },
        function() {
            $(this).animate({ backgroundColor: "#333" }, 200);
        }
    );

    // Navigation click effects
    $("nav a").click(function(e) {
        e.preventDefault();
        $(".product-grid").fadeOut(500).fadeIn(500);
    });

    // Add to cart animation
    $(".btn").click(function() {
        $(this).parent().animate({
            scale: 1.1
        }, 200).animate({
            scale: 1
        }, 200);
    });
});