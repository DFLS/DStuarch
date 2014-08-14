var parase = {
    //写入颜文字方法
    writeEmotions: function(tagId) {
        //清空现有颜文字
        $("#emotion_box").html("");

        for (x in emotionData[tagId]) {
            if (!emotionData[tagId][x].revert)
                var buttonContent = emotionData[tagId][x].content;
            else
                var buttonContent = emotionData[tagId][x].name;
            $("#emotion_box").append(
                    '<button class="emotion" content="' + emotionData[tagId][x].content + '">' + buttonContent + '</button>'
                    );
        }

        //重新绑定事件
        $(".emotion").on("click", function() {
            var emotionContent = $(this).attr("content");
            clipboard.set(emotionContent, 'text');
            win.hide();
            windowIsShow = false;
        });
    }

};