class Particle {
    constructor(img_file, pos, theta, speed, acceleration) {
        this.sprite = PIXI.Sprite.from(img_file)
        this.sprite.x = pos[0]
        this.sprite.y = pos[1]

        this.angle = theta 
        this.speed = speed 
        this.acceleration = acceleration

        this.v_x = Math.cos(this.angle) * this.speed
        this.v_y = Math.sin(this.angle) * this.speed 
    }

    move = () => {
        // accelerates
        this.v_x += this.acceleration
        this.v_y += this.acceleration

        this.sprite.x += this.v_x
        this.sprite.y += this.v_y
    }
}