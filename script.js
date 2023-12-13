window.addEventListener('resize', changeHero);

function changeHero() {
  if (document.body.clientWidth >= 1440) {
    console.log('fieoj');
    document.getElementById('hero-img').src = "images/hero-desktop.jpg";
  }
  else if (document.body.clientWidth < 1440) {
    document.getElementById('hero-img').src = "images/hero-mobile.jpg";
  }
}