function languages() {
const languages = [
  '🇸🇪 Hej då',
  '🇧🇪 Salut',
  '🇮🇹	Arrivederci',
  '🇧🇬	Dovijdane',
  '🇨🇾	Aποχαιρετισμός',
  '🇱🇻	Ardievas',
  '🇸🇰	Do videnia',
  '🇷🇴	La revedere',
  '🇦🇹	Baba',
  '🇪🇸	Adiós',
  '🇸🇮	Zbogom',
  '🇱🇺	Äddi',
  '🇩🇪	Auf Wiedersehen',
  '🇭🇷	Doviđenja',
  '🇫🇮	Näkemiin',
  '🇬🇷	Aντιο σας',
  '🇨🇿 Ahoj',
  '🇱🇹	Viso gero',
  '🇵🇱	Do widzenia',
  '🇭🇺	Viszontlátásra',
  '🇵🇹	Adeus',
  '🇪🇪	Head aega',
  '🇫🇷	Au revoir',
  '🇳🇱	Vaarwel',
  '🇲🇹	Addiju',
  '🇮🇪	Slan libh',
  '🇩🇰	Farvel',
  '🇪🇺 Goodbye'
];

// 'Slán agus beannacht'
let i = 0;
const loopLanguages = setInterval(() => {
  document.getElementById('change-lang').innerHTML = languages[i];
  if (i == (languages.length - 1)) {
    i = 0;
  } else {
    i++;
  }
}, 1500)
}

function readMore(){
  var readMore = document.querySelectorAll('.bye-brits__content__readmore');
  var content = document.querySelectorAll('.bye-brits__content');
  for(var i = 0; i < readMore.length; i++){
    readMore[i].addEventListener('click', function() {
     console.log(this);
     var parent = this.parentNode;
     console.log(this.innerHTML);
     parent.classList.toggle('clicked');
     if(this.innerHTML === '<a>Read more</a>') {
         console.log("TRUE")
       this.innerHTML = '<a>Read less</a>';
     } else {
         console.log('FALSE')
       this.innerHTML = '<a>Read more</a>'
     }
    });
  }
}







function scroll() {
  var goodbye = document.querySelector('.bye-brits__header__goodbye-brits');
  var goodbyeTrack = document.querySelector('.headline_tracker');
  var stickme = document.querySelector('.stickme');
  document.addEventListener('scroll', function(){
    var positionGoodbye = goodbyeTrack.getBoundingClientRect();
    if(positionGoodbye.top <= 0) {
      stickme.classList.add('showme');
    } else {
      stickme.classList.remove('showme');
    }
  });
}


const navItem = document.querySelectorAll('.bye-brits__nav__dropdown-item div a')
const navContent = document.querySelector('.dropdown-content')

function closeNav() {
    for(var i = 0; i < navItem.length; i++){
        console.log(navItem[i])
        navItem[i].addEventListener("click", function() {
            console.log(navItem[i])
            navContent.classList.remove('show');
        })
    }
}



function init(){
  readMore();
  scroll();
  languages();
  closeNav();
}
init();




