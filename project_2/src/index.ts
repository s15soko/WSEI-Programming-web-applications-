interface IAudios {
    [key: string]: HTMLAudioElement;
} 

class Keyboard
{
    load(): IAudios
    {
        let keyTypes = ["boom", "clap", "hihat", "kick", "openhat", "ride", "snare", "tink", "tom"];
        let audios: IAudios  = {};

        keyTypes.forEach(keyType => {
            let sound: (HTMLAudioElement | null) = document.querySelector('[data-sound="boom"]');

            if(sound != null) {
                audios[keyType] = sound;
            }
        });

        return audios;
    }

    play()
    {
        
    }
}

class DefaultKeyboardMapper
{
    static getMapper()
    {
        return {
            'e': "boom",
            'r': "clap",
            't': "hihat",
            'y': "kick",
            'u': "openhat",
            'd': "ride",
            'f': "snare",
            'g': "tink",
            'h': "tom",
        };
    }
}

function onKeyPress(event: KeyboardEvent)
{
    let key = String(event.key).toLocaleLowerCase();
    let time = event.timeStamp;

    let mapper = DefaultKeyboardMapper.getMapper();

    console.log(`onKeyPress ${key} ${time}`);
}

function onClick(event: Event)
{
    var audios: any;


    
    var audio = new Audio('public/sounds/boom.wav'); 
}

//

let keyboardPanel = document.getElementById("keyboardPanel");
if(keyboardPanel != null) {
    let keys = keyboardPanel.querySelectorAll(".keyboardKey");
    if(keys != null) {
        keys.forEach(key => {
            key.addEventListener("click", onClick);
        });
    }
}

document.addEventListener("keypress", onKeyPress);