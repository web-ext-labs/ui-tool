# `create-web-ext-ui`

[`create-web-ext-ui`](http://www.webextensions.tech) is a scaffolding UI tool for browser extensions. It lets you to input and select few parameters and outputs a complete boilerplate browser extension project. This folder will contain all the required folders and files to get started with the extension.

##### Structure
Following folder structure will be genearted, zipped and downloaded:

```text
myAddon
   ├── background_script.js
   ├── browserAction
   │   ├── index.html
   │   ├── script.js
   │   └── style.css
   ├── content_script.js
   ├── icons
   │   └── icon.png
   ├── manifest.json
   ├── options
   │   ├── index.html
   │   ├── script.js
   │   └── style.css
   └── pageAction
       ├── index.html
       ├── script.js
       └── style.css
```

Why does this exist?
--------------------
Because we got super tired creating the file and folders for every new extension over and over again. #lazyDevs

Are you a terminal geek?
--------------------
For you , we have npm package, you can check it out [`here`](https://www.npmjs.com/package/create-web-ext)

Want to contribute?
--------------------
If you have suggestions please [`file an issue`](https://github.com/web-ext-labs/ui-tool/issues/new)
