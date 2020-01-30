// change language on loop
// const languages = [
//   'Hej då',
//   'Salut',
//   'Arrivederci',
//   'Dovijdane',
//   'Güle güle',
//   'Ardievas',
//   'Do videnia',
//   'La revedere',
//   'Tschüss',
//   'Adiós',
//   'Zbogom',
//   'Äddi',
//   'Auf wiedersehen',
//   'Doviđenja',
//   'Näkemiin',
//   'Aντιο σας',
//   'Viso gero',
//   'Do widzenia',
//   'Viszontlátásra',
//   'Adeus',
//   'Head aega',
//   'Au revoir',
//   'Vaarwel',
//   'Addiju',
//   'Slán',
//   'Farvel',
//   'Goodbye'
// ];

// // 'Slán agus beannacht'

// let i = 0;
// const loopLanguages = setInterval(() => {
//   document.getElementById('change-lang').innerHTML = languages[i];
//   if (i == (languages.length - 1)) {
//     i = 0;
//   } else {
//     i++;
//   }
// }, 1500)

function readMore(){
  var readMore = document.querySelectorAll('.bye-brits__content__readmore');
  var content = document.querySelectorAll('.bye-brits__content');
  for(i = 0; i < readMore.length; i++){
    readMore[i].addEventListener('click', function(){
     console.log(this);
     var parent = this.parentNode;
     console.log(this.innerHTML);
     parent.classList.toggle('clicked');
     if(this.innerHTML === '<a>Read more</a>') {
       this.innerHTML = "<a>Read less</a>";
     } else {
       this.innerHTML = "<a>Read more</a>"
     }
    });
  }
}

function init(){
  readMore();
}
init();
