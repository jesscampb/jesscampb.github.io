window.onload = function () {

    let form = document.getElementById("contact-form");

    let pristine = new Pristine(form,{
        classTo: 'form-input',
        errorTextParent: 'form-input',
    });

    form.addEventListener('submit', function (e) {
       e.preventDefault();
       
       let valid = pristine.validate();

        if (valid){
            form.submit();
        }

    });
};
