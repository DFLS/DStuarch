var parase = {
    //写入颜文字方法
    writeEmotions: function(tagId) {
        var buttonContent;
        //清空现有颜文字
        $("#emotion_box").html("");

        for (x in emotionData[tagId]) {
            if (!emotionData[tagId][x].revert)
                buttonContent = emotionData[tagId][x].content;
            else
                buttonContent = emotionData[tagId][x].name;
            $("#emotion_box").append(
                    '<button class="emotion" content="' + emotionData[tagId][x].content + '">' + buttonContent + '</button>'
                    );
        }

        //重新绑定事件
        $(".emotion").click(function() {
            var emotionContent;
            if (Stuarch.settingOptions.antiEmoji)
                emotionContent = parase.antiEmoji($(this).attr("content"));
            else
                emotionContent = $(this).attr("content");
            clipboard.set(emotionContent, 'text');
            win.hide();
            windowIsShow = false;
        });
    },
    antiEmoji: function(input) {
        var output = input;
        var emojiList = [":)", ":(", ":D", ":3", "=)", "=(", "-_-", "T_T"];
        for (x in emojiList) {
            var endPlace = emojiList[x].length;
            var replacement = emojiList[x].slice(0, 1) + "\uFEFF" + emojiList[x].slice(1, endPlace);
            output = output.replace(emojiList[x], replacement);
        }
        return output;
    }
};