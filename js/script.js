(function( $ ) { // début de fichier


    // SLIDER

    $('.caroussel').slick({
        //setting-name: setting-value
        autoplay: true,
        slidesToShow: 1,              
        dots: false,
        infinite: true,
        speed: 15000,
        fade: true,
        cssEase: 'linear',     
        arrows: false,        
    });
    
    
    $('.icon').on("click", function(){
        $('#menu').slideToggle(250);
        $('header').toggleClass('menuOuvert');
        
        if($('.menuOuvert').length> 0){
            $(this).removeClass('iconGris')
            $(this).addClass('iconBlanc');            
        }
        else {
            $(this).removeClass('iconBlanc');
            $(this).addClass('iconGris')            
        };
        
    });

    // Slide Voiture
    $('.slideAuto').slick({
        arrows: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-caret-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-caret-right"></i></button>',
        speed: 300,
        slidesToShow: 1,        
    });
    
    // Chargement des articles supplémentaires et disparition du bouton
    $('#charger').on('click', function(){
        $('#carLoad').slideToggle(400);
        $(this).hide();        
        $('.slideAuto2').slick({
            arrows: true,
            infinite: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-caret-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-caret-right"></i></button>',
            speed: 300,
            slidesToShow: 1,        
        });
    })
   
})( jQuery ); // Fin de fichier