const keys = [
    [
        { 'en': ['`', '~'], 'ru': ['ё', 'Ё'], 'keyCode': 192, 'class': 'Backquote' },
        { 'en': ['1', '!'], 'ru': ['1', '!'], 'keyCode': 49, 'class': 'Digit1' },
        { 'en': ['2', '@'], 'ru': ['2', '"'], 'keyCode': 50, 'class': 'Digit2' },
        { 'en': ['3', '#'], 'ru': ['3', '№'], 'keyCode': 51, 'class': 'Digit3' },
        { 'en': ['4', '$'], 'ru': ['4', ';'], 'keyCode': 52, 'class': 'Digit4' },
        { 'en': ['5', '%'], 'ru': ['5', '%'], 'keyCode': 53, 'class': 'Digit5' },
        { 'en': ['6', '^'], 'ru': ['6', ':'], 'keyCode': 54, 'class': 'Digit6' },
        { 'en': ['7', '&'], 'ru': ['7', '?'], 'keyCode': 55, 'class': 'Digit7' },
        { 'en': ['8', '*'], 'ru': ['8', '*'], 'keyCode': 56, 'class': 'Digit8' },
        { 'en': ['9', '('], 'ru': ['9', '('], 'keyCode': 57, 'class': 'Digit9' },
        { 'en': ['0', ')'], 'ru': ['0', ')'], 'keyCode': 48, 'class': 'Digit0' },
        { 'en': ['-', '_'], 'ru': ['-', '_'], 'keyCode': 189, 'class': 'Minus' },
        { 'en': ['=', '+'], 'ru': ['=', '+'], 'keyCode': 187, 'class': 'Equal' },
        { 'en': ['Backspace', 'Backspace'], 'ru': ['Backspace', 'Backspace'], 'keyCode': 8, 'class': 'Backspace', 'sizeClass': 'backspace' }
    ],
    [
        { 'en': ['tab', 'tab'], 'ru': ['tab', 'tab'], 'keyCode': 9, 'class': 'Tab', 'sizeClass': 'tab' },
        { 'en': ['q', 'Q'], 'ru': ['й', 'Й'], 'keyCode': 81, 'class': 'KeyQ' },
        { 'en': ['w', 'W'], 'ru': ['ц', 'Ц'], 'keyCode': 87, 'class': 'KeyW' },
        { 'en': ['e', 'E'], 'ru': ['у', 'У'], 'keyCode': 69, 'class': 'KeyE' },
        { 'en': ['r', 'R'], 'ru': ['к', 'К'], 'keyCode': 82, 'class': 'KeyR' },
        { 'en': ['t', 'T'], 'ru': ['е', 'Е'], 'keyCode': 84, 'class': 'KeyT' },
        { 'en': ['y', 'Y'], 'ru': ['н', 'Н'], 'keyCode': 89, 'class': 'KeyY' },
        { 'en': ['u', 'U'], 'ru': ['г', 'Г'], 'keyCode': 85, 'class': 'KeyU' },
        { 'en': ['i', 'I'], 'ru': ['ш', 'Ш'], 'keyCode': 73, 'class': 'KeyI' },
        { 'en': ['o', 'O'], 'ru': ['щ', 'Щ'], 'keyCode': 79, 'class': 'KeyO' },
        { 'en': ['p', 'P'], 'ru': ['з', 'З'], 'keyCode': 80, 'class': 'KeyP' },
        { 'en': ['[', '{'], 'ru': ['х', 'Х'], 'keyCode': 219, 'class': 'BracketLeft' },
        { 'en': [']', '}'], 'ru': ['ъ', 'Ъ'], 'keyCode': 221, 'class': 'BracketRight' },
        { 'en': ['\\', '|'], 'ru': ['\\', '/'], 'keyCode': 220, 'class': 'Backslash' }
    ],
    [
        { 'en': ['capsLk', 'capsLk'], 'ru': ['capsLk', 'capsLk'], 'keyCode': 20, 'class': 'CapsLock', 'sizeClass': 'caps' },
        { 'en': ['a', 'A'], 'ru': ['ф', 'Ф'], 'keyCode': 65, 'class': 'KeyA' },
        { 'en': ['s', 'S'], 'ru': ['ы', 'Ы'], 'keyCode': 83, 'class': 'KeyS' },
        { 'en': ['d', 'D'], 'ru': ['в', 'В'], 'keyCode': 68, 'class': 'KeyD' },
        { 'en': ['f', 'F'], 'ru': ['а', 'А'], 'keyCode': 70, 'class': 'KeyF' },
        { 'en': ['g', 'G'], 'ru': ['п', 'П'], 'keyCode': 71, 'class': 'KeyG' },
        { 'en': ['h', 'H'], 'ru': ['р', 'Р'], 'keyCode': 72, 'class': 'KeyH' },
        { 'en': ['j', 'J'], 'ru': ['о', 'О'], 'keyCode': 74, 'class': 'KeyJ' },
        { 'en': ['k', 'K'], 'ru': ['л', 'Л'], 'keyCode': 75, 'class': 'KeyK' },
        { 'en': ['l', 'L'], 'ru': ['д', 'Д'], 'keyCode': 76, 'class': 'KeyL' },
        { 'en': [';', ';'], 'ru': ['ж', 'Ж'], 'keyCode': 186, 'class': 'Semicolon' },
        { 'en': ['\'', '\"'], 'ru': ['э', 'Э'], 'keyCode': 222, 'class': 'Quote' },
        { 'en': ['enter', 'enter'], 'ru': ['enter', 'enter'], 'keyCode': 13, 'class': 'Enter', 'sizeClass': 'enter' }
    ],
    [
        { 'en': ['shift', 'shift'], 'ru': ['shift', 'shift'], 'keyCode': 16, 'class': 'ShiftLeft', 'sizeClass': 'shift' },
        { 'en': ['z', 'Z'], 'ru': ['я', 'Я'], 'keyCode': 90, 'class': 'KeyZ' },
        { 'en': ['x', 'X'], 'ru': ['ч', 'Ч'], 'keyCode': 88, 'class': 'KeyX' },
        { 'en': ['c', 'C'], 'ru': ['с', 'С'], 'keyCode': 67, 'class': 'KeyC' },
        { 'en': ['v', 'V'], 'ru': ['м', 'М'], 'keyCode': 86, 'class': 'KeyV' },
        { 'en': ['b', 'B'], 'ru': ['и', 'И'], 'keyCode': 66, 'class': 'KeyB' },
        { 'en': ['n', 'N'], 'ru': ['т', 'Т'], 'keyCode': 78, 'class': 'KeyN' },
        { 'en': ['m', 'M'], 'ru': ['ь', 'Ь'], 'keyCode': 77, 'class': 'KeyM' },
        { 'en': [',', '<'], 'ru': ['б', 'Б'], 'keyCode': 188, 'class': 'Comma' },
        { 'en': ['.', '>'], 'ru': ['ю', 'Ю'], 'keyCode': 190, 'class': 'Period' },
        { 'en': ['/', '?'], 'ru': ['.', ','], 'keyCode': 191, 'class': 'Slash' },
        { 'en': ['shift', 'shift'], 'ru': ['shift', 'shift'], 'keyCode': 16, 'class': 'ShiftRight', 'sizeClass': 'shift' }
    ],
    [
        { 'en': ['ctrl', 'ctrl'], 'ru': ['ctrl', 'ctrl'], 'keyCode': 17, 'class': 'ControlLeft', 'sizeClass': 'crtl' },
        { 'en': ['win', 'win'], 'ru': ['win', 'win'], 'keyCode': 91, 'class': 'MetaLeft', 'sizeClass': 'win' },
        { 'en': ['alt', 'alt'], 'ru': ['alt', 'alt'], 'keyCode': 18, 'class': 'AltLeft', 'sizeClass': 'alt' },
        { 'en': ['', ''], 'ru': ['', ''], 'keyCode': 32, 'class': 'Space', 'sizeClass': 'space' },
        { 'en': ['alt', 'alt'], 'ru': ['alt', 'alt'], 'keyCode': 18, 'class': 'AltRight', 'sizeClass': 'alt' },
        { 'en': ['win', 'win'], 'ru': ['win', 'win'], 'keyCode': 91, 'class': 'MetaRight', 'sizeClass': 'win' },
        { 'en': ['ctrl', 'ctrl'], 'ru': ['ctrl', 'ctrl'], 'keyCode': 17, 'class': 'ControlRight', 'sizeClass': 'crtl' },
    ]
]
//console.log(keys[0][0].en.length)
let div = document.createElement('div');
div.className = "wrapper";
document.body.append(div);

