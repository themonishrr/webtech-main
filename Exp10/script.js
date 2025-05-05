$(document).ready(function() {
    // Filter by category
    $('.filter-btn').click(function() {
        $('.filter-btn').removeClass('btn-primary').addClass('btn-outline-primary');
        $(this).removeClass('btn-outline-primary').addClass('btn-primary');
        
        const category = $(this).data('category');
        if(category === 'all') {
            $('.product-card').show();
        } else {
            $('.product-card').hide();
            $(`.product-card[data-category="${category}"]`).show();
        }
        filterByPrice();
    });

    // Filter by price
    $('#priceRange').on('input', function() {
        const value = $(this).val();
        $('#priceValue').text(value);
        filterByPrice();
    });

    function filterByPrice() {
        const maxPrice = $('#priceRange').val();
        $('.product-card:visible').each(function() {
            const price = $(this).data('price');
            if(price > maxPrice) {
                $(this).hide();
            }
        });
    }

    // Add hover effect
    $('.product-card').hover(
        function() {
            $(this).find('.card').addClass('border-primary');
        },
        function() {
            $(this).find('.card').removeClass('border-primary');
        }
    );
});