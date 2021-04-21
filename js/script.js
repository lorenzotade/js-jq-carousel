$(function(){

  // setto la lista delle immagini in una variabile
  var imgList = $('.img-container img');

  // con un ciclo for che gira tante volte
  // quante sono le immagini presenti in html
  // aggiungo cerchi dinamicamente di cui 
  // il primo con classe active
  /* for (var i = 0; i < imgList.length; i++) {
    if (i == 0) {
      $('.nav-circle').append('<i class="active fas fa-circle"></i>');
    } else {
      $('.nav-circle').append('<i class="fas fa-circle"></i>');
    }
  } */
  
  // metodo con EACH, ON ed EQ
  imgList.each(function(index){
    var active = "";
    if(index === 0) active = "active";
    $('.nav-circle').append('<i class="fas fa-circle ' + active + '"></i>');
  })

  $('.nav-circle i').on('click', function(){
    var index = $(this).index();
    $('.nav-circle i.active').removeClass('active');
    $('.img-container img.active').removeClass('active');
    $('.img-container img').eq(index).addClass('active');
    $(this).addClass('active');
  })

  // chiamo le due funzioni al click sui
  // due chevron/freccette
  $('i.fa-chevron-right').click(nextImg);
  $('i.fa-chevron-left').click(prevImg);

  /* FUNZIONI */

  function nextImg() {
    // punto all'immagine e cerchio con classe
    // active e li salvo in due variabili
    var activeImg = $('.img-container img.active');
    var activeCircle = $('.nav-circle i.active');
    // ad essi rimuovo la classe active
    activeImg.removeClass('active');
    activeCircle.removeClass('active');
    // se il valore length dell'img successiva
    // è 0, significa che dopo di essa non è
    // presente un'altra img quindi riporto
    // la classe active alla prima img e cerchio
    if (activeImg.next('img').length === 0) {
      $('.img-container img').first().addClass('active');
      $('.img-container i.fa-circle').first().addClass('active');
    } 
    // se invece dopo di essa è presente un'altra
    // img, semplicemente sposto la classe active
    // all'immagine e cerchio successivi
    else {
      activeImg.next().addClass('active');
      activeCircle.next().addClass('active');
    }
  }

  function prevImg() {
    // punto all'immagine e cerchio con classe
    // active e li salvo in due variabili
    var activeImg = $('.img-container img.active');
    var activeCircle = $('.nav-circle i.active');
    // ad essi rimuovo la classe active
    activeImg.removeClass('active');
    activeCircle.removeClass('active');
    // se il valore length dell'img precedente
    // è 0, significa che prima di essa non è
    // presente un'altra img quindi riporto
    // la classe active all'ultima img e cerchio
    if (activeImg.prev('img').length === 0) {
      $('.img-container img').last().addClass('active');
      $('.img-container i.fa-circle').last().addClass('active');
    } 
    // se invece prima di essa è presente
    // un'altra img, semplicemente sposto 
    // la classe active all'immagine e cerchio
    // precedenti
    else {
      activeImg.prev().addClass('active');
      activeCircle.prev().addClass('active');
    }
  }

})