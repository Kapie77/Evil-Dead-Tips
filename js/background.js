const backgrounds = [
  "images/background/01.jpg",
  /*"images/background/02.jpg", */
  "images/background/03.jpg",
  "images/background/04.jpg",
  "images/background/05.jpg",
  "images/background/06.jpg",
  "images/background/07.jpg",
  /*"images/background/08.jpg",*/
  "images/background/09.jpg",
  "images/background/10.jpg",
  /*"images/background/11.jpg",*/
  /*"images/background/12.jpg",*/
  "images/background/13.jpg",
  "images/background/14.jpg",
  "images/background/15.jpg",
  "images/background/16.jpg"
];

function setRandomBackground() {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  document.body.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;
}

window.onload = setRandomBackground;
setInterval(setRandomBackground, 8000); // troca a cada 8s