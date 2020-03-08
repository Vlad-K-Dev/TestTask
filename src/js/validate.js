let submit = document.getElementById('js-submit');

submit.addEventListener('click', (e) =>{
        e.preventDefault();
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let selectCountry = document.getElementById('js-select__cnt').value;
    let agree = document.getElementById('js-checkbox').spellcheck

    validateForm(email, name, selectCountry, agree);

});

function validateForm(email, name, country, agree){
    let regExpName = /[a-zA-Zа-яА-Я|\s-| ]/gm;
    let regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let validEmail = regExpEmail.exec(email);
    let validName = regExpName.exec(name);


    let errorMessage = document.getElementById('js-error');

    if(validEmail === null){
        errorMessage.innerText = 'Enter correct email'
        errorMessage.style.display = 'flex'
    } else {
        errorMessage.style.display = 'none'
    }

    // if(validName === null){
    //     errorMessage.innerText = 'Enter correct name'
    //     errorMessage.style.display = 'flex'
    // } else {
    //     errorMessage.style.display = 'none'
    // }

    console.log(validEmail)
    console.log(validName)
}



