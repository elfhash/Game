var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameUI=(function(_super){
		function GameUI(){
			
		    this.timeBar=null;
		    this.scoreNum=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);
		}
		GameUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":0,"x":0,"width":800,"skin":"comp/back.png","height":600}},{"type":"Box","props":{"y":192,"x":145,"name":"item0"},"child":[{"type":"Image","props":{"y":3,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":86,"skin":"comp/mask-01.png"}},{"type":"Image","props":{"y":18,"x":64,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":188,"x":345,"name":"item1"},"child":[{"type":"Image","props":{"y":3,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":89,"x":-1,"skin":"comp/mask-02.png"}},{"type":"Image","props":{"y":18,"x":64,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":193,"x":556,"name":"item2"},"child":[{"type":"Image","props":{"y":3,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"x":1,"skin":"comp/mask-03.png"}},{"type":"Image","props":{"y":18,"x":64,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":289,"x":116,"name":"item3"},"child":[{"type":"Image","props":{"y":3,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":89,"x":0,"skin":"comp/mask-04.png"}},{"type":"Image","props":{"y":18,"x":64,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":290,"x":344,"name":"item4"},"child":[{"type":"Image","props":{"y":3,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":90,"x":1,"skin":"comp/mask-05.png"}},{"type":"Image","props":{"y":18,"x":64,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":289,"x":558,"name":"item5"},"child":[{"type":"Image","props":{"y":3,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":90,"x":3,"skin":"comp/mask-06.png"}},{"type":"Image","props":{"y":18,"x":64,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":395,"x":107,"name":"item6"},"child":[{"type":"Image","props":{"y":3,"x":5,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":88,"x":-3,"skin":"comp/mask-07.png"}},{"type":"Image","props":{"y":18,"x":64,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":399,"x":348,"name":"item7"},"child":[{"type":"Image","props":{"y":3,"x":4,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":18,"x":4,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"x":-2,"skin":"comp/mask-08.png"}},{"type":"Image","props":{"y":18,"x":64,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":404,"x":583,"name":"item8"},"child":[{"type":"Image","props":{"y":1,"x":4,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":18,"x":3,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":87,"x":-4,"skin":"comp/mask-09.png"}},{"type":"Image","props":{"y":18,"x":64,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":5,"x":3,"width":237,"var":"timeBar","value":1,"skin":"comp/progress_time.png","height":23}},{"type":"Box","props":{"y":39,"x":27,"var":"scoreNum"},"child":[{"type":"Clip","props":{"skin":"comp/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":18,"skin":"comp/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"comp/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"comp/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"comp/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"comp/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"comp/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"comp/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"comp/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"comp/clip_number.png","name":"item9","clipX":10}}]}]};
		return GameUI;
	})(View);
var GameOverUI=(function(_super){
		function GameOverUI(){
			
		    this.restartBtn=null;
		    this.scoreNum=null;

			GameOverUI.__super.call(this);
		}

		CLASS$(GameOverUI,'ui.GameOverUI',_super);
		var __proto__=GameOverUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameOverUI.uiView);
		}
		GameOverUI.uiView={"type":"View","props":{"width":500,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"comp/overBg.png","height":400,"sizeGrid":"10,10,10,10"}},{"type":"Image","props":{"y":30,"x":21,"skin":"comp/total Score.png"}},{"type":"Button","props":{"y":298,"x":161,"var":"restartBtn","stateNum":"2","skin":"comp/btn_restart.png"}},{"type":"Box","props":{"y":188,"x":160,"var":"scoreNum"},"child":[{"type":"Clip","props":{"skin":"comp/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":18,"skin":"comp/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"comp/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"comp/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"comp/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"comp/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"comp/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"comp/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"comp/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"comp/clip_number.png","name":"item9","clipX":10}}]}]};
		return GameOverUI;
	})(View);
var GameStartUI=(function(_super){
		function GameStartUI(){
			
		    this.startBtn=null;

			GameStartUI.__super.call(this);
		}

		CLASS$(GameStartUI,'ui.GameStartUI',_super);
		var __proto__=GameStartUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStartUI.uiView);
		}
		GameStartUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":55,"x":38,"skin":"comp/help.png"}},{"type":"Button","props":{"y":429,"x":311,"var":"startBtn","stateNum":"2","skin":"comp/btn_start.png"}}]};
		return GameStartUI;
	})(View);
var HammerUI=(function(_super){
		function HammerUI(){
			
		    this.hit=null;

			HammerUI.__super.call(this);
		}

		CLASS$(HammerUI,'ui.HammerUI',_super);
		var __proto__=HammerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HammerUI.uiView);
		}
		HammerUI.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":60,"x":59,"width":98,"skin":"comp/hammer.png","pivotY":49.6551724137931,"pivotX":55.172413793103445,"height":77},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"y":[{"value":60,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0}],"x":[{"value":59,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0}],"rotation":[{"value":20,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":0},{"value":40,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};
		return HammerUI;
	})(View);