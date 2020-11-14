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
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    SceneManager.prototype.init = function () {
        this.startGameScene = new StartScene();
        this.gamingScene = new GameScene();
    };
    SceneManager.prototype.start = function () {
        this.addChild(this.startGameScene);
        this.startGameScene.start();
        this.addEventListener(ChangeSceneEvent.CHANGE_SCENE_EVENT, this.onChangeScane, this);
    };
    //侦听器
    SceneManager.prototype.onChangeScane = function (e) {
        //e.obj.end();
        this.removeChildren();
        switch (e.eventType) {
            case StartScene.GAME_START:
                this.startGameScene.start();
                this.addChild(this.startGameScene);
                break;
            case GameScene.GAME_PLAYING:
                this.gamingScene.start();
                this.addChild(this.gamingScene);
                break;
            default:
                break;
        }
    };
    SceneManager.getInstance = function () {
        if (SceneManager.instance == null) {
            SceneManager.instance = new SceneManager();
        }
        return SceneManager.instance;
    };
    return SceneManager;
}(egret.Sprite));
__reflect(SceneManager.prototype, "SceneManager");
