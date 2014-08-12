var windowIsShow = true;
var gui = require('nw.gui');
var clipboard = gui.Clipboard.get();
var win = gui.Window.get();
var emotionData;
//win.x = screen.width - 200;
//win.y = 50;

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

function enlargeWindow() {
    $("#program_icon").hide();
    win.x = win.x - 138;
    win.width = 340;
    win.height = 420;
}

function narrowingWindow() {
    $("#program_icon").show();
    win.x = win.x + 138;
    win.width = 138;
    win.height = 39;
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

$(document).ready(function() {

    //parase.writeEmotions('useful');

//    $("#elf").on("mouseenter", function() {
//        enlargeWindow();
//    });

//    $(".border_frame").on("mouseover", function() {
//        if (win.width >= 140)
//            narrowingWindow();
//    });

});
