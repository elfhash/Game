var Mouse = (function(){
    function Mouse(normalState, hitState, downY, hitCallBackHd, scoreImg){
        this.normalState = normalState;
        this.hitState = hitState;
        // 最低点
        this.downY = downY;
        // 最高点
        this.upY = this.normalState.y;
        this.hitCallBackHd = hitCallBackHd;
        this.scoreImg = scoreImg;
        this.scoreY = this.scoreImg.y;
        this.reset();
        this.normalState.on(Laya.Event.CLICK, this, this.hit);
    }
    var _proto_ = Mouse.prototype;
    // 重置
    _proto_.reset = function(){
        // 是否激活状态
        this.isActive = false;
        // 是否显示
        this.isShow = false;
        // 是否隐藏
        this.isHit = false;
        this.scoreImg.visible = false;
        this.normalState.visible = false;
        this.hitState.visible = false;
    };
    // 显示
    _proto_.show = function(){
        if(this.isActive) return;
        this.isActive = true;
        this.isShow = true;
        this.type = Math.random() < 0.3 ? 1 : 2;
        this.normalState.skin = "comp/mouse_normal_" + this.type + ".png";
        this.hitState.skin = "comp/mouse_hit_" + this.type + ".png";
        this.scoreImg.skin = "comp/score_" + this.type + ".png"
        this.normalState.y = this.downY;
        this.normalState.visible = true;
        // 缓动动画
        // 第一个参数：操作对象
        // 第二个参数：变化的属性列表
        // 第三个参数：完成时间
        // 第四个参数：缓动类型
        // 第五个参数：回调
        // 第六个参数：延迟执行时间(立即执行不用填)
        Laya.Tween.to(this.normalState, {y: this.upY}, 500, Laya.Ease.backOut, Laya.Handler.create(this, this.showComplete));
    };
    // 停留
    _proto_.showComplete = function(){
        if(this.isShow && !this.isHit){
            Laya.timer.once(1000, this, this.hide);
        }
    };
    // 消失
    _proto_.hide = function(){
        if(this.isShow && !this.isHit){
            this.isShow = false;
            Laya.Tween.to(this.normalState, {y: this.downY}, 300, Laya.Ease.backIn, Laya.Handler.create(this, this.reset));
        }
    };
    // 受击
    _proto_.hit = function(){
        if(this.isShow && !this.isHit){
            this.isShow = true;
            this.isHit = true;
            this.normalState.visible = false;
            this.hitState.visible = true;
            this.hitCallBackHd.runWith(this.type);
            Laya.timer.clear(this, this.hide);
            Laya.timer.once(500, this, this.reset);
            this.showScore();
        }
    };
    // 显示飘字效果
    _proto_.showScore = function(){
        this.scoreImg.y = this.scoreY + 30;
        this.scoreImg.scale(0, 0);
        this.scoreImg.visible = true;
        Laya.Tween.to(this.scoreImg, { y : this.scoreY, scaleX : 1, scaleY :1 }, 300, Laya.Ease.backOut);
    };
    return Mouse;
})();