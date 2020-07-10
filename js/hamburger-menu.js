const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active');
  
  $('.navigation a').on('click', function(){
    $(".navigation").hide('navigation--active');
    $(".hamburger").removeClass("hamburger--active");
});

$('.hamburger').on('click', function(){
  $(".navigation").show('navigation--active');
  $(".hamburger").addClass("hamburger--active");
});

}

hamburger.addEventListener('click', handleClick);
