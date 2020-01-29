function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success)
          success(JSON.parse(xhr.responseText));
      } else {
        if (error) {
          error(xhr);
        }
      }
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
}






// change language on loop 
const languages = [
  'Hej då', 
  'Salut',
  'Arrivederci',
  'Dovijdane',
  'Güle güle',
  'Ardievas',
  'Do videnia',
  'La revedere',
  'Tschüss',
  'Adiós',
  'Zbogom',
  'Äddi',
  'Auf wiedersehen',
  'Doviđenja',
  'Näkemiin',
  'Aντιο σας',
  'Viso gero',
  'Do widzenia',
  'Viszontlátásra',
  'Adeus',
  'Head aega',
  'Au revoir',
  'Vaarwel',
  'Addiju',
  'Slán',
  'Farvel',
  'Goodbye'
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





//handlebars
const Handlebars = require("handlebars");

loadJSON(jsonLink(), (data) => {
  buildLetters (data.sheets)
  buildNav(data.sheets)
});

function jsonLink() {
  if (window.location.hostname == 'preview.gutools.co.uk') {
    return "https://interactive.guim.co.uk/docsdata-test/1xAlScRGPBu85iRERmQKc1KSdFlBAha3fapivY1Nvbyg.json";
  } else {
    return "https://interactive.guim.co.uk/docsdata-test/1xAlScRGPBu85iRERmQKc1KSdFlBAha3fapivY1Nvbyg.json";
  }
}


Handlebars.registerHelper('breaklines', function(text) {
  text = Handlebars.Utils.escapeExpression(text);
  text = text.replace(/(\r\n|\n|\r)/gm, '</p><p>');
  text = '<p>'+text+'</p>';
  return new Handlebars.SafeString(text);
});

//spreadsheet populates content // add this for flag <img src="{{{Flag}}}">
function buildLetters (data) {
  const source = '{{#each Sheet1}}{{breaklines description}}<section class="bye-brits__content scrolltome {{Country}}""><div  class="bye-brits__content__country"><h5>{{Country}}</h5></div><div class="bye-brits__content__image"><img src="{{Image}}"></div><div class="bye-brits__content__gap"></div><div class="bye-brits__content__name"><h3>{{Name}}</h3></div><div class="bye-brits__content__bio"><h4>{{Bio}}</h4></div><div class="bye-brits__content__text"><p><span class="intro">{{Intro}}<span>{{{Full}}}</p></div><div class="bye-brits__content__readmore"><a>Read more</a></div></section>{{/each}}';
  const template = Handlebars.compile(source);

  const byeBrits = document.querySelector("#bye-brits")

  var result = template(data);
  byeBrits.innerHTML = result
}

//spreadsheet populates nav
function buildNav (data) {
  const source = '{{#each Sheet1}}<div class="bye-brits__nav__dropdown-item"><a><span class="dropdown-country-tag">{{Country}} /</span> {{Name}}</a></div>{{/each}}';
  const template = Handlebars.compile(source);
  const byeBrits = document.querySelector("#myDropdown")
  var result = template(data);
  byeBrits.innerHTML = result
}




//scroll to country






// function onScreenRatio(el) {
//   var viewportHeight = window.innerHeight,
//     elementOffsetTop = el.getBoundingClientRect().top,
//     elementHeight = el.offsetHeight,
//     elementOffsetTop = (elementOffsetTop),
//     elementOffsetMiddle = (elementOffsetTop + (elementHeight / 2)),
//     elementOffsetBottom = (elementOffsetTop + (elementHeight));

//   let topRatio, bottomRatio;

//   if (elementOffsetTop > (viewportHeight)) {
//     topRatio = 1;
//   } else if (elementOffsetTop < 0) {
//     topRatio = 0;
//   } else {
//     var ratio = (elementOffsetTop / viewportHeight);
//     topRatio = ratio;
//   }

//   if (elementOffsetBottom > (viewportHeight)) {
//     bottomRatio = 1;
//   } else if (elementOffsetBottom < 0) {
//     bottomRatio = 0;
//   } else {
//     var ratio = (elementOffsetBottom / viewportHeight);
//     bottomRatio = ratio;
//   }

//   return { top: topRatio, bottom: bottomRatio };
// }
