const { app, BrowserWindow } = require('electron')
const path = require('path')


const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      autoHideMenuBar: true,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: false,
        devTools: true
      }
    })
  
    win.loadFile('index.html')
}

app.whenReady().then(()=> {
    createWindow()
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})