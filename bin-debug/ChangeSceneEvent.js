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
var ChangeSceneEvent = (function (_super) {
    __extends(ChangeSceneEvent, _super);
    function ChangeSceneEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var _this = _super.call(this, type, bubbles, cancelable) || this;
        _this.eventType = type;
        return _this;
    }
    ChangeSceneEvent.CHANGE_SCENE_EVENT = "CHANGE_SCENE_EVENT";
    return ChangeSceneEvent;
}(egret.Event));
__reflect(ChangeSceneEvent.prototype, "ChangeSceneEvent");
