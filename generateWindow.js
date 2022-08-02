const electron = require('electron')

const BrowserWindow = electron.remote.BrowserWindow;

const createPopup = (title) => {
    const newWindow = new BrowserWindow({
        width: 400,
        height: 400,
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: false,
            devTools: true
        },
        alwaysOnTop: true,
        title: title
    })

    newWindow.loadFile('popup.html')
}