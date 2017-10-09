var Hammer = (function(_super){
    function Hammer(){
        Hammer.super(this);
    }
    Laya.class(Hammer, "Hammer", _super);
    var _proto_ = Hammer.prototype;
    // 开始使用
    _proto_.start = function(){
        Laya.Mouse.hide();
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
        this.onMouseMove();
    };
    // 结束使用
    _proto_.end = function(){
        Laya.Mouse.show();
        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.moMouseDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.moMouseMove);
    };
    _proto_.onMouseDown = function(){
        this.hit.play(0, false);
    };
    _proto_.onMouseMove = function(){
        this.pos(Laya.stage.mouseX-this.width/3, Laya.stage.mouseY-this.height/2);
    }
    return Hammer;
})(HammerUI);