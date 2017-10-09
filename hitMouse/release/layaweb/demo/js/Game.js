var Game = (function(_super){
    function Game(){
        Game.super(this);
        this.mouses = new Array;
        this.mousesNum = 9;
        this.hitCallBackHd = Laya.Handler.create(this, this.setScore, null, false);
        for(var i = 0; i < this.mousesNum; i++){
            this.box = this.getChildByName("item" + i);
            this.mouse = new Mouse(this.box.getChildByName("normal"), this.box.getChildByName("hit"), 27, this.hitCallBackHd, this.box.getChildByName("scoreImg"));
            this.mouses.push(this.mouse);
        }

        this.hammer = new Hammer();
        this.addChild(this.hammer);
        this.hammer.visible = false;

        // 切片组件赋值方式
        // this.scoreNum.dataSource = {item0 : { index: 5}, item1: { index: 6}};
        // this.mouse = new Mouse(this.normal, this.hit, 27);
        
    }
    // 注册类
    // 第一个参数：主函数
    // 第二个参数：路径
    // 第三个参数：父类
    Laya.class(Game, "Game", _super);

    var _proto_ = Game.prototype;
    _proto_.isShow = function(){
        // this.mouse.show();
        this.timeBar.value -= (1/10);
        if(this.timeBar.value <= 0){
            this.gameOver();
            return;
        }
        // 随机从树洞中出现地鼠
        this.index = Math.floor(Math.random()*this.mousesNum);
        this.mouses[this.index].show();
    };

    _proto_.gameStart = function(){
        // 设置进度条的初始值
        this.timeBar.value = 1;
        // 存储得分
        this.score = 0;
        this.updateScore();
        this.hammer.visible = true;
        this.hammer.start();
        Laya.timer.loop(1000, this, this.isShow);
    };

    _proto_.gameOver = function(){
        Laya.timer.clear(this, this.isShow);
        this.hammer.visible = false;
        this.hammer.end();
        if(!LayaSample.gameOver){
            LayaSample.gameOver = new GameOver();
        }
        LayaSample.gameOver.centerX = 0;
        LayaSample.gameOver.centerY = 40;
        LayaSample.gameOver.setScore(this.score);
        Laya.stage.addChild(LayaSample.gameOver);
    };
    _proto_.setScore = function(type){
        this.score += (type == 1 ? -100 : 100);
        if(this.score <= 0){
            this.score = 0;
        }
        this.updateScore();
    };
    _proto_.updateScore = function(){
        this.data = {};
        this.temp = this.score;
        for(var i = 9; i >= 0; i--){
            this.data["item" + i] = { index: Math.floor(this.temp%10) };
            this.temp /= 10;
        }
        this.scoreNum.dataSource = this.data;
    };
    return Game;
})(GameUI);