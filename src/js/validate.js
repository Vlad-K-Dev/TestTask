document.addEventListener('DOMContentLoaded', function () {
    const submit = document.getElementById('js-submit');
    const errorContainer = document.querySelector('#js-error');
    const regExpsObj = {
        name: /[a-zA-Zа-яА-Я|\s-| ]/gm,
        email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    };

    const form = document.querySelector('form');
    const formInputs = document.querySelectorAll('.wrapper__form__input');
    let validData  = '';
    errorContainer.removeAttribute('class');
    form.addEventListener('focusout', function (event) {
        let currentInput = event.target;
        let regName = currentInput.getAttribute('name');

            if(currentInput.getAttribute('name') === regName ){
                errorContainer.removeAttribute('class');
                if(regExpsObj.hasOwnProperty(regName)){
                    validData = regExpsObj[regName].exec(currentInput.value)
                }
                if(!regExpsObj.hasOwnProperty(regName)){
                    validData = currentInput.value
                }
                errorContainer.setAttribute('class', 'error');
            }

            if(!validData) {
                currentInput.classList.add('wrapper__form__input-error');
                errorContainer.setAttribute('class', 'error');
                errorContainer.innerText = `Enter correct ${regName}`;
                errorContainer.classList.add(`error${regName}`);
            }

            if(currentInput.value === '') {
                errorContainer.setAttribute('class', 'error');
                errorContainer.innerText = `Can be empty`;
                errorContainer.classList.add(`error${regName}`);
            }
    });

    submit.addEventListener('click', function(e){
            e.preventDefault();
            for(let i = 0;i < formInputs.length; i++ ){
                if(formInputs[i].value === ''){
                    errorContainer.setAttribute('class', 'error');
                    errorContainer.innerText = `Please fill in all fields`;
                    errorContainer.classList.add(`errorform`);
                }
            }
    });
});




