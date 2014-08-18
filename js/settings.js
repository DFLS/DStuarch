var panel = {
    readSettings: function() {
        Stuarch.settingOptions.shortcut = $("#shortcut").val();
        Stuarch.settingOptions.antiEmoji = $("#anti_emoji").val();
    }
};

$(document).ready(function() {
    $("#shortcut").val(Stuarch.settingOptions.shortcut);
    $("#anti_emoji").val(Stuarch.settingOptions.antiEmoji);


    $("input[type='text']").on("blur", function() {
        Stuarch.writeSettingFile();
    });

    $("input[type='radio'],input[type='checkbox']").on("change", function() {
        Stuarch.writeSettingFile();
    });

    $("#close_icon").on("click", function() {
        gui.Window.open('index.html', {
            "icon": "icon.ico",
            "toolbar": false,
            "width": 340,
            "height": 420,
            "resizable": false,
            "frame": false,
            "always-on-top": true,
            "show_in_taskbar": false
        });

        win.close(true);
    });
});