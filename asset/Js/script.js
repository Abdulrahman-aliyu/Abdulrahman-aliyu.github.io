const database = [];
function validate() {
    var fullname_input = document.getElementById('fullname');
    var email_input = document.getElementById('email');
    var phone_input = document.getElementById('phone');
    var password_input = document.getElementById('password');

    // get the error message placeholder
    var invalid_feedbacks = document.getElementsByClassName('invalid-feedback')

    // console.log(invalid_feedback);
    var fullname = fullname_input.value;
    var email = email_input.value;
    var phone = phone_input.value;
    var password = password_input.value;

    // validation
    var is_validated = true;

    // validate name
    var fullname_pattern = /^[a-zA-Z ]+$/;
    if( ! fullname_pattern.test(fullname)) {
      invalid_feedback[0].innerHTML = 'Invalid fullname format';
      fullname_input.classList.add('is-invalid');
      var is_validated = false;
    }

    else{
        fullname_input.classList.remove('is-valid')
    }

    // validate email
    var email_imput_pattern = /^[a-z.]+\.{1}[a-z.]+\@xool\.com$/;
    if( ! email_pattern.test(email)) {
        invalid_feedback[1].innerHTML = 'Invalid email format'
        email_input.classList.remove('valid');
        var is_validated = false;
    }

    else{
        fullname_input.classList.remove('is-valid')
    }

    // validate phone
    var phone_pattern = /^0[0-9]{10}$/;
    if( ! phone_pattern.test(email)) {
        invalid_feedback[2].innerHTML = 'Invalid phone format'
        phone_input.classList.add('is-invalid');
        var is_validated = false;
    }

    else{
        phone_input.classList.remove('is-valid')
    }

    // validate password
    var password_pattern = /^. {8,}$/;
    if( ! password_pattern.test(email)) {
        invalid_feedback[3].innerHTML = 'Invalid password format'
        password_input.classList.add('is-invalid');
        var is_validated = false;
    }

    else{
        password_input.classList.remove('is-valid')
    }

    // save record to database
    if (is_validated) {
      var validatedData = {
             'fullname': fullname,
             'email': email,
             'phone': phone,
             'password': password,
      }
   
         database.push(validateData)
    }
    
     // clear input fields
     fullname_input.value = '';
     email_imput.value = '';
     phone_input.value = '';
     password_input.value = '';

    var success_message = document.getElementById('alert-sucess');

     success_message
     .classList
     .remove('d-none');

     // Display the content of the database
     print_database();

}


document.getElementById('submit-btn')
.addEventListener('click', function(e){
    e.preventDefault();
    validate();
});