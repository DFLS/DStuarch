var gui = require('nw.gui');
var clipboard = gui.Clipboard.get();
var win = gui.Window.get();

win.x = screen.width - 200;
win.y = 50;

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

$(document).ready(function() {

    $.getJSON("list.json", function(data) {
        $.each(data.emotions, function(i, item) {
            $("#emotion_box").append(
                    "<button class=\"emotion\">" + item.content + "</button>"
                    );

            //绑定内容
            $(".emotion").on("click", function() {
                var emotionContent = $(this).html();
                clipboard.set(emotionContent, 'text');
                $(".border_frame").mouseover();
                //narrowingWindow();
            });

        });
    });

    $("#elf").on("mouseenter", function() {
        enlargeWindow();
    });

    $(".border_frame").on("mouseover", function() {
        if (win.width >= 140)
            narrowingWindow();
    });

});
