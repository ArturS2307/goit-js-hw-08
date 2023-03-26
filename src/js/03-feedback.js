import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};
const STORAGE_KEY = "feedback-form-state";
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
    email: "",
    message: ""
}; 

checkFormFieldsFill();

refs.form.addEventListener('input', throttle(onFormInput, 500));
function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    // console.log(formData);
    const objToString = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, objToString); 
};

refs.form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();

    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
};  

function checkFormFieldsFill() {
    if(formData) {
        refs.input.value = formData.email;
        refs.textarea.value = formData.message;
    };    
};