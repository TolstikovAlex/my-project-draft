const refs = {
  searchInput: document.querySelector('[data-search-control]'),
  linkMyLibrary: document.querySelector('[data-lib_page]'),
  linkHome: document.querySelector('.navigation__menu__link'),
  logoHome: document.querySelector('logo'),
  home: document.querySelector('#home'),
  watchedLibrary: document.querySelector('[data-btn_watched]'),
  queueLibrary: document.querySelector('[data-btn_queue]'),
  aboutTeam: document.querySelector('[data-link-footer]'),
  galleryList: document.querySelector('[data-gallery-list]'),
  buttonScrollUp: document.querySelector('[data-buttonScrollUp]'),
  spinnerPreloader: document.querySelector('[data-preloader-page]'),
  modalBackdrop: document.querySelector('[data-backdrop]'),
  modalCloseBtn: document.querySelector('[data-close-btn]'),
  modal: document.querySelector('[data-modal]'),
  searchForm: document.querySelector('[data-search-form]'),
  cardContainer: document.querySelector('.card-container]'),

  header: document.querySelector('.header'),
  headerButtons: document.querySelector('[data-buttons]'),
  headerNavigation: document.querySelector('[data-header-nav]'),
  movieGallerySection: document.querySelector('.movie-gallery-js]'),
  divFilter: document.querySelector('.divForFilters'),
  select: document.querySelector('[data-select]'),
  anchor: document.querySelector('.anchor'),
  trailerBackdrop: document.querySelector('[data-backdrop-trailer]'),
  trailerIframe: document.querySelector('[data-trailer]'),
};

const controlPageHome = function () {
  refs.galleryList.innerHTML = '';
  refs.linkMyLibrary.classList.remove('current');
  refs.linkHome.classList.add('current');
  refs.header.classList.remove('header__container-library');
  refs.header.classList.add('header__container-home');
  refs.searchForm.classList.remove('visually-hidden');
  refs.headerButtons.classList.add('visually-hidden');
  refs.watchedLibrary.classList.add('active__btn');
  refs.queueLibrary.classList.remove('active__btn');
  onHomeClickHandler();
};
const controlPageLib = function (e) {
  refs.galleryList.innerHTML = '';
  refs.linkHome.classList.remove('current');
  refs.linkMyLibrary.classList.add('current');
  refs.header.classList.remove('header__container-home');
  refs.header.classList.add('header__container-library');
  refs.headerButtons.classList.remove('visually-hidden');
  refs.searchForm.classList.add('visually-hidden');
  onMyLibraryClickHandler();
  refs.searchInput.value = '';
};

refs.headerNavigation.addEventListener('click', evt => {
  evt.preventDefault();

  if (evt.target === refs.linkMyLibrary) {
    controlPageLib();
    if (document.querySelector('[data-notification-wrapper]')) {
      document.querySelector('[data-notification-wrapper]').remove();
    }
    renderMovieList(localStorageAPI.KEYS.WATCHED, 1);
    refs.watchedLibrary.classList.add('active__btn');
    refs.queueLibrary.classList.remove('active__btn');
    return;
  } else if (evt.target === refs.linkHome) {
    controlPageHome();
    if (document.querySelector('[data-notification-wrapper]')) {
      document.querySelector('[data-notification-wrapper]').remove();
    }
    renderTrending();
    return;
  }
});
refs.logoHome.addEventListener('click', evt => {
  evt.preventDefault();
  controlPageHome();
  if (document.querySelector('[data-notification-wrapper]')) {
    document.querySelector('.[data-notification-wrapper]').remove();
  }
  renderTrending();
});
