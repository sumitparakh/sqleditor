// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const remote = require('electron').remote;

window.onload = function () {

    const window = remote.getCurrentWindow();

    const restore = document.getElementById('restore');
    restore.style.display = 'none';

    const maximize = document.getElementById('maximize');
    maximize.style.display = 'block';

    document.getElementById('minimize').onclick = minimizeApp;
    maximize.onclick = maximizeApp;
    document.getElementById('close').onclick = closeApp;
    restore.onclick = restoreApp;

    function minimizeApp(event) {
        window.minimize();
    }

    function restoreApp(event) {
        maximize.style.display = 'block';
        restore.style.display = 'none';
        window.restore();
    }

    function maximizeApp(event) {
        restore.style.display = 'block';
        maximize.style.display = 'none';
        window.maximize();
    }

    function closeApp() {
        window.close();
    }
}