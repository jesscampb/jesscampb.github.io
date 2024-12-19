window.onload = function () {

    var form = document.getElementById("contact-form");

    // create the pristine instance
    var pristine = new Pristine(form,{
        classTo: 'form-input',
        errorTextParent: 'form-input',
    });

    form.addEventListener('submit', function (e) {
       e.preventDefault();
       
       // check if the form is valid
       var valid = pristine.validate(); // returns true or false

    });
};
