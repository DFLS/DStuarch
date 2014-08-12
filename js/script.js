var windowIsShow = true;
var gui = require('nw.gui');
var clipboard = gui.Clipboard.get();
var win = gui.Window.get();
var emotionData;

function switchWindow() {
    if (windowIsShow) {
        win.hide();
        windowIsShow = false;
    } else {
        win.show();
        win.focus();
        windowIsShow = true;
    }
}

//注册快捷键
var option = {
    key: "Alt+Q",
    active: function() {
        console.log("Global desktop keyboard shortcut: " + this.key + " active.");
    },
    failed: function(msg) {
        console.log(msg);
    }
};
var shortcut = new gui.Shortcut(option);
gui.App.registerGlobalHotKey(shortcut);
shortcut.on('active', function() {
    switchWindow();
});

//注册托盘图标

var menu = new gui.Menu();
menu.append(new gui.MenuItem({
    label: 'Exit',
    click: function() {
        return win.close();
    }
}));
var tray = new gui.Tray({
    title: 'DStuarch',
    tooltip: 'Open DStuarch',
    icon: './images/tray.png',
    menu: menu
});
tray.on('click', function() {
    switchWindow();
});

//ajax 加载颜文字文件
$.getJSON("list.json", function(data) {
    emotionData = data;
    $(document).ready(function() {
        parase.writeEmotions('useful');
    });
});