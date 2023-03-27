import * as PIXI from 'pixi.js'

        // creates and displays our pixi app
        let app = new PIXI.Application({width: 640, height: 360})
        document.body.appendChild(app.view)

        // load a sprite. asynchronously
        let sprite = PIXI.Sprite.from("1.png")
        sprite.x = 50
        sprite.y = 50
        app.stage.addChild(sprite)

        // infinite loop to run the application
        let elapsed = 0.0 // time, in seconds, that the app has been running
        // run a callback to make a callback every frame and add the time that has elapsed
        app.ticker.add((delta) => {
            elapsed += delta
            sprite.x = 100.0 + Math.cos(elapsed/50) * 100
        })