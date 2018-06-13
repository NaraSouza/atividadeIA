var voice = new Wad({
    source  : 'mic',
    tuna   : {
        Tremolo : {
            intensity: 0.5,    //0 to 1
            rate: 4,         //0.001 to 8
            stereoPhase: 0,    //0 to 180
            bypass: 0
        }
    }
})

// You must give your browser permission to use your microphone before calling play().
voice.play()