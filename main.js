const {app, BrowserWindow, Menu, Tray} = require('electron');

let window;
let window2;

function createWindow(window, options, URLFile) {
    window = new BrowserWindow(options)

    window.loadFile(URLFile)
}

app.whenReady().then(()=> {
    const optionsWindow1 = {
        width: 800,
        height: 600,
        title: 'Teste Electron',
        backgroundColor: '#FF0',
        webPreferences: {
            devTools: false
        }
    };

    const optionsWindow2 = {
        width: 400,
        height: 400,
        backgroundColor: '#F00',
        webPreferences: {
            devTools: false
        },
        alwaysOnTop: true
    };
    
    createWindow(window, optionsWindow1, 'index.html');
    createWindow(window2, optionsWindow2, 'popup.html');

    let tray = new Tray('./favicon.ico')

    let menuContext = Menu.buildFromTemplate([
        {label: 'Item 1', type: 'checkbox'},
        {type: 'separator'},
        {label: 'Item 2', type: 'normal'}
    ])

    tray.setToolTip('Electron tray')

    tray.setContextMenu(menuContext);

})