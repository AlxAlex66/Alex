function navSlide(){
  const butonMeniu = document.querySelector('.buton-mobil');
  const navigatie = document.querySelector('.lista-navigare');

    butonMeniu.addEventListener('click', function(){
    navigatie.classList.toggle('lista-navigare-activare');
  });
}

navSlide();
