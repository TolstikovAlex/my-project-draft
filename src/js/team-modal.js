// import teamModalTemplate from '../templates/teamModalTemplate.hbs';
// import { closeOnClick, modalKeypressEsc } from './modalClose.js';
const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  studentCard: document.querySelectorAll('.students__card'),
  backdrop: document.querySelector('.backdrop__students'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.studentCard.forEach(elem => {
  elem.addEventListener('click', toggleStudentCard);
  function toggleStudentCard() {
    elem.classList.toggle('active');
  }
});

function onOpenModal(e) {
  e.preventDefault();
  refs.modal.classList.remove('is-hidden');
  refs.modal.classList.add('mount');
  refs.backdrop.addEventListener('click', modalCloseClickBackdrop);
  document.addEventListener('keydown', modalCloseEsc);
}

function modalCloseClickBackdrop(e) {
  if (e.target.nodeName === 'BACKDROP') {
    onCloseModal();
  }
}

function modalCloseEsc(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

function onCloseModal() {
  refs.modal.classList.add('is-hidden');
  refs.modal.classList.remove('mount');
  document.removeEventListener('keydown', modalCloseEsc);
}

const team = [
  {
    name: '',
    lastName: '',
    img: '',
    githubLink: '',
  },
  {
    name: '',
    lastName: '',
    img: '',
    githubLink: '',
  },
  {
    name: '',
    lastName: '',
    img: '',
    githubLink: '',
  },
  {
    name: '',
    lastName: '',
    img: '',
    githubLink: '',
  },
  {
    name: '',
    lastName: '',
    img: '',
    githubLink: '',
  },
  {
    name: '',
    lastName: '',
    img: '',
    githubLink: '',
  },
  {
    name: '',
    lastName: '',
    img: '',
    githubLink: '',
  },
  {
    name: '',
    lastName: '',
    img: '',
    githubLink: '',
  },
  {
    name: '',
    lastName: '',
    img: '',
    githubLink: '',
  },
  {
    name: '',
    lastName: '',
    img: '',
    githubLink: '',
  },
];
const modalBackdrop = document.querySelector('.js-backdrop');
const showTeamModal = event => {
  event.preventDefault();
  document.addEventListener('keydown', modalKeypressEsc);
  refs.modalBackdrop.addEventListener('click', closeOnClick);
  const teamModalHTML = teamModalTemplate(team);
  refs.modalBackdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
  refs.cardContainer.insertAdjacentHTML('beforeend', teamModalHTML);
};
refs.aboutTeam.addEventListener('click', showTeamModal);
