class StartScene extends egret.Sprite {

    public static GAME_START : string = "GAME_START";
    private firstTF:egret.TextField;
    private sceneManager : SceneManager;


    public constructor() {
        super();
        this.init();
    }


    private init() {
        let sky = this.createBitmapByName("hello_jpg");
        this.addChild(sky);
        // let stageW = this.stage.stageWidth;
        // let stageH = this.stage.stageHeight;

        console.log(1);
        
        let stageW = 1080;
        let stageH = 660;
        let text = new egret.TextField();
        console.log(2);
        
        text.text = "8 Ball Poll";
        text.textColor = 0;
        text.fontFamily =  "微软雅黑";
        text.width = stageW;
        text.height = stageH;
        text.textAlign = egret.HorizontalAlign.CENTER;
        text.verticalAlign = egret.VerticalAlign.TOP;;
        text.y = 60;
        this.addChild(text);

        this.firstTF = new egret.TextField;
        this.firstTF.size = 20;
        this.firstTF.textAlign = egret.HorizontalAlign.CENTER;
        this.firstTF.textColor = 0xffffff;
        this.firstTF.background = true;
        this.firstTF.backgroundColor = 0xd71345;
        this.firstTF.text = "开始游戏";
        this.firstTF.x = stageW/4*3.5 - this.firstTF.width/2;
        this.firstTF.y = stageH/2;
        this.addChild(this.firstTF);
        // this.sceneManager = SceneManager.getInstance();
    }


    public start() {
        this.firstTF.touchEnabled = true;
        this.sceneManager = SceneManager.getInstance();
        this.firstTF.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            let e = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT, false, false);
            e.eventType = GameScene.GAME_PLAYING;
            this.sceneManager.dispatchEvent(e);
            console.log(this);
        }, this);
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}