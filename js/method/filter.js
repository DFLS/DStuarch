var filter = {
    //获取相对位置方法
    relativePosition: function(selector, aim) {
        var returnPosition = [];
        returnPosition["x"] = $(selector).position().left;
        returnPosition["y"] = $(selector).position().top;
        console.log(returnPosition);
        return returnPosition;
    },
    //对齐背景相对位置方法
    alignBackgroundPosition: function(selector, aim) {
        var relativePosition = this.relativePosition(selector, aim);
        $(selector).css("background-position", -relativePosition.x + "px " + -relativePosition.y + "px");
    }
};