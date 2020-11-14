class SceneManager extends egret.Sprite {
    public constructor() {
        super();
        this.init();
    }

    private static instance       : SceneManager;
    private startGameScene : StartScene; 
    private gamingScene    : GameScene;

    private init() {
        this.startGameScene = new StartScene();
        this.gamingScene = new GameScene();
    }

    public start() {
        this.addChild(this.startGameScene);
        this.startGameScene.start();
        this.addEventListener(ChangeSceneEvent.CHANGE_SCENE_EVENT, this.onChangeScane, this);
    }

    //侦听器
    public onChangeScane(e : ChangeSceneEvent) {
        //e.obj.end();
        this.removeChildren();

        switch (e.eventType) {
            case StartScene.GAME_START : 
                this.startGameScene.start();
                this.addChild(this.startGameScene);
                break;

            case GameScene.GAME_PLAYING :
                this.gamingScene.start();
                this.addChild(this.gamingScene);
                break;

            default : 
                break;
        }
    }

    public static getInstance() : SceneManager {
        if (SceneManager.instance == null) {
            SceneManager.instance = new SceneManager();
        }

        return SceneManager.instance;
    }
}