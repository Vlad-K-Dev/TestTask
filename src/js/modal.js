document.addEventListener('DOMContentLoaded', function () {
        const linkBtn = document.querySelector('#js-hyperlink');
        const modalClose = document.querySelector('#js-modalClose');
        const modal = document.querySelector('#js-modal');
        const overlay = document.querySelector('#js-overlay');
        linkBtn.addEventListener('click', function () {
                overlay.style.display = 'block';
                modal.style.display = 'block';
        })
        modalClose.addEventListener('click', function () {
                overlay.style.display = 'none';
                modal.style.display = 'none';
        })



});
