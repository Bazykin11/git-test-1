const form = document.querySelector(".login-form");
form.addEventListener('submit', onSubmit);


function onSubmit(e) {
    e.preventDefault();
  

    const { email, password } = e.currentTarget.elements
    
    if (email.value === '' || password.value === '') {
        alert('Заполни все поля')
    } else {
            const data = {
              email: email.value,
              password: password.value,
            };
        console.log(data);
            form.reset();
    }

}