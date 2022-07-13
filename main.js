const { app, BrowserWindow  } = require('electron');

app.whenReady().then(()=> {

    let win = new BrowserWindow({
        width:  800,
        height: 600,
        webPreferences: {
            devTools: false,
            accessibleTitle: true
        },
        icon: `file://${__dirname}/dist/my-ticket/favicon.ico`,
        title: 'My Ticket'
    })

    // win.loadURL(`file://${__dirname}/dist/index.html`);
    win.loadURL('http://localhost:4200');
});

app.on('window-all-closed', ()=> {
    if (process.platform !== 'darwin') app.quit()
})