const imgData = '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';
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

const setValue = (question, answer, next) => {
    response[question] = answer;
    if(next) nextQuestion(next);
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

const createFiles = {};

createFiles.icon = zip => {
    return new Promise(resolve => {
        const iconFolder = zip.folder('icons');
        iconFolder.file('icon.png', imgData, {base64: true});
        return resolve(true);
    })
    
}

createFiles.bg = zip => {
    return fetch('assets/bg.js').then(res=>res.text()).then(data=>{
        zip.file('background_script.js', data);
        return true;
    })
}

createFiles.cs = zip => {
    return fetch('assets/cs.js').then(res=>res.text()).then(data=>{
        zip.file('content_script.js', data);
        return true;
    })
}

createFiles.popup = (zip, name) => {
    return Promise.all([
        fetch('assets/popup/index.html').then(res=>res.text()),
        fetch('assets/popup/script.js').then(res=>res.text()),
        fetch('assets/popup/style.css').then(res=>res.text())
    ]).then(resp => {
        const folderName = zip.folder(name);
        folderName.file('index.html', resp[0])
        folderName.file('script.js', resp[1])
        folderName.file('style.css', resp[2])
        return true;
    })
    
}

const createManifest = () => {
    const zip = new JSZip();
    const manifestJson = {
        'manifest_version': 2,
        'name': response.name.trim() || 'My extension',
        'description': response.description || 'description',
        'version': response.version || '1.1.1',
        'icons': {
        '64': 'icons/icon.png'
        }
    }

    const createorPromises = [];
    createorPromises.push(createFiles.icon(zip))

    if (response.background_script) {
        manifestJson.background = {
            'scripts': ['background_script.js']
        }
        createorPromises.push(createFiles.bg(zip))
    }

    if (response.content_script) {
        manifestJson.content_scripts = [
            {
                'matches': ['*://*.mozilla.org/*'],
                'js': ['content_script.js']
            }
        ]
        createorPromises.push(createFiles.cs(zip))
    }

    if (response.browser_action) {
        manifestJson.browser_action = {
            'default_icon': {
                '64': 'icons/icon.png'
            },
            'default_popup': 'browserAction/index.html',
            'default_title': manifestJson.name
        }
        createorPromises.push(createFiles.popup(zip, 'browserAction'))
    }

    if (response.page_action) {
        manifestJson.page_action = {
            'default_icon': {
                '64': 'icons/icon.png'
            },
            'default_popup': 'pageAction/index.html',
            'default_title': manifestJson.name
        }
        createorPromises.push(new Promise(()=>createFiles.popup(zip, 'pageAction')))
    }

    if (response.options_ui) {
        manifestJson.options_ui = {
            'page': 'options/index.html'
        }
        createorPromises.push(new Promise(()=>createFiles.popup(zip, 'options')))
    }

    Promise.all(createorPromises).then(data=>{
        zip.file("manifest.json", JSON.stringify(manifestJson, null, 2));
        zip.generateAsync({type:"blob"})
        .then(function(content) {
            const name = manifestJson.name.replace(/[`~!@#$ %^&*()_|+\-=÷¿?;:'",.<>{}[\]\\/]/gi, '-').toLowerCase()
            saveAs(content, `${name}.zip`);
        });
    }).catch(console.log)
}


