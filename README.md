# `create-web-ext ui tool`

Build yourself a boilerplate browser extension in 15sec. Check it out [here](http://webextensions.tech)


[`create-web-ext-ui`](http://www.webextensions.tech) is a scaffolding tool for browser extensions. It is a simple way to jump start your browser extension development. Just select the type of extension you want, and you're off.

Why does this exist?
--------------------
Because We got super tired creating the file structure for a new extension over and over again. It doesn't use server side code.

Are you a terminal geek?
--------------------
For you , we have npm package, you can check it out [here](https://www.npmjs.com/package/create-web-ext)


The structure of your addon after unzipping will be like this :

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
