const createFiles = {}

createFiles.icon = zip => {
  return fetch('assets/icons/icon.png')
    .then(res => res.blob())
    .then(blob => {
      const iconFolder = zip.folder('myAddon/icons')
      iconFolder.file('icon.png', blob)
      return true
    })
}

createFiles.bg = zip => {
  return fetch('assets/bg.js')
    .then(res => res.text())
    .then(data => {
      zip.file('myAddon/background_script.js', data)
      return true
    })
}

createFiles.cs = zip => {
  return fetch('assets/cs.js')
    .then(res => res.text())
    .then(data => {
      zip.file('myAddon/content_script.js', data)
      return true
    })
}

createFiles.popup = (zip, name) => {
  return Promise.all([
    fetch('assets/popup/index.html').then(res => res.text()),
    fetch('assets/popup/script.js').then(res => res.text()),
    fetch('assets/popup/style.css').then(res => res.text())
  ]).then(resp => {
    const folderName = zip.folder('myAddon/' + name)
    folderName.file('index.html', resp[0])
    folderName.file('script.js', resp[1])
    folderName.file('style.css', resp[2])
    return true
  })
}

module.exports = createFiles
