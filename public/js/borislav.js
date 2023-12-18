$(document).ready(function () {
    // Smooth scrolling for navigation links
    $(".navbar .nav-link").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                700,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });

    // Portfolio filters using Isotope
    var $portfolioContainer = $(".portfolio-container");
    $portfolioContainer.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
        },
    });

    $(".filters a").click(function () {
        $(".filters .active").removeClass("active");
        $(this).addClass("active");
        var filterValue = $(this).attr("data-filter");
        $portfolioContainer.isotope({
            filter: filterValue,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: false,
            },
        });
        return false;
    });

    // Google Maps initialization
    function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 40.674, lng: -73.945 },
            zoom: 12,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            styles: [...], // Your map styles here
        });
    }

    // Call the initMap function once the document is ready
    initMap();
});
