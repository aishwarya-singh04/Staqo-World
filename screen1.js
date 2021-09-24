//Selectors
const form = document.getElementById('form');
const firstname= document.getElementById('firstname');
const lastname= document.getElementById('lastname');
const email= document.getElementById('email');
const password= document.getElementById('password');
const small= document.querySelector('small');

//Event Handlers

//form submission
form.addEventListener('submit', function(e){
    e.preventDefault();                    
    checkInput();
});
//Functions
function checkInput()
{
    const firstnameValue = firstname.value.trim();    
    const lastnameValue = lastname.value.trim();    
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstnameValue===''){
        showError(firstname, "FIRST NAME IS REQUIRED. PLEASE PROVIDE ONE");
    }
    else if(!isFirstnameValid(firstnameValue))
    {
        showError(firstname, "FIRST NAME SHOULD CONTAIN LETTERS ONLY");
    }
    else {
        showSuccess(firstname);
    }
    if(lastnameValue===''){
        showError(lastname, "LAST NAME IS REQUIRED. PLEASE PROVIDE ONE");
    }
    else if(!isLastnameValid(lastnameValue))
    {
        showError(lastname, "LAST NAME SHOULD CONTAIN LETTERS ONLY");
    }
    else {
        showSuccess(lastname);
    }
    if(emailValue==='')
    {
        showError(email, "EMAIL ADDRESS IS REQUIRED. PLEASE PROVIDE ONE");
    }
    else if(!isEmailValid(emailValue))
    {
        showError(email, "EMAIL ADDRESS IS INVALID");
    }
    else{
        showSuccess(email);
    }
    if(passwordValue===''){
        showError(password, "PLEASE PROVIDE A PASSWORD");
    }
    else {
        showSuccess(password);
    }
}
function showError(input, msg)
{
    const formControl = input.parentNode;
    formControl.className = 'form-control error';
    const small= formControl.querySelector('small');
    small.innerHTML= msg;
}
function showSuccess(input)
{
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
}
function isEmailValid(email)
{
    return /^([a-zA-Z0-9_\.\-\+]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email);
}
function isFirstnameValid(firstname){
    return /[a-zA-Z]/.test(firstname);
}
function isLastnameValid(lastname){
    return /[a-zA-Z]/.test(lastname);
}