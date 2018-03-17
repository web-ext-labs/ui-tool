const createManifest = require('./createManifest');
const response = {};

const nextQuestion = id => {
    Array.from(document.getElementsByClassName('question')).forEach(e=>e.setAttribute('data-active','false'));
    document.getElementById(`q-${id}`).setAttribute('data-active','true');
    setTimeout(()=>{
        if (document.querySelector(`#q-${id} input[type="text"]`)) document.querySelector(`#q-${id} input[type="text"]`).focus()
        if (document.querySelector(`#q-${id} .button`)) document.querySelector(`#q-${id} .button`).focus()
    }, 10)
}

const validate = (question, value) => {
    if(question === 'version'){
        return (value.match(/^(\d+\.)?(\d+\.)?(\*|\d+)$/i));
    }
}

const validateAndSetValue = e => {
    const question = e.getAttribute('data-question')
    const isValidate = e.getAttribute('data-validate')
    const value = e.value || '';
    if (!isValidate || validate(question, value)) {
        response[question] = value;
        return true;
    }
    return false;
}

// actions for text inputs
Array
    .from(document.getElementsByClassName('go'))
    .forEach(
        e => e.addEventListener('click', ev => {
            Array.from(document.getElementsByClassName('error'))
            .forEach(e => { e.style.display = 'none' });
            if (validateAndSetValue(ev.target.previousElementSibling))
                nextQuestion(ev.target.getAttribute('data-next'))
            else
                ev.target.nextElementSibling.style.display = 'block';
        })
    );

Array
    .from(document.querySelectorAll('input[type="text"]'))
    .forEach(
        e => e.addEventListener('keyup', ev => {
            if(ev.keyCode === 13) e.nextElementSibling.click();
        })
    )

// actions for button inputs
window.setValue = (question, answer, next) => {
    response[question] = answer;
    if (next === 0) {
        createManifest(response)
        .then(e => window.changeScreen('thanks'))
        return true;
    }
    nextQuestion(next);
}

// toggle homescreen
window.changeScreen = action => {
    document.getElementById("welcome").classList ="hide";
    document.getElementById("questions").classList ="hide";
    document.getElementById("thanks").classList ="hide";
    document.getElementById(action).classList ="show";
    if(action === 'questions') {
        document.querySelector(`#q-1 input[type="text"]`).focus();
    }
}
