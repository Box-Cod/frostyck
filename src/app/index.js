let body = document.body;
let AllElementsBody = document.querySelector('body').children;

if ( body.id == null || body.id == undefined || body.id === ' ') {

  body.id = randomNumber();
}

for ( let AllElements of AllElementsBody ) {

  if ( AllElements.localName != 'script' ) {

    if ( AllElements.id == null || AllElements.id == undefined || AllElements.id === '' ) {

      AllElements.id = randomNumber();
    }

  }
  
 
  console.log(AllElements)
}



function randomNumber() {
  // code inspired by: https://codigofonte.org/gerando-id-aleatorio-em-javascript/
  
  return Math.floor( Math.floor( Math.random() * Date.now() ) * Math.random() ).toString( 36 );
}

// if ( bodyId != null && bodyId == document.body.id ) {

//   let body = document.body;
//   let AllElementsOfPage = document.documentElement.querySelectorAll( '*' );

//   body.innerHTML = ` ${ body.innerHTML } <h1>ola</h1> `;

//   for ( let AllElements of AllElementsOfPage ) {
    
//     if ( AllElements.id != null && AllElements.id === bodyId) {
//       console.log(AllElements.id);
//     }
    
//   }

//   console.log( AllElementsOfPage );

// }
