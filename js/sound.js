var _sounds = {};
load_sounds({
    click: "res/sounds/click.mp3"
});

function load_sounds(sounds, onload) {
    // var audioCount = 0;
    for (let name in sounds) {
        // audioCount++;
        var audio = new Audio(sounds[name]);
        // audio.addEventListener("canplaythrough", () => {
        //     audioCount--;
        //     if (audioCount <= 0) {
        //         onload();
        //     }
        // })
        _sounds[name] = audio;
    }
}

function sfx(name) {
    _sounds[name].play();
}