var Stuarch = {
    settingFilePath: '../usr/',
    settingFile: 'setting.json',
    settingOptions: {},
    defaultSettingOptions: {
        shortcut: "Alt+Q",
        antiEmoji: false
    },
    readSettingFile: function() {
        var SettingFileLocation = this.settingFilePath + this.settingFile;
        if (fs.existsSync(SettingFileLocation)) {
            this.settingOptions = JSON.parse(fs.readFileSync(SettingFileLocation).toString());
        } else {
            this.settingOptions = this.defaultSettingOptions;
            this.writeSettingFile();
        }
    },
    writeSettingFile: function() {
        var SettingFileLocation = this.settingFilePath + this.settingFile;
        var settingJSONString = JSON.stringify(this.defaultSettingOptions);
        fs.writeFileSync(SettingFileLocation, settingJSONString);
    }
};