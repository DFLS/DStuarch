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
    writeSettingFile: function(isDefault) {
        var optObject;
        isDefault = typeof (isDefault) == 'undefined' ? true : isDefault;
        if (isDefault) {
            optObject = this.defaultSettingOptions;
        } else {
            optObject = Stuarch.settingOptions;
        }
        var SettingFileLocation = this.settingFilePath + this.settingFile;
        var settingJSONString = JSON.stringify(optObject);
        console.log(optObject);
        fs.writeFileSync(SettingFileLocation, settingJSONString);
    }
};