let wrapper = document.querySelector('.wrapper');

let textarea = document.createElement('textarea');
wrapper.append(textarea);

let keywords = document.createElement('ul');
keywords.className = "keywords";

wrapper.append(keywords);

textarea.setAttribute("autofocus", true)
textarea.setAttribute("rows", "6")
textarea.setAttribute("cols", "60")

for (var o = 0; o < keys.length; o++) {
    let keywords__row = document.createElement('li');
    keywords__row.className = "keywords__row";
    keywords.append(keywords__row);
    //console.log(o)
    for (var i = 0; i < keys[o].length; i++) {
        var keyItem = keys[o][i]
        var key = document.createElement('div');
        key.className = "key"
        keywords__row.append(key)
        if (keyItem.sizeClass) {
            key.classList.add(keyItem.sizeClass)
        }

        var spanOff = document.createElement('span');
        spanOff.className = keyItem.class + " " + "off";

        var spanOn = document.createElement('span');
        spanOn.className = keyItem.class + " " + "on";

        key.append(spanOff)
        key.append(spanOn)
        var counter = true;

        for (var j = 0; j < keyItem.en.length; j++) {
            var caseEn = document.createElement('span');
            if (counter) {
                caseEn.className = "case" + " " + "up";
            } else {
                caseEn.className = "case" + " " + "down";
            }
            caseEn.innerHTML = keyItem.en[j]
            spanOn.append(caseEn)
            counter = false
        }
        counter = true
        for (var j = 0; j < keyItem.ru.length; j++) {
            var caseRu = document.createElement('span');
            if (counter) {
                caseRu.className = "case" + " " + "up";
            } else {
                caseRu.className = "case" + " " + "down";
            }
            caseRu.innerHTML = keyItem.ru[j]
            spanOff.append(caseRu)
            counter = false
        }
    }
}

