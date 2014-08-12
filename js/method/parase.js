var parase = {
    
    //写入颜文字方法
    writeEmotions: function(tagId) {
        //清空现有颜文字
        $("#emotion_box").html("");

        for (x in emotionData[tagId]) {
            $("#emotion_box").append(
                    "<button class=\"emotion\">" + emotionData[tagId][x].content + "</button>"
                    );
        }

        //重新绑定事件
        $(".emotion").on("click", function() {
            var emotionContent = $(this).text();
            clipboard.set(emotionContent, 'text');
            $(".border_frame").mouseover();
            //narrowingWindow();
            win.hide();
            windowIsShow = false;
        });
    }

};