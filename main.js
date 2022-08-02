const { app, BrowserWindow, Menu, Tray } = require('electron')
const path = require('path')


const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      autoHideMenuBar: true,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: false,
        devTools: true,
        nodeIntegration: true
      },
      alwaysOnTop: true
    })
  
    win.loadFile('index.html')    

}

app.whenReady().then(()=> {
    createWindow()
    let tray = new Tray('./favicon.ico')
    const contextMenu = Menu.buildFromTemplate([
      {label: 'Item1', type: 'checkbox'},
      {type: 'separator'},
      {label: 'Item2', type: 'radio'},
    ])
    tray.setToolTip('Electron teste tray')
    tray.setContextMenu(contextMenu)
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})