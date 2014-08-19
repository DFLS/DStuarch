var windowIsShow = true;
var fs = require('fs');
var gui = require('nw.gui');
var clipboard = gui.Clipboard.get();
var win = gui.Window.get();
var menu = new gui.Menu();
var emotionData;
var activeShortcut;

Stuarch.readSettingFile();

var initialization = {
    regActiveShortcut: function() {
        //注册快捷键
        var activeShortcutOpt = {
            key: Stuarch.settingOptions.shortcut,
            active: function() {
                console.log("Global desktop keyboard shortcut: " + this.key + " active.");
            },
            failed: function(msg) {
                console.log(msg);
            }
        };
        activeShortcut = new gui.Shortcut(activeShortcutOpt);
        gui.App.registerGlobalHotKey(activeShortcut);
        activeShortcut.on('active', function() {
            switchWindow();
        });
    }
};