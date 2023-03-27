class Player {
    constructor(img_file) {
        this.sprite = PIXI.Sprite.from(img_file)
        this.sprite.x = 50
        this.sprite.y = 50
        this.hp = 50
    }
}