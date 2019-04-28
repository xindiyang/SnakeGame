/* 
  创建蛇的构造函数
*/
function Snake() {
    //蛇🐍移动的方向
    this.derection = 'right';
    this.bodys = [{
            x: 3,
            y: 0,
            className: 'sanke snake-head'
        }, {
            x: 2,
            y: 0,
            className: 'sanke snake-body'
        },
        {
            x: 1,
            y: 0,
            className: 'sanke snake-body'
        },
    ]
};
//根据蛇节的绘制蛇
Snake.prototype.drawSnake = function () {
    //遍历蛇节的个数，来绘制蛇
    for (let index = 0; index < this.bodys.length; index++) {
        

    }
}