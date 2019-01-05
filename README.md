<p align="center">
  <h1 align="center">SQL Editor<span style="font-size:14px;"> for data geeks</span> (Beta)</h1>
  <h4 align="center">The perfect SQL companion for developers, data scientists & sql freaks.</h4>
</p>

<p align="center" >
  <img src="https://img.shields.io/badge/license-MIT-green.svg"/>
  <a href="https://competent-shaw-8b7294.netlify.com/" target="_blank">
  <img src="https://img.shields.io/badge/app-running-green.svg" />
  </a>
</p>
<br/>
Web Application (<a href="https://competent-shaw-8b7294.netlify.com/">Visit here</a>)

<p align="center">
<a href="https://competent-shaw-8b7294.netlify.com/">
  <img align="center" target="_blank" src="https://raw.githubusercontent.com/sumitparakh/sqleditor/d26faaa666a80f6ef93e57884bc181fe3eff71b8/packages/sqleditor-ui/screenshot.png"/>
  </a>
</p>
Desktop application
<p align="center">
<a href="http://www.mediafire.com/folder/44l94vf21q7of/sqleditor">
<img align="center" src="https://raw.githubusercontent.com/sumitparakh/sqleditor/master/packages/sqleditor-app/screenshot.png" />
</a>
</p>

<hr>
<br/>

<h2>Web Framework</h2>
<strong><a href="https://angular.io" target="_blank">Angular Framework</a></strong> is used to build UI(front end) of both web & desktop version of this project. Having a vast community and an in-built set of libraries, Angular provides you a rapid development experience.

Ofcourse every framework has its own pros and cons. But since, I'm mostly experienced in Angular, so I would personally prefer Angular to build web and PWA app, and React to build mobile apps ;) .
<br/>

<h2>Desktop Application Library</h2>
<strong><a href="https://electronjs.org" target="_blank">Electron</a></strong> is used to create desktop build & packages of this project. It provides very rich set of system tools & libraries to build cross-platform desktop application from angular front-end framework.

<br/>
<h2>JavaScript Application Package Manager</h2>
<strong><a href="https://lernajs.io/" target="_blank">Lerna</a></strong> is a tool for managing JavaScript projects with multiple packages.It optimizes the workflow around managing multi-package repositories with git and npm.

<br/>
<br/>
<h1>SqlEditor Packages</h1>

| Package                                                                                      | Version                                                                                                                                                     | Description                                                                            |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [sqleditor-app](https://github.com/sumitparakh/sqleditor/tree/master/packages/sqleditor-app) | [![SqlEditor App](https://img.shields.io/badge/version-1.0.0-yellowgreen.svg)](https://github.com/sumitparakh/sqleditor/tree/master/packages/sqleditor-app) | The electron shell host for the sqleditor application.                                 |
| [sqleditor-ui](https://github.com/sumitparakh/sqleditor/tree/master/packages/sqleditor-ui)   | [![SqlEditor UI](https://img.shields.io/badge/version-1.0.0-yellowgreen.svg)](https://github.com/sumitparakh/sqleditor/tree/master/packages/sqleditor-ui)   | The core application: the sqleditor web app. This app is built using the @angular/cli. |

<br>

<h2>Features</h2>

1. Run simple select queryies (eg. `select * from order_sample` or `select <col-1>, <col-2> from order_sample`). Current SQL parse is built based on mocked data and a fake json sql server, so. Based on data platform, parsing can be enhanced in future accordingly.

2. You can `create as many query editor as you want`. Query will be executed from currently active query editor tab.

3. `Save as you type`. Whatever you write in query editor will be saved as you type. So in case, if you accidentally reload the page, query won't get lost.

4. `Maintains history of succesful/failed query`. Currenty the history is not dynamic so it will be cleared on page reload.    

     You can even run any succesful query from your history list. So <strong>no need to type your query again</strong>.

5. `Filter your query result`. A search textbox is provided so that you can search anything from query result, irrespective of columns or data types.

6. `Reset query editor`. Suppose you have created 7 query tabs and now you want to reset it to the default stage. Then reset query button allows you to do it. Just click to reset button given in the toolbar.

7. `Run query` from active query tab `by either a shortcut (Ctrl+Shift+E) or execute button click` from toolbar.

8. `Dynamically add more mocking databases` on sidebar.

<br>
### How to run locally

1. Clone repo and install dependencies (`lerna bootstrap` or `npm install`).
2. Run the ui `npm run start:ui` and go to [http://localhost:4200](http://localhost:4200)
3. Build ui `npm run build:ui`

### How to package the application

<a href="http://www.mediafire.com/folder/44l94vf21q7of/sqleditor">Download All In One</a>

<u><strong>For Windows</strong></u>

<strong>Note:</strong> I'm using Windows 10 (x64) so the windows build is tested.

1. Build windows build(ia32) for desktop app `npm run package:app:win32:ia32`
2. Build windows build(x64) for desktop app `npm run package:app:win32:x64`

<a href="http://www.mediafire.com/folder/38p4e6uh03e7q/sqleditor-win32-x64">Download windows app(win64)</a><br>

<a href="http://www.mediafire.com/folder/b3tt999v9gb1h/sqleditor-win32-ia32">Download windows app(ia32)</a>

<br/>

<u><strong>For OSX</strong></u>

<strong>Note:</strong> Should work but not tested. Let me know if you face any issue. I'll try and fix. Or if you are a mac user and want to fix it yourself? Pull requets are always appreciated.


1. Build darwin build(x64) for desktop app `npm run package:app:darwin:x64`

<a href="http://www.mediafire.com/folder/cxtcilccijpdt/sqleditor-darwin-x64">Download darwin app(x64)</a><br><br>

<u><strong>For Linux</strong></u>

<strong>Note:</strong> Should work but not tested. Let me know if you face any issue. I'll try and fix. Or if you are a mac user and want to fix it yourself? Pull requets are always appreciated.



1. Build linux build(x64) for desktop app `npm run package:app:linux:x64`
2. Build linux build(ia32) for desktop app `npm run package:app:linux:ia32`
3. Build linux build(arm64) for desktop app `npm run package:app:linux:arm64`

<a href="http://www.mediafire.com/folder/q9dk8sky6obsp/sqleditor-linux-x64">Download linux app(x64)</a><br>

<a href="http://www.mediafire.com/folder/o1fbv8xsi84ew/sqleditor-linux-ia32">Download linux app(ia32)</a><br>

<a href="http://www.mediafire.com/folder/4mew651qib536/sqleditor-linux-arm642">Download linux app(arm64)</a>

<br><br>
You are welcome to contribute to this project. This project is in its early stage, no feature is frozen yet. All suggestions/fixes/help are more than welcome. Raise your issue or feature request <a href="https://github.com/sumitparakh/sqleditor/issues/new" target="_blank">here</a>

Please contact me ([@sumitparakh](https://twitter.com/sumitparak)) if you need some help getting started with the setup.
