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
    key: Stuarch.settingOptions.shortcut,
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
    $("#logo").on({
        "dblclick": function() {
            gui.Window.open('about.html', {
                position: 'center',
                "toolbar": false,
                "frame": false,
                width: 337,
                height: 452
            });
        },
        "contextmenu": function() {
            gui.Window.open('settings.html', {
                position: 'center',
                "toolbar": false,
                "frame": false,
                width: 475,
                height: 535
            });
            win.close(true);
        }
    });

    $("nav>ul>li").each(function() {
        $(this).html('<div>' + $(this).attr("groupID") + '</div>');
    });


    $("#header_hotarea").on({
        mouseenter: function() {
            $("header>nav").addClass("selected");
            $("header>nav").children("div").addClass("selected");
        }
    });

    $("header").on({
        mouseleave: function() {
            $("header>nav").removeClass("selected");
            $("header>nav").children("div").removeClass("selected");
        }
    });


    $("nav>ul>li").on({
        click: function() {
            $("nav>ul>li").each(function() {
                $(this).removeClass("selected");
            });
            $(this).addClass("selected");
            var hueDegree = $("nav").find("li").index($(this)) * 60;
            parase.writeEmotions($(this).attr("groupID"));
            $("header").css("background", $(this).css("background-color"));
            var color = $(this).css("background-color").replace("rgb", "rgba");
            var color = color.replace(")", ",0.2)");
            $("header").css("box-shadow", "0 -3px 3px " + color);
            $("button,footer").css("-webkit-filter", "hue-rotate(" + hueDegree + "deg)");
        },
        mouseenter: function() {
            $(this).addClass("selected");
            $(this).children("div").addClass("selected");
        },
        mouseleave: function() {
            $(this).removeClass("selected");
            $(this).children("div").removeClass("selected");
        }
    });
    $("nav>ul>li").removeClass("selected");
});