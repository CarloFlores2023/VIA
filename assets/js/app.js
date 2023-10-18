
const nav = document.querySelector('nav');
window.addEventListener('scroll', ()=>{
  if(window.scrollY >= 50){
    nav.classList.add('bgColor');
  }else{
    nav.classList.remove('bgColor');
  }
})

const botonProducto = document.querySelector('#mega-menu-full-dropdown-button');
const dropdownNavbar = document.querySelector('#mega-menu-full-dropdown');

botonProducto.addEventListener('click',()=>{
  console.log('click');
  dropdownNavbar.classList.toggle('hidden')
})

const boton = document.querySelector('#botonburger');
const menu = document.querySelector('#mega-menu-full');

boton.addEventListener('click', () => {
    console.log('click')
    menu.classList.toggle('hidden')
})


/* carrusel */

$('.owl-carousel').owlCarousel({
  loop: true,
  center:true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})