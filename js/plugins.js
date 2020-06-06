//for toggling links
const navbarLinks = document.querySelector('.nav__items');
const navBtn = document.querySelector('.nav__btn');

navbarLinks.addEventListener('click', () => {
  if (!event.target.classList.contains('nav__link')) return;

  navBtn.checked = false;
});

//Text Typing animation

const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['Front-end Developer', 'User-friendly', 'Mobile-first', 'Responsive design'];
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 1500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

const typed2TextSpan = document.querySelector('.typed-text_2');
const cursor2Span = document.querySelector('.cursor_2');

const text2Array = ['Web Developer', 'UX/UI Designer', 'Project Manager'];
const typing2Delay = 200;
const erasing2Delay = 100;
const new2TextDelay = 2000; // Delay between current and next text
let text2ArrayIndex = 0;
let char2Index = 0;