function navSlide(){
  const butonMeniu = document.querySelector('.buton-mobil');
  const navigatie = document.querySelector('.lista-navigare');
  const paginiMeniu = document.querySelectorAll('.lista-navigare li')

    butonMeniu.addEventListener('click', function(){
      // iesire bara de navigare
      navigatie.classList.toggle('lista-navigare-activare');

    // Animare butoanele ce ne trimit la pagini
    paginiMeniu.forEach( (link, index) => {
      if(link.style.animation){
        link.style.animation='';
      }else {
        link.style.animation=`miscareMeniu 0.5 ease forwards $(index /7 + 0.3)s
      }

    });
  });



}

navSlide();
