const JSZip = require('jszip');
const fileSaver = require('file-saver');
const createFiles = require('./fileCreater');

const createManifest = response => {
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
        createorPromises.push(createFiles.popup(zip, 'pageAction'))
    }

    if (response.options_ui) {
        manifestJson.options_ui = {
            'page': 'options/index.html'
        }
        createorPromises.push(createFiles.popup(zip, 'options'))
    }

    return Promise.all(createorPromises).then(data=>{
        zip.file("manifest.json", JSON.stringify(manifestJson, null, 2));
        return zip
            .generateAsync({type:"blob"})
            .then(function(content) {
                const name = manifestJson.name.replace(/[`~!@#$ %^&*()_|+\-=÷¿?;:'",.<>{}[\]\\/]/gi, '-').toLowerCase()
                return fileSaver.saveAs(content, `${name}.zip`);
            });
    }).catch(e => false)
}

module.exports = createManifest;