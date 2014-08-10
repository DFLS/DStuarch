var gui = require('nw.gui');
var clipboard = gui.Clipboard.get();
var win = gui.Window.get();

win.x = screen.width - 200;
win.y = 50;

function loadInfo() {
    $.getJSON("list.json", function(data) {
        $.each(data.emotions, function(i, item) {
            $("#emotion_box").append(
                    "<button class=emotion onclick=emotion(\"" + item.content + "\")>" + item.content + "</button>"
                    );
        });
    });
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

function emotion(emotion_i) {
    clipboard.set(emotion_i, 'text');
    narrowingWindow();
}
;

$(document).ready(function() {

    $("#elf").on("mouseenter", function() {
        enlargeWindow();
    });

    $("s").on("mouseover", function() {
        narrowingWindow();
    });

    loadInfo();
});