var click = document.querySelectorAll('.keywords__row');
for (let tm = 0; tm < click.length; tm++) {
    click[tm].addEventListener("click", function (e) {
        var trigger;

        if (e.target.classList.contains("keywords__row")) {
            return
        }
        if (e.target.classList.contains("key")) {
            trigger = e.target;
        } else {
            trigger = e.target.parentNode.parentNode;
        }
        if (trigger.classList.contains("caps")) {
            var up = document.querySelectorAll('.up')
            var down = document.querySelectorAll('.down')
            for (var i = 0; i < down.length; i++) {
                up[i].classList.remove('up')
                down[i].classList.remove('down')
                up[i].classList.add('down')
                down[i].classList.add('up')
            }
            trigger.classList.add('active')
            setTimeout(function () { trigger.classList.remove('active') }, 200)
            return
        }
        if (trigger.classList.contains("crtl") || trigger.classList.contains("alt") || trigger.classList.contains("win") ||  trigger.classList.contains("shift")) {
            event.preventDefault();
            trigger.classList.add('active')
            setTimeout(function () { trigger.classList.remove('active') }, 200)
            return
        }
        if (trigger.classList.contains("tab")) {
            event.preventDefault();
            textarea.value = textarea.value + "\t"
            trigger.classList.add('active')
            setTimeout(function () { trigger.classList.remove('active') }, 200)
            return
        }
        if (trigger.classList.contains("space")) {
            textarea.value = textarea.value + " "
            trigger.classList.add('active')
            setTimeout(function () { trigger.classList.remove('active') }, 200)
            return
        }
        if (trigger.classList.contains("backspace")) {
            textarea.value = textarea.value.substring(0, textarea.value.length - 1)
            trigger.classList.add('active')
            setTimeout(function () { trigger.classList.remove('active') }, 200)
            return
        }
        if (trigger.classList.contains("enter")) {
            textarea.value = textarea.value + "\n"
            trigger.classList.add('active')
            setTimeout(function () { trigger.classList.remove('active') }, 200)
            return
        }

        for (var i = 0; i < trigger.childNodes.length; i++) {
            if (trigger.childNodes[i].classList.contains('on')) {
                var tr = trigger.childNodes[i]

                for (var j = 0; j < tr.childNodes.length; j++) {
                    if (tr.childNodes[j].classList.contains('up')) {
                        var tr2 = tr.childNodes[j]
                    }
                }
            }
        }
        console.log(tr2.innerHTML)
        //trigger.classList.contains('on').classList.contains('up')
        // if(trigger.childNodes.className == 'on'){

        // }
        // if (event.code == 'CapsLock') {
        //     var up = document.querySelectorAll('.up')
        //     var down = document.querySelectorAll('.down')
        //     for (var i = 0; i < down.length; i++) {
        //         up[i].classList.remove('up')
        //         down[i].classList.remove('down')
        //         up[i].classList.add('down')
        //         down[i].classList.add('up')
        //     }
        // }
        trigger.classList.add('active')
        setTimeout(function () { trigger.classList.remove('active') }, 200)
        textarea.value = textarea.value + tr2.innerHTML
    })
}








