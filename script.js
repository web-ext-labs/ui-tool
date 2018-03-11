const nextQuestion = id => {
    Array.from(document.getElementsByClassName('question')).forEach(e=>e.setAttribute('data-active','false'));
    document.getElementById(`q-${id}`).setAttribute('data-active','true');
}

const toggleQuestions = action => {
    if(action) {
        document.getElementById("welcome").classList ="hide";
        document.getElementById("questions").classList ="show";
    } else {
        document.getElementById("welcome").classList ="show";
        document.getElementById("questions").classList ="hide";
    }
}