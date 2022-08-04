const {app, BrowserWindow, Menu, Tray, ipcMain} = require('electron');

let window;

function createWindow(window, options, URLFile) {
    window = new BrowserWindow(options)

    window.loadURL(URLFile)
}

app.whenReady().then(()=> {
    const optionsWindow1 = {
        width: 800,
        height: 600,
        webPreferences: {
            devTools: true,
            nodeIntegration: true
        }
    };
    createWindow(window, optionsWindow1, 'http://localhost:4200');

})

ipcMain.on('click-menu', ()=> {
  console.log('CLICK');
})
