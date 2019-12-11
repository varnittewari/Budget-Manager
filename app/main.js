const electron = require('electron');
const url = require('url');
const path = require('path');
const {app, BrowserWindow, Menu} = electron;

let mainWindow;

app.on('ready', function() {
    mainWindow = new BrowserWindow({ width:800, height: 470, frame: false});
    mainWindow.setMenuBarVisibility(false)
    mainWindow.Title
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol:'file',
        slashes: true
    }));
});

const saveMenuTemplate = [
    {
        label: ''
    }
];