const createManifest = require('./createManifest');
const response = {};

const nextQuestion = id => {
    Array.from(document.getElementsByClassName('question')).forEach(e=>e.setAttribute('data-active','false'));
    document.getElementById(`q-${id}`).setAttribute('data-active','true');
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

// actions for button inputs
window.setValue = (question, answer, next) => {
    response[question] = answer;
    if (next === 0) {
        createManifest(response);
        return true;
    }
    nextQuestion(next);
}

// toggle homescreen
window.toggleQuestions = action => {
    if(action) {
        document.getElementById("welcome").classList ="hide";
        document.getElementById("questions").classList ="show";
    } else {
        document.getElementById("welcome").classList ="show";
        document.getElementById("questions").classList ="hide";
    }
}



