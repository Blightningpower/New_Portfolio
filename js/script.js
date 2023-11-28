/* Dit zijn de elementen die zorgen voor
 de automatische animatie bij het eerste bezoek aan de pagina*/
const image = document.querySelector('.fade-out-image');
const fadeInElements = document.querySelector('.fadeInElements');
const copyRightText = document.querySelector('.copyrightText');
const BAlogo = document.querySelector('.BAlogo');
const logoB = document.querySelector('.logoB');
const logoA = document.querySelector('.logoA');
const textRestFname = document.querySelector('.textRestFname');
const textRestLname = document.querySelector('.textRestLname');
const logoBavli = document.querySelector('.logoBavli');
const logoArmanyous = document.querySelector('.logoArmanyous');

if (!localStorage.getItem('visitedBefore')) {
  image.addEventListener('transitionend', () => {
    fadeInElements.classList.add('fadeIn');
    copyRightText.classList.add('fadeIn');
    fadeInElements.classList.remove('fadeInElements');
  });

  setTimeout(() => {
    image.classList.add('fadeOut');
    copyRightText.classList.add('fadeIn');
    copyRightText.style.transition = 'opacity 3.5s ease-in';
    copyRightText.style.opacity = '1';
  }, 1000);

  localStorage.setItem('visitedBefore', true);
} else {
  fadeInElements.classList.add('fadeIn');
  copyRightText.classList.add('fadeIn');
  copyRightText.style.opacity = '1';
  image.style.opacity = '0';
}

function showName() {
  if (window.innerWidth <= 1230) {
    logoB.style.left = '-20%';
    logoA.style.right = '5%';
    textRestFname.style.top = '16%';
    textRestFname.style.left = '22%';
    textRestLname.style.top = '16%';
    textRestLname.style.left = '42%';
    textRestFname.style.opacity = '1';
    textRestLname.style.opacity = '1';
    textRestFname.style.fontSize = '2rem';
    textRestLname.style.fontSize = '2rem';
  } else if (window.innerWidth >= 1280) {
    logoB.style.left = '-25%';
    logoA.style.left = '-5%';
    textRestFname.style.opacity = '1';
    textRestFname.style.left = '24%';
    textRestLname.style.opacity = '1';
    textRestLname.style.right = '11%';
  }
}

function hideName() {
  logoB.style.left = '0';
  logoA.style.left = '-2%';
  textRestFname.style.opacity = '0';
  textRestFname.style.left = '25%';
  textRestLname.style.opacity = '0';
  textRestLname.style.right = '11%';
}

let clickCount = 0;

function toggleFunctions() {
  if (clickCount % 2 === 0) {
    hideName();
  } else {
    showName();
  }
  clickCount++;
}

// Add 'click' event listeners to both 'logoA' and 'logoB'
logoA.addEventListener('click', toggleFunctions);
logoB.addEventListener('click', toggleFunctions);

// Selecteer alle elementen met de class 'logoHover'
const logoHoverElements = document.querySelectorAll('.logoHover');

// Voeg een eventlistener toe aan elk 'logoHover' element
logoHoverElements.forEach((element) => {
  element.addEventListener('mouseover', () => {
    // Loop door alle 'logoHover' elementen en verander de 'src' attributen
    logoHoverElements.forEach((img) => {
      const currentSrc = img.getAttribute('src');
      if (currentSrc.endsWith('.png')) {
        const newSrc = currentSrc.replace('.png', '_hover.png');
        img.setAttribute('src', newSrc);
      }
    });
  });

  // Voeg een eventlistener toe om terug te schakelen naar de normale afbeelding wanneer de muis de afbeelding verlaat
  element.addEventListener('mouseout', () => {
    logoHoverElements.forEach((img) => {
      const currentSrc = img.getAttribute('src');
      if (currentSrc.endsWith('_hover.png')) {
        const newSrc = currentSrc.replace('_hover.png', '.png');
        img.setAttribute('src', newSrc);
      }
    });
  });
});