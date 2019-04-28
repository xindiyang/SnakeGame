/* 
食物的构造函数
   
*/
function Food() {
    //向Food对象中添加属性
    // x表示横坐标
    // x表示纵坐标
    this.x = 0;
    this.y = 0;
    //食物对应的元素
    this.$div = $('<div></div>').appendTo('.map').addClass('food');
}

//在食物对象的原型中添加随机获取食物位置的方法
Food.prototype.randomLoaction = function () {
    //计算横向最多能放多少个位置放食物
    var maxIndexX = $('.map').width() / 20;
    //计算纵向向最多能放多少个位置放食物
    var maxIndexY = $('.map').height() / 20;
    //随机横向的位置
    this.x = parseInt(Math.random() * maxIndexX) * 20;
    //随机纵向的位置
    this.y = parseInt(Math.random() * maxIndexY) * 20;
    //设置食物对应的div的位置
    this.$div.css({
        left: this.x,
        top: this.y
    });
}