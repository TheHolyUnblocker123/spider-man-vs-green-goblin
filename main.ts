controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(assets.image`Green Goblin`, SpriteKind.Enemy)
})
let mySprite2: Sprite = null
let mySprite = sprites.create(assets.image`Spider-Man`, SpriteKind.Player)
controller.moveSprite(mySprite)
music.play(music.stringPlayable("C5 B A G G A B C5 ", 120), music.PlaybackMode.UntilDone)
