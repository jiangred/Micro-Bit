music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showIcon(IconNames.EigthNote)
    basic.pause(1000)
})
