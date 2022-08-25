
/* Porfolio */

function tabsFilters() {
    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projets = document.querySelectorAll('.portfolio .card');
  
    const resetActiveLinks = () => {
      tabs.forEach(elem => {
        elem.classList.remove('active');
      })
    }
  
    const showProjets = (elem) => {
      console.log(elem);
      projets.forEach(projet => {
  
        let filter = projet.getAttribute('data-category');
  
        if (elem === 'all') {
          projet.parentNode.classList.remove('hide');
          return
        }
  
        console.log('tutu');
        // Option one
        /*if (filter !== elem) {
          projet.parentNode.classList.add('hide');
        } else {
          projet.parentNode.classList.remove('hide');
        }*/
  
        //opérateur ternaire
        filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');
  
      });
    }
  
    tabs.forEach(elem => {
      elem.addEventListener('click', (event) => {
        event.preventDefault();
        let filter = elem.getAttribute('data-filter');
        showProjets(filter)
        resetActiveLinks();
        elem.classList.add('active');
      });
    })
  }
  
  tabsFilters()
  
  function showProjectDetails() {
    const links = document.querySelectorAll('.card__link');
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.modal__close');
  
    const hideModals = () => {
      modals.forEach(modal => {
        modal.classList.remove('show');
      });
    }
  
    links.forEach(elem => {
      elem.addEventListener('click', (event) => {
        event.preventDefault();
  
        document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
      });
    });
  
    btns.forEach(btn => {
      btn.addEventListener('click', (event) => {
        hideModals();
      });
    });
  
  }  
  showProjectDetails();



//**************Page like - animation en js => prof Aziz 
// let vitesse = parseInt(document.querySelector('#carrousel').dataset.vitesse) ;
// par defaut
console.log(vitesse);

/* On liste les images */
// let mesImages = document.querySelectorAll('#reglette figure');
// let nbImages = mesImages.length;

/* on définit la largeur de la réglette */
// let reglette = document.getElementById('reglette');
// reglette.style.width = nbImages * 100 + '%';

// function reorder() {
//     for (let i = 0; i < nbImages; i++) {
//         mesImages[i].style.order = i;
//         mesImages[i].style.width = 100 / nbImages + '%';
//     }
// }
// reorder();

// let compteurImages = 0;
// let timer1 = setInterval(carrousel,vitesse);
/*     let position = 0; */

// function carrousel(){

//     let position = 0;
//     let timer2 = setInterval(coulisse,20);

//     function coulisse(){
//         if(position == -100){
//             clearInterval(timer2);

//             mesImages[compteurImages].style.order = parseInt(mesImages[compteurImages].style.order) +  nbImages;

//             compteurImages++;
//             reglette.style.left = 0;

            // position = 0; 
//             if(compteurImages == nbImages){
//                 compteurImages = 0;               
//                 reorder();
//             }            
 
//         }else{
//             position -= 2;
//             reglette.style.left = position + '%';
//         }
//     }
// }


// let monCarrousel = document.querySelector('#carrousel');

// monCarrousel.addEventListener('mouseenter',function(){
//     clearInterval(timer1)    ;
// });

// monCarrousel.addEventListener('mouseleave',function(){
   // carrousel();
//     timer1 = setInterval(carrousel,vitesse);
// });


























  



// **************Page Thinks
// const target = document.getElementById('target');
// let array = ['Soutien', 'Gentillesse', 'Empathie'];

// let wordIndex = 0;
// let letterIndex = 0;

// const createLetter = () =>{
//   const letter = document.createElement('span');
//   target.appendChild(letter);

//   letter.classList.add('letter');
//   letter.style.opacity = '0';
//   letter.style.animation = 'anim 5s ease forwards';
//   letter.textContent = array[wordIndex][letterIndex];

//   setTimeout(() =>{
//     letter.remove();

//   }, 2000 );
// }

// const loop = () =>{
//   setTimeout(() =>{
//     if(wordIndex >= array.length){
//       wordIndex = 0;
//       letterIndex = 0;
//       loop();
//     }

//     else if(letterIndex < array[wordIndex].length){
//       createLetter();
//       letterIndex++;
//       loop();
    
//     }else{
//       letterIndex = 0;
//       wordIndex++;
//       setTimeout(() =>{
//         loop();
//       }, 2000);

//     }
//   }, 80);
// }
// loop();



// createLetter();


