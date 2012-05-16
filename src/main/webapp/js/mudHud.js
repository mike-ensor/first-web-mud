function blinkCursorOff() {
    'use strict';
    document.getElementById('activeCursor').style.color = "#000000";
    var blinked=setTimeout("blinkCursorOn()",500)
}

function blinkCursorOn() {
    'use strict';
    document.getElementById('activeCursor').style.color = '#00ff00';
    var blinked=setTimeout("blinkCursorOff()",500)
}