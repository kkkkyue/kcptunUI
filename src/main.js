// ./app/main.js

//采用javascript严格模式
'use strict';

// 应用的控制模块
const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu
const Tray = electron.Tray
const kcpTOOL = require('./backend/kcp.js');

var appIcon = null
// 创建原生浏览器窗口的模块
const BrowserWindow = electron.BrowserWindow;
var mainWindow = null;

//var aboutWindow = null;

app.on('window-all-closed', function () {
  kcpTOOL.killKCP('28989', function () {
    if (process.platform != 'darwin') {
      app.quit();
    }
  })

});

app.on('ready', function () {

  appIcon = new Tray( __dirname +'/ico.png')
  var contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' }
  ])
  appIcon.setToolTip('This is my application.')
  appIcon.setContextMenu(contextMenu)

  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  //mainWindow.hide();

  //mainWindow.openDevTools();

  mainWindow.on('closed', function () {

    mainWindow = null;
  });

});