class ChangeSceneEvent extends egret.Event {
    public static CHANGE_SCENE_EVENT : string = "CHANGE_SCENE_EVENT";
    public eventType                 : any;
    public obj                       : any;

    public constructor(type : string, bubbles :boolean = false, cancelable : boolean = false) {
        super(type, bubbles, cancelable);
        this.eventType = type;
    }

}