var gh = true;
document.addEventListener('keydown', function (event) {
    //console.log(textarea.value)
    //console.log(event)

    if (event) {
        textarea.focus();
    }
    //textarea.value = textarea.value + event.key
    for (var o = 0; o < keys.length; o++) {
        for (var i = 0; i < keys[o].length; i++) {
            if (event.code == keys[o][i].class) {
                var nazal = document.querySelector('.' + event.code)
                nazal.parentNode.classList.add('active')

            }
        }
    }
    if (event.code == 'Tab') {
        event.preventDefault();
        textarea.value = textarea.value + "\t"
        return
    }
    if (event.code == 'AltLeft' || event.code == 'AltRight') {
        console.log(event.code)
        event.preventDefault();
        //return
    }
    if ((event.code == 'ShiftLeft' || event.code == 'ShiftRight')) {

        if (gh) {
            var up = document.querySelectorAll('.up')
            var down = document.querySelectorAll('.down')
            for (var i = 0; i < down.length; i++) {
                up[i].classList.remove('up')
                down[i].classList.remove('down')
                up[i].classList.add('down')
                down[i].classList.add('up')
            }
        }
        gh = false
        //return
    }
    console.log(121)
    if ((event.code == 'ShiftLeft' && event.altKey)||
    (event.code == 'AltLeft' && event.shiftKey) ) {

        var on = document.querySelectorAll('.on')
        var off = document.querySelectorAll('.off')
        for (var i = 0; i < on.length; i++) {
            on[i].classList.remove('on')
            off[i].classList.remove('off')
            on[i].classList.add('off')
            off[i].classList.add('on')
        }
        //localStorage.setItem('test', false);
        if (localStorage.getItem('test', false) == "false") {
            localStorage.setItem('test', true);
        } else {
            localStorage.setItem('test', false);
        }
        gh = false
        //return
    }



    
    if (event.code == 'CapsLock') {
        var up = document.querySelectorAll('.up')
        var down = document.querySelectorAll('.down')
        for (var i = 0; i < down.length; i++) {
            up[i].classList.remove('up')
            down[i].classList.remove('down')
            up[i].classList.add('down')
            down[i].classList.add('up')
        }
        return
    }

});

document.addEventListener('keyup', function (event) {
    if (event.code == 'ShiftLeft' && event.shiftKey) {
        return
    }
    for (var i = 0; i < document.querySelectorAll('.active').length; i++) {
        if (document.querySelectorAll('.active')[i]) {
            var po = document.querySelectorAll('.active')[i]
            po.classList.remove('active')
        }
    }
    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {

        var up = document.querySelectorAll('.up')
        var down = document.querySelectorAll('.down')
        for (var i = 0; i < down.length; i++) {
            up[i].classList.remove('up')
            down[i].classList.remove('down')
            up[i].classList.add('down')
            down[i].classList.add('up')

        }
        gh = true
    }

    // if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
    //     return
    // }

});
if (!localStorage.getItem('test')) {
    localStorage.setItem('test', true);
}

//console.log(localStorage.getItem('test'))
if (localStorage.getItem('test') !== "false") {
    var on = document.querySelectorAll('.on')
    var off = document.querySelectorAll('.off')
    for (var i = 0; i < on.length; i++) {
        on[i].classList.remove('on')
        off[i].classList.remove('off')
        on[i].classList.add('off')
        off[i].classList.add('on')
    }
}
