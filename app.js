(() => {


    'use strict';


    let outModal = true;
    const modalButton = document.querySelector('.button-modal__name'),
    modalWindow = document.querySelector('.modal-name'),
    modal = document.querySelector('.modal-name .modal'),
    modalClose = document.querySelector('.modal-name .modal__close'),
    modalAceptButton = document.querySelector('.modal-name .modal__ok'),
    modalCloseButton = document.querySelector('.modal-name .modal__cancel');

    
    const chackInModal = () => {
        setTimeout(() => {}, 100);
        return outModal;
    };

    modal.addEventListener('click', () => {
        outModal = false;
    });

    modalWindow.addEventListener('click', () => {
        if (chackInModal()) {
            if (modalWindow.classList.contains('modal-active')) {
                modalWindow.classList.remove('modal-active');
            }
        }
        outModal = true;
    });

    modalButton.addEventListener('click', () => {
        modalWindow.classList.add('modal-active');
    });

    modalClose.addEventListener('click', () => {
        modalWindow.classList.remove('modal-active');
    });

    modalAceptButton.addEventListener('click', () => {
        modalWindow.classList.remove('modal-active');
    });

    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', () => {
            modalWindow.classList.remove('modal-active');
        });
    }

    document.addEventListener('keydown', ({key}) => {
        if (key === 'Escape' && modalWindow.classList.contains('modal-active')) {
            modalWindow.classList.remove('modal-active');
        }
    });


})();