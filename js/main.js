window.onscroll = function(e) {
  if (window.pageYOffset > 20) {
    document.querySelector('.navbar').classList.add('stycky');

  } else {
    document.querySelector('.navbar').classList.remove('stycky');

  }

  if (window.pageYOffset > screen.height / 2.25) {
    document.querySelector('.scrollTop').style.display = "block";
  } else {
    document.querySelector('.scrollTop').style.display = "none";
  }
};

document.querySelector('.menu_toggler').onclick = function(e) {
  document.querySelector('.menu_toggler').classList.toggle('active');
  document.querySelector('.navbar-menu').classList.toggle('active');
};
