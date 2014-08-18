var windowIsShow = true;
var fs=require('fs');
var gui = require('nw.gui');
var clipboard = gui.Clipboard.get();
var win = gui.Window.get();
var menu = new gui.Menu();
var emotionData;

Stuarch.readSettingFile();