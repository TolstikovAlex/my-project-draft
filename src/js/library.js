// const searchSection = document.querySelector('.search');
// const libButtons = document.querySelector('.library-btn-list');
// const headerEl = document.querySelector('header');
// const libLink = document.querySelector('#library');
// const homeLink = document.querySelector('#home');

// libLink.addEventListener('click', onClick);

// function onClick(event) {
//   event.preventDefault();
//   searchSection.classList.add('visually-hidden');
//   libButtons.classList.remove('visually-hidden');
//   homeLink.classList.remove('current');
//   libLink.classList.add('current');
//   headerEl.classList.add('header-container_lib');
// }

const refs = {
  searchSection: document.querySelector('.search'),
  libButtons: document.querySelector('.library-btn-list'),
  headerEl: document.querySelector('header'),
  libLink: document.querySelector('#library'),
  homeLink: document.querySelector('#home'),
};

refs.libLink.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  refs.searchSection.classList.add('visually-hidden');
  refs.libButtons.classList.remove('visually-hidden');
  refs.homeLink.classList.remove('current');
  refs.libLink.classList.add('current');
  refs.headerEl.classList.add('header-container_lib');
}
