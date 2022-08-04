const {app, BrowserWindow, Menu, Tray, ipcMain} = require('electron');
const path = require('path');
const fs = require('fs');
const url = require('url');


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
            nodeIntegration: true,
            contextIsolation: false
        }
    };
    const _url = app.isPackaged ?  
    url.format({
        pathname: path.join(__dirname, `dist/my-ticket/index.html`),
        protocol: "file:",
        slashes: true
    })  : 'http://localhost:4200'

    createWindow(window, optionsWindow1, _url);

})

function setClickCounter(counter) {
    const _path = mountDataPath('click_counter')

    try {
        fs.writeFileSync(_path, JSON.stringify({clicks: counter}), 'utf-8');
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
}

function getClickCounter() {
    const _path = mountDataPath('click_counter')

    try {
        if(fs.existsSync(_path)) {
            return JSON.parse(fs.readFileSync(_path));
        }
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
}

const mountDataPath = (newFilename) => {
    const userDataPath = app.getPath('userData');
    let newPath = path.join(userDataPath, `${newFilename}.json`);

    return newPath;
}

ipcMain.on('click-menu', (event, {clicks})=> {
    // Incrementa o counter
    let newClickCounter = clicks + 1;

    // Escreve os dados em JSON
    setClickCounter(newClickCounter);

    // Devolve o valor incrementado pro renderer process
    event.sender.send('already-clicked', {clicks: newClickCounter})
})

ipcMain.on('recover-counter', (event)=> {
    let output = getClickCounter() ? getClickCounter(): {clicks: 0};
    console.log(output);

    event.sender.send('get-counter', output);
})
