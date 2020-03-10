document.addEventListener('DOMContentLoaded', function () {
        const numMenu = document.querySelectorAll('.promo-block__list');
        const linkBtn = document.querySelector('#js-hyperlink');
        const modalClose = document.querySelector('#js-modalClose');
        const modal = document.querySelector('#js-modal');
        const overlay = document.querySelector('#js-overlay');
        for(let i = 0; i < numMenu.length; i++){
                numMenu[i].addEventListener('click', function () {
                        overlay.style.display = 'block';
                        modal.style.display = 'block';
                
                });
                modalClose.addEventListener('click', function () {
                        overlay.style.display = 'none';
                        modal.style.display = 'none';
                })
        }
});


