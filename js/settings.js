var panel = {
    collectSettings: function() {
        Stuarch.settingOptions.shortcut = $("#shortcut").val();
        Stuarch.settingOptions.antiEmoji = $("#anti_emoji").is(":checked");
        Stuarch.writeSettingFile(false);
    },
    readSettings: function() {
        $("#shortcut").val(Stuarch.settingOptions.shortcut);
        if (Stuarch.settingOptions.antiEmoji)
            $("#anti_emoji").attr("checked", "checked");
    }
};

$(document).ready(function() {
    panel.readSettings();
    $("input[type='text']").on("blur", function() {
        panel.collectSettings();
    });

    $("input[type='radio'],input[type='checkbox']").on("change", function() {
        panel.collectSettings();
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