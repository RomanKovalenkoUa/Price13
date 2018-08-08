$('.header-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000, 
        arrows: false,
        respondTo:'window',
});    
  
  $(document).ready(function() {
    $('.humb').click(function() {
        $('.header-nav ul').toggleClass('active');
    });
 });   