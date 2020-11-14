var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    StartScene.prototype.init = function () {
        var sky = this.createBitmapByName("hello_jpg");
        this.addChild(sky);
        // let stageW = this.stage.stageWidth;
        // let stageH = this.stage.stageHeight;
        console.log(1);
        var stageW = 1080;
        var stageH = 660;
        var text = new egret.TextField();
        console.log(2);
        text.text = "8 Ball Poll";
        text.textColor = 0;
        text.fontFamily = "微软雅黑";
        text.width = stageW;
        text.height = stageH;
        text.textAlign = egret.HorizontalAlign.CENTER;
        text.verticalAlign = egret.VerticalAlign.TOP;
        ;
        text.y = 60;
        this.addChild(text);
        this.firstTF = new egret.TextField;
        this.firstTF.size = 20;
        this.firstTF.textAlign = egret.HorizontalAlign.CENTER;
        this.firstTF.textColor = 0xffffff;
        this.firstTF.background = true;
        this.firstTF.backgroundColor = 0xd71345;
        this.firstTF.text = "开始游戏";
        this.firstTF.x = stageW / 4 * 3.5 - this.firstTF.width / 2;
        this.firstTF.y = stageH / 2;
        this.addChild(this.firstTF);
        // this.sceneManager = SceneManager.getInstance();
    };
    StartScene.prototype.start = function () {
        var _this = this;
        this.firstTF.touchEnabled = true;
        this.sceneManager = SceneManager.getInstance();
        this.firstTF.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var e = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT, false, false);
            e.eventType = GameScene.GAME_PLAYING;
            _this.sceneManager.dispatchEvent(e);
            console.log(_this);
        }, this);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    StartScene.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    StartScene.GAME_START = "GAME_START";
    return StartScene;
}(egret.Sprite));
__reflect(StartScene.prototype, "StartScene